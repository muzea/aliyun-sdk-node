export interface GetResourceCenterServiceStatusResponse {
    /**
     * 请求ID。
     * @example `AD5F848D-CCDC-5464-93E1-4BA50A4826DD`
     */
    RequestId: string;
    /**
     * 服务状态。取值：
     * - Enabled：已开通。
     * - Disabled：已关闭。
     * @example `Enabled`
     */
    ServiceStatus: string;
    /**
     * 初始化状态。取值：
     * - Pending：准备中。
     * - Finished：就绪。
     * @example `Pending`
     */
    InitialStatus: string;
}
