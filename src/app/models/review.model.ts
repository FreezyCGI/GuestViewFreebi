export class Review
{
    reviewId: number = -1;
    itemId?: number= -1;
    orderId: string = ''
    description?: string = "";
    stars: number = -1;
    createdAt: Date = new Date;
}
