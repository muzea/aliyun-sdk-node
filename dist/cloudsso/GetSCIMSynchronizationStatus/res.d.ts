export interface GetSCIMSynchronizationStatusResponse {
    /**
     * 请求ID。
     * @example `7C086C2F-1C66-57B3-B14E-2C1DA70727CD`
     */
    RequestId: string;
    /**
     * SCIM同步状态。取值：
     * - Enabled：启用。
     * - Disabled：禁用。
     * @example `Enabled`
     */
    SCIMSynchronizationStatus: string;
}
