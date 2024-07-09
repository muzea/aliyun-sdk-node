export interface GetPublicIpAddressPoolServiceStatusResponse {
    /**
     * 请求ID。
     * @example `54B48E3D-DF70-471B-AA93-06F82A1B457`
     */
    RequestId: string;
    /**
     * IP地址池功能是否开通。取值：
     * - **true**：已开通。
     * - **false**：未开通。您可以调用OpenPublicIpAddressPoolService接口开通IP地址池功能。
     * @example `true`
     */
    Enabled: boolean;
}
