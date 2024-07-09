export interface DeleteFlowRulesResponse {
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
     * @example `FAF577DD-8E8E-5BE6-80CC-380E19******`
     */
    RequestId: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
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
