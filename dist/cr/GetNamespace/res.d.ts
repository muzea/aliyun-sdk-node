export interface GetNamespaceResponse {
    /**
     * 默认仓库类型，取值：
     * - PUBLIC：公开仓库
     * - PRIVATE：私有仓库
     * @example `PUBLIC`
     */
    DefaultRepoType: string;
    /**
     * 命名空间ID
     * @example `crn-tiw8t3f8i5lt****`
     */
    NamespaceId: string;
    /**
     * 命名空间状态
     * @example `NORMAL`
     */
    NamespaceStatus: string;
    /**
     * 请求ID
     * @example `E4BC9E21-8AA5-4582-83C1-C1209AB8196F`
     */
    RequestId: string;
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 实例ID
     * @example `cri-kmsiwlxxdcva****`
     */
    InstanceId: string;
    /**
     * 开启自动创建仓库
     * @example `true`
     */
    AutoCreateRepo: boolean;
    /**
     * 是否成功
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 命名空间名称
     * @example `test`
     */
    NamespaceName: string;
    ResourceGroupId: string;
}
