export interface RestartEnvironmentFeatureResponse {
    /**
     * Id of the request
     * @example `2983BEF7-4A0D-47A2-94A2-8E9C5E63****`
     */
    RequestId: string;
    /**
     * 状态码。200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 调用失败时返回的信息。
     * @example `success.`
     */
    Message: string;
    /**
     * 查询是否成功。true：成功。                                 false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回信息。
     * @example `success`
     */
    Data: string;
}
