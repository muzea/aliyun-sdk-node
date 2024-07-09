export interface CreateTaskOrderResponse {
    /**
     * msg
     * @example `ok`
     */
    Message: string;
    /**
     * requestId
     * @example `123`
     */
    RequestId: string;
    /**
     * 返回任务单号：OrderId
     * @example `E21111796147LE`
     */
    Data: string;
    /**
     * code
     * @example `200`
     */
    Code: string;
    /**
     * success
     * @example `true`
     */
    Success: boolean;
}
