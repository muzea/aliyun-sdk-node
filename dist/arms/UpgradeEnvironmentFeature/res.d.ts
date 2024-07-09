export interface UpgradeEnvironmentFeatureResponse {
    /**
     * Id of the request
     * @example `01FF8DD9-A09C-47A1-895A-B6E321BE77B6`
     */
    RequestId: string;
    /**
     * 状态码。说明 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回结果的提示信息。
     * @example `success`
     */
    Message: string;
    /**
     * 查询是否成功：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * Job状态。
     */
    Data: any;
}
