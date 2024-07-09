export interface GetMultiAccountResourceCenterServiceStatusResponse {
    /**
     * 请求ID。
     * @example `81671397-1425-51F1-A144-4799E01BEBFF`
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
