export interface UpdateAuthPolicyResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `83E3909D-D26F-5D97-B73B-407A26***`
     */
    RequestId: string;
    /**
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 数据概览。
     * @example `{}`
     */
    Data: string;
    /**
     * 响应码。
     * @example `500`
     */
    Code: number;
    /**
     * 请求结果，取值如下：- true：请求成功。- false：请求失败。
     * @example `true`
     */
    Success: boolean;
}
