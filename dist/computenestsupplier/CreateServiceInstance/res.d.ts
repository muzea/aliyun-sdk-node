export interface CreateServiceInstanceResponse {
    /**
     * 服务实例状态。可能值：
     * - Created：已创建。
     * - Deploying：部署中。
     * - DeployedFailed：部署失败。
     * - Deployed：已部署。
     * - Upgrading：升级中。
     * - Deleting：删除中。
     * - Deleted：已删除。
     * - DeletedFailed：删除失败。
     * @example `Created`
     */
    Status: string;
    /**
     * 请求ID。
     * @example `4DB0F536-B3BE-4F0D-BD29-E83FB56D****`
     */
    RequestId: string;
    /**
     * 服务实例ID。
     * @example `si-d6ab3a63ccbb4b17****`
     */
    ServiceInstanceId: string;
}
