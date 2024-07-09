export interface DescribeInstanceTopologyResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    Topologys: {
        /**
         * 拓扑结构详情。
         */
        Topology: {
            /**
             * ECS实例所在的物理机标识。经过加密处理，不能直接和阿里云资源的标识匹配上。但不同ECS实例只要通过该参数查询到的值是一致的，就说明ECS实例是在同一个物理机上。
             * @example `ZWNobyBo****`
             */
            HostId: string;
            /**
             * 实例ID。
             * @example `i-bp67acfmxazb4p****`
             */
            InstanceId: string;
        }[];
    };
}
