export interface GetClusterResponse {
    /**
     * code码。
     * @example `200`
     */
    Code: number;
    /**
     * 详细信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `d76db491`
     */
    RequestId: string;
    /**
     * 集群信息。
     */
    Cluster: {
        /**
         * VPC网络ID。
         * @example `vpc-xxxxz1mlwpb****`
         */
        VpcId: string;
        /**
         * Docker集群CPU超卖：
         * - 1：1:1比例，不超卖。
         * - 2：1:2比例超卖
         * - 4：1:4比例超卖
         * - 8：1:8比例超卖
         * @example `2`
         */
        OversoldFactor: number;
        /**
         * 最后变更时间的时间戳。
         * @example `1570708232145`
         */
        UpdateTime: number;
        /**
         * 已使用内存量，单位MB。
         * @example `1024`
         */
        MemUsed: number;
        /**
         * IaaS资源提供者。
         * @example `ALIYUN`
         */
        IaasProvider: string;
        /**
         * 集群创建时间的时间戳。
         * @example `1570708232145`
         */
        CreateTime: number;
        /**
         * 已使用CPU核数。
         * @example `2`
         */
        CpuUsed: number;
        /**
         * 内存总量，单位为MB。
         * @example `2048`
         */
        Mem: number;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * CPU总核数。
         * @example `4`
         */
        Cpu: number;
        /**
         * 容器服务集群ID。
         * @example `c2ce62869f4d4466b920312315f05****`
         */
        CsClusterId: string;
        /**
         * 网络类型：
         * - 1：经典网络。
         * - 2：VPC。
         * @example `2`
         */
        NetworkMode: number;
        /**
         * 描述。
         * @example `测试`
         */
        Description: string;
        /**
         * 集群类型。
         * - 0：普通Docker集群
         * - 1：Swarm集群
         * - 2：ECS集群
         * - 3：EDAS自建K8s集群
         * - 4：Pandora自动注册应用集群类型
         * - 5：容器服务K8s集群
         * @example `2`
         */
        ClusterType: number;
        /**
         * 集群名称。
         * @example `ClusterTest`
         */
        ClusterName: string;
        /**
         * ECS数量。
         * @example `4`
         */
        NodeNum: number;
        /**
         * 导入集群状态。
         * - 1：导入成功
         * - 2：导入失败
         * - 3：正在导入
         * - 4：集群已删除
         * - 0：未导入
         * @example `0`
         */
        ClusterImportStatus: number;
        /**
         * 集群ID。
         * @example `5439271a-015b-433d-befb-d76d****`
         */
        ClusterId: string;
        /**
         * K8s类型集群的子类型：ManagedKubernetes为阿里云ACK集群类型，
         * Ask为阿里云ASK集群类型，
         * ExternalKubernetes为外部集群类型。
         * @example `ManagedKubernetes`
         */
        SubClusterType: string;
    };
}
