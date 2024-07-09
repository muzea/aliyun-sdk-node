export interface DescribeClusterResponse {
    /**
     * 请求id。
     * @example `887FA855-89F4-5DB3-B305-C5879EC480E6`
     */
    RequestId: string;
    /**
     * 创建时间
     * @example `2022-06-08T07:05:11Z`
     */
    CreateTime: string;
    /**
     * 节点数
     * @example `2`
     */
    NodeCount: number;
    /**
     * 节点组数量
     * @example `2`
     */
    NodeGroupCount: number;
    /**
     * 更新时间
     * @example `2022-08-23T06:36:17.000Z`
     */
    UpdateTime: string;
    /**
     * 集群描述
     * @example `测试集群`
     */
    ClusterDescription: string;
    /**
     * 集群状态
     * @example `running`
     */
    OperatingState: string;
    /**
     * 组件信息
     */
    Components: {
        /**
         * 组件类型
         * @example `ACKEdge`
         */
        ComponentType: string;
        /**
         * 组件id
         * @example `i149549021660892626529`
         */
        ComponentId: string;
    }[];
    /**
     * 集群id
     * @example `i116913051662373010974`
     */
    ClusterId: string;
    /**
     * 集群名称
     * @example `Eflo-YJ-Test-Cluster`
     */
    ClusterName: string;
    /**
     * 任务id
     * @example `i152609221670466904596`
     */
    TaskId: string;
    /**
     * 集群类型
     * @example `AckEdgePro`
     */
    ClusterType: string;
    /**
     * 网络信息
     */
    Networks: {
        /**
         * 集群网段id
         * @example `vpd-iqd7xunc`
         */
        VpdId: string;
    }[];
    /**
     * 资源组id
     * @example `rg-aek2k3rqlvv6ytq`
     */
    ResourceGroupId: string;
    /**
     * 专有网络ID
     * @example `vpc-0jlkqysom5dmcviymep3f`
     */
    VpcId: string;
    /**
     * 集群编号
     * @example `A2`
     */
    HpnZone: string;
    ComputingIpVersion: string;
}
