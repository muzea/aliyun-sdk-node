export interface GetTableDesignProjectFlowRequest {
    /**
     * 结构设计工单ID。您可调用[ListOrders](~~144643~~)接口获取该参数的值。
     * @example `95****`
     */
    "OrderId": number;
    /**
     * 租户ID。
     * > 鼠标移动到界面右上角的头像处，查看租户ID。具体操作，请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
}
