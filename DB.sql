drop view if exists select_top_sellers;

drop table if exists orderedItems;
drop table if exists menu_itemsXmenu_categories;
drop table if exists menu_items;
drop table if exists menu_categories;
drop table if exists reviews;
drop table if exists reviews_menu_items;
drop table if exists orders;

create table menu_items
(
    itemid INT GENERATED BY DEFAULT AS IDENTITY primary key,
    title varchar,
	description varchar,
	price float,
	allergens varchar,
	status varchar 
);

create table menu_categories
(
	categoryId INT GENERATED BY DEFAULT AS IDENTITY primary key,
	title varchar,
	description varchar
);

create table menu_itemsXmenu_categories
(
	itemId int,
	categoryId int,
	CONSTRAINT fk_itemId
      FOREIGN KEY(itemId) 
	  REFERENCES menu_items(itemid),
	CONSTRAINT fk_categoryId
      FOREIGN KEY(categoryId) 
	  REFERENCES menu_categories(categoryId)
);

create table reviews_menu_items
(
	reviewId INT GENERATED BY DEFAULT AS IDENTITY primary key,
	itemId int,
	stars int,
	createdAt date,
	CONSTRAINT fk_itemId
      FOREIGN KEY(itemId) 
	  REFERENCES menu_items(itemid)
);

create table reviews
(
	reviewId INT GENERATED BY DEFAULT AS IDENTITY primary key,
	description varchar,
	stars int,
	createdAt date
);

create table orders
(
	orderId uuid primary key DEFAULT gen_random_uuid(),
	status VARCHAR,
	orderDate timestamp with time zone,
	tableId INT,
	paymentReference VARCHAR,
	paymentToken VARCHAR,
	totalAmount FLOAT
);

create table orderedItems
(
	itemId int,
	orderId uuid,
	count int,
	CONSTRAINT fk_itemId
      FOREIGN KEY(itemId) 
	  REFERENCES menu_items(itemid),
	CONSTRAINT fk_orderId
      FOREIGN KEY(orderId) 
	  REFERENCES orders(orderId)
);

create view select_top_sellers as
select mi.title, mi.itemid, oi.count
from (select oi.itemid, count(oi.itemid) as count
	from orderedItems oi
	group by oi.itemid
	order by sum(oi.count) desc
	limit 5) as oi, menu_items mi
where oi.itemid = mi.itemid
order by oi.count desc;

select * from menu_items;
select * from menu_categories;
select * from menu_items items, menu_categories cat, menu_itemsXmenu_categories merger
where items.itemId = merger.itemId and cat.categoryId = merger.categoryId;
select * from reviews;
select * from orders;
select * from orders, menu_items,orderedItems
where orders.orderId = orderedItems.orderId and menu_items.itemId = orderedItems.itemId 
group by orders.orderId;