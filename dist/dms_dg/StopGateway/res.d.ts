export interface StopGatewayResponse {
    /**
     * 响应码。
     * @example `200`
     */
    Code: string;
    /**
     * 返回结果。
     * @example `SUCCESS`
     */
    Data: string;
    /**
     * 报错信息。
     * @example `Gateway exception, please launch local dg first`
     */
    ErrorMsg: string;
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `DE3CC21B-E317-5ED7-A212-A62517EA0022`
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
