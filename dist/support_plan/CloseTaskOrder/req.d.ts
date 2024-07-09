export interface CloseTaskOrderRequest {
    /**
     * 任务单id
     * @example `E211129AE190Y3`
     */
    "OrderId": string;
    /**
     * 操作人姓名
     * @example `操作人姓名`
     */
    "UserName"?: string;
}
