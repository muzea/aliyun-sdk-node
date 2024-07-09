export interface DownloadGatewayProgramResponse {
    /**
     * 响应码。
     * @example `200`
     */
    Code: string;
    /**
     * 返回结果。
     * @example `https://dg-prod-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/dg3-pkgs/DBGateway_linux?Expires=170833****&OSSAccessKeyId=LTAIfHvNGC8y****&Signature=wa8KqWuyZdB0hwx%2BKvbgZeSTW****`
     */
    Data: string;
    /**
     * 报错信息。
     * @example `Gateway exception, please launch local dg first`
     */
    ErrorMsg: string;
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `15D856B8-A95C-5DA5-B0FC-67246286EA7F`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
}
