export interface DescribeClusterBasicInfoResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `24A20733-10A0-4AF6-BE6B-E3322413BB68`
     */
    RequestId: string;
    /**
     * 集群详情信息。
     */
    ClusterInfo: {
        /**
         * 当前集群中存在的实例数量。
         * @example `10`
         */
        InstanceCount: number;
        /**
         * 集群类型。取值：
         * - **ManagedKubernetes**：kubernetes托管版
         * - **NotManagedKubernetes**：kubernetes非托管版
         * - **PrivateKubernetes**：私有集群
         * - **kubernetes**：kubernetes专有版
         * - **ask**：ask专有版
         * @example `kubernetes`
         */
        ClusterType: string;
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
         * 创建集群时间戳，单位为毫秒。
         * @example `1662038134000`
         */
        CreateTime: number;
        /**
         * 集群名称。
         * @example `testackpro`
         */
        ClusterName: string;
        /**
         * 当前集群的版本信息。
         * @example `1.22.10-aliyun.1`
         */
        CurrentVersion: string;
        /**
         * 集群开关。
         * - **true**：开
         * - **false**：关
         * @example `true`
         */
        TargetResult: boolean;
        /**
         * 集群所在的地域的ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 集群ID。
         * @example `c870ec78ecbcb41d2a35c679823ef****
        `
         */
        ClusterId: string;
    };
}
