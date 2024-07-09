export interface InstallEnvironmentFeatureResponse {
    /**
     * Id of the request
     * @example `4C518054-852F-4023-ABC1-4AF95FF7****`
     */
    RequestId: string;
    /**
     * 状态码。200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `message`
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
     * 返回ReleaseID。
     * @example `83FCC44C-A056-18AF-A902-7043E723F0D9`
     */
    Data: string;
}
