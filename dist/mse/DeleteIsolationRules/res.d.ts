export interface DeleteIsolationRulesResponse {
    /**
     * 返回码。
     * @example `200`
     */
    Code: number;
    /**
     * 响应信息。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `4E9FDCFE-0738-493B-B801-82BDFBCB****`
     */
    RequestId: string;
    /**
     * 请求结果。
     * @example `true`
     */
    Success: boolean;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 完成删除的规则ID列表。
     */
    Data: number[];
}
