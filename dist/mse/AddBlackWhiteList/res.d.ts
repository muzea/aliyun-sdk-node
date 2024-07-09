export interface AddBlackWhiteListResponse {
    /**
     * 请求ID。
     * @example `966F6CA7-16D0-50AB-AB02-E140934F90C1`
     */
    RequestId: string;
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 错误信息。
     * @example `You are not authorized to perform this operation.`
     */
    Message: string;
    /**
     * 返回码。
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
    /**
     * 记录ID。
     * @example `2`
     */
    Data: number;
}
