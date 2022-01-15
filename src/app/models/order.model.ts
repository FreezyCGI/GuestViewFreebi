import { MenuItemModel } from "./menu-item-model.model";

export class Order
{
    orderId: string = "";
    status: string = "";
    orderDate: Date = new Date();
    paymentReference: string = "";
    menuItems: MenuItemModel[] = [];
}
