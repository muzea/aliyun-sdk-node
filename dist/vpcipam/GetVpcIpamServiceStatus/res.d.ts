export interface GetVpcIpamServiceStatusResponse {
    /**
     * 请求ID。
     * @example `2FEE9FFF-57EE-5832-BE88-9308352F3B68`
     */
    RequestId: string;
    /**
     * 是否已开通IPAM服务。
     * - **true**：已开通。
     * - **false**：未开通。
     * @example `true`
     */
    Enabled: boolean;
}
