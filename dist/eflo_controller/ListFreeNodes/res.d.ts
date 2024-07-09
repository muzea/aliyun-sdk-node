export interface ListFreeNodesResponse {
    /**
     * 请求id
     * @example `AA14CB86-70C4-5CB7-9E7B-6CCA77F3512B`
     */
    RequestId: string;
    /**
     * 节点列表
     */
    Nodes: {
        /**
         * 可用区id
         * @example `cn-hangzhou-j`
         */
        ZoneId: string;
        /**
         * 创建时间
         * @example `1652321554`
         */
        CreateTime: string;
        /**
         * 节点id
         * @example `e01-cn-7pp2x193801`
         */
        NodeId: string;
        /**
         * 机型
         * @example `efg1.nvga1`
         */
        MachineType: string;
        /**
         * 机器sn
         * @example `sn_pozkHBgicd`
         */
        Sn: string;
        /**
         * 机器过期时间
         * @example `1673107200`
         */
        ExpiredTime: string;
        /**
         * 集群编号
         * @example `A1`
         */
        HpnZone: string;
        /**
         * 资源组id
         * @example `rg-aekzkkbrpl4owgy`
         */
        ResourceGroupId: string;
    }[];
    /**
     * 本次调用返回的查询凭证值。
     * @example `a3f2224a5ec7224116c4f5246120abe4`
     */
    NextToken: string;
}
