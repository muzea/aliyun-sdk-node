export interface UpgradeServiceInstanceResponse {
    /**
     * 服务实例的部署状态。可能值：
     * - Created：已创建
     * - Deploying：部署中
     * - DeployedFailed：部署失败
     * - Deployed：已部署
     * - Upgrading：升级中
     * - Deleting：删除中
     * - Deleted：已删除
     * - DeletedFailed：删除失败
     * @example `Created`
     */
    Status: string;
    /**
     * 请求ID。
     * @example `F224E002-AB0E-5FD9-A87E-54AEE56F6CAE`
     */
    RequestId: string;
    /**
     * 服务实例ID。
     * @example `si-5cbae874da0e47xxxxxx`
     */
    ServiceInstanceId: string;
    /**
     * 升级需要的参数。
     */
    UpgradeRequiredParameters: string[];
}
