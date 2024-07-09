export interface GetQueryResultRequest {
    /**
     * 查询ID
     * > 您可以调用接口SubmitQuery获取查询ID。
     * @example `Q-41676378709440CE`
     */
    "QueryId"?: string;
    /**
     * 页码
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页大小
     * @example `100`
     */
    "PageSize"?: number;
}
