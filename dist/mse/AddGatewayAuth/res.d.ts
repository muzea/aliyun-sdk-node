export interface AddGatewayAuthResponse {
    /**
     * 请求ID。
     * @example `4279C00F-A5E1-53C6-A43B-751C1C524D0B`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * @example `OK`
     */
    Message: string;
    /**
     * 用于和Success同步，当Success为true时，Code为200。
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
     * 创建的鉴权ID。
     * @example `333`
     */
    Data: number;
}
