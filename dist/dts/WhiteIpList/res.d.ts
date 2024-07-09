export interface WhiteIpListResponse {
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `AD823BD3-1BA6-4117-A536-165CB280****`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 请求是否成功，返回值：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用错误时返回的错误信息。
     * @example `The Value of Input Parameter %s is not valid.`
     */
    ErrMessage: string;
    /**
     * IP白名单列表，多个IP地址中间使用英文逗号（,）分隔。
     * @example `10.151.12.0/24,47.102.181.0/24,47.101.109.0/24,120.55.129.0/24,11.115.103.0/24,47.102.234.0/24`
     */
    IpList: string;
    /**
     * 动态错误信息，用于替换返回参数**ErrMessage**错误信息中的**%s**。
     * @example `Type`
     */
    DynamicMessage: string;
    /**
     * 动态错误码，本参数即将下线。
     * @example `403`
     */
    DynamicCode: string;
}
