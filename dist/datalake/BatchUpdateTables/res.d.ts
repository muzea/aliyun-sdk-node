export interface BatchUpdateTablesResponse {
    /**
     * 状态码描述
     * @example `OK`
     */
    Code: string;
    /**
     * 提示相关错误信息
     * @example `.`
     */
    Message: string;
    /**
     * 请求ID
     * @example `B7F4B621-E41E-4C84-B97F-42B5380A32BB`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 报错信息
     * @example `{"ErrorDetails":{},"TableName":"test"}`
     */
    TableErrors: any[];
    /**
     * 异步更新 taskId
     * @example `f8deec55f54ac566e7ec8944fbe01588`
     */
    TaskId: string;
}
