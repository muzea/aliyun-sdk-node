export interface ListClusterResponse {
    /**
     * 接口状态或POP错误码
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `1053-08e4-47a5-b2ab-5c0323de****`
     */
    RequestId: string;
    ClusterList: {
        /**
         * 集群列表
         */
        Cluster: {
            /**
             * VPC ID
             * @example `vpc-23727****`
             */
            VpcId: string;
            /**
             * Docker集群支持的CPU超卖比例。
             * - 1：1:1比例，不超卖
             * - 2：1:2比例
             * - 4：1:4比例
             * - 8：1:8比例
             * @example `1`
             */
            OversoldFactor: number;
            /**
             * 最后变更时间的时间戳
             * @example `1533820823203`
             */
            UpdateTime: number;
            /**
             * 已使用内存，单位为MB。
             * @example `200`
             */
            MemUsed: number;
            /**
             * 集群供应商
             * @example `ALIYUN`
             */
            IaasProvider: string;
            /**
             * 创建时间的时间戳
             * @example `1502888064561`
             */
            CreateTime: number;
            /**
             * 已使用CPU核数
             * @example `1`
             */
            CpuUsed: number;
            /**
             * 总内存，单位为MB。
             * @example `3072`
             */
            Mem: number;
            /**
             * 地域ID
             * @example `cn-beijing`
             */
            RegionId: string;
            /**
             * 总CPU核数
             * @example `2`
             */
            Cpu: number;
            /**
             * 容器服务Kubernetes版中创建的K8s集群的ID
             * @example `c2ce************b9203a9`
             */
            CsClusterId: string;
            /**
             * 网络类型。
             * - 1：经典网络
             * - 2：VPC
             * @example `1`
             */
            NetworkMode: number;
            /**
             * 集群描述
             * @example `测试集群`
             */
            Description: string;
            /**
             * 集群类型。
             * - 0：普通Docker集群
             * - 1：Swarm集群
             * - 2：ECS集群
             * - 3：EDAS自建K8s集群
             * - 4：Pandora自动注册应用集群
             * - 5：容器服务K8s集群
             * @example `2`
             */
            ClusterType: number;
            /**
             * 资源组ID
             * @example `461`
             */
            ResourceGroupId: string;
            /**
             * 集群名称
             * @example `cluster-test`
             */
            ClusterName: string;
            /**
             * 实例数量
             * @example `2`
             */
            NodeNum: number;
            /**
             * EDAS中的集群ID
             * @example `b98b5919-c111-4dad-9f74-7233********`
             */
            ClusterId: string;
        }[];
    };
}
