export interface AddAuthPolicyResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `dc63-465d-8ef5-20dc18af****`
     */
    RequestId: string;
    /**
     * 响应信息。
     * @example `OK`
     */
    Message: string;
    /**
     * 数据概览。
     * @example `请求处理成功。`
     */
    Data: string;
    /**
     * Code仅仅用来和Success同步
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
}
