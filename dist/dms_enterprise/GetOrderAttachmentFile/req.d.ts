export interface GetOrderAttachmentFileRequest {
    /**
     * 工单ID。可通过调用[ListOrders](~~144643~~)接口获取该参数的值。
     * @example `51****`
     */
    "OrderId": number;
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
}
