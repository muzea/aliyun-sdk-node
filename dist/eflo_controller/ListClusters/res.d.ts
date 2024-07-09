export interface ListClustersResponse {
    /**
     * 请求id
     * @example `2FE2B22C-CF9D-59DE-BF63-DC9B9B33A9D1`
     */
    RequestId: string;
    /**
     * 集群信息
     */
    Clusters: {
        /**
         * 组件信息
         * @example `{}`
         */
        Components: any;
        /**
         * 集群id
         * @example `i137590131672134915401`
         */
        ClusterId: string;
        /**
         * 集群name
         * @example `cnp_test_cluster`
         */
        ClusterName: string;
        /**
         * 集群状态
         * @example `initializing`
         */
        OperatingState: string;
        /**
         * 任务id
         * @example `i156365121663149566024`
         */
        TaskId: string;
        /**
         * 集群类型
         * @example `AckEdgePro`
         */
        ClusterType: string;
        /**
         * 节点数量
         * @example `12`
         */
        NodeCount: number;
        /**
         * 节点组数量
         * @example `2`
         */
        NodeGroupCount: number;
        /**
         * 创建时间
         * @example `1672134938`
         */
        CreateTime: string;
        /**
         * 更新时间
         * @example `1672134968`
         */
        UpdateTime: string;
        /**
         * 集群描述
         * @example `测试集群`
         */
        ClusterDescription: string;
        /**
         * 资源组id
         * @example `rg-aek2ajbjoloa23q`
         */
        ResourceGroupId: string;
        /**
         * 专有网络id
         * @example `vpc-0jlx4hol2bjboafzmffvd`
         */
        VpcId: string;
        /**
         * 集群编号
         * @example `B1`
         */
        HpnZone: string;
        ComputingIpVersion: string;
    }[];
    /**
     * 本次调用返回的查询凭证值。
     * @example `f4f9a292c17072a2`
     */
    NextToken: string;
}
