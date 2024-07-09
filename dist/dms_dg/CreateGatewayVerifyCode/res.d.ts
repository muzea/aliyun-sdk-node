export interface CreateGatewayVerifyCodeResponse {
    /**
     * 响应码。
     * @example `200`
     */
    Code: string;
    /**
     * 返回结果。
     * @example `0N3ufVIG43RRAs7diEoep6WHVOHPKj3a`
     */
    Data: string;
    /**
     * 报错信息。
     * @example `Gateway exception, please launch local dg first`
     */
    ErrorMsg: string;
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `C9ADD2AA-27E3-5D62-A676-092EDC5303C1`
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
