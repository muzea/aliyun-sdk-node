export interface DescribeClusterInfoListResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `7E0618A9-D5EF-4220-9471-C42B5E92719F`
     */
    RequestId: string;
    /**
     * 集群信息列表。
     */
    ClusterList: {
        /**
         * 是否可用。取值：
         * - **unavailable**：不可用
         * - **Available**：可用
         * - **Creating**：创建中
         * - **CreateFailed**：创建失败
         * @example `Available`
         */
        State: string;
        /**
         * 集群类型。取值：
         * - **ManagedKubernetes**：kubernetes托管版
         * - **NotManagedKubernetes**：kubernetes非托管版
         * - **PrivateKubernetes**：私有集群
         * - **kubernetes**：kubernetes专有版
         * - **ask**：ask专有版
         * @example `ManagedKubernetes`
         */
        ClusterType: string;
        /**
         * 容器集群名称。
         * @example `test111`
         */
        ClusterName: string;
        /**
         * 容器集群的ID。
         * @example `cfeb7a9f99ce740e98c5595d0fe37****`
         */
        ClusterId: string;
        /**
         * 容器集群的地域。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 集群开关。
         * - **true**：开
         * - **false**：关
         * @example `true`
         */
        TargetResult: boolean;
    }[];
}
