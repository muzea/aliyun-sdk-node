export interface QueryHBaseHaDBResponse {
    /**
     * 页面大小
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求Id
     * @example `963355AD-A3B1-4654-AFFC-B5186EB8F889`
     */
    RequestId: string;
    /**
     * 页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表总数
     * @example `1`
     */
    TotalCount: number;
    ClusterList: {
        /**
         * 高可用列表
         */
        Cluster: {
            /**
             * bdsId
             * @example `bds-t4n3496whj23ia4k`
             */
            BdsName: string;
            /**
             * 主实例Id
             * @example `hb-t4nn7dy1u1etbzmzm`
             */
            ActiveName: string;
            /**
             * 高可用Id
             * @example `ha-v21tmnxjwh2yuy1il`
             */
            HaName: string;
            /**
             * 备实例Id
             * @example `hb-t4n0ye37832tx22vz`
             */
            StandbyName: string;
            HaSlbConnList: {
                /**
                 * 该高可用实例下的高可用slb链接
                 */
                HaSlbConn: {
                    /**
                     * 目前绑定的是主实例还是备实例。值：
                     * 1. Active    主
                     * 2. Standby  备
                     * @example `Standby`
                     */
                    HbaseType: string;
                    /**
                     * 高可用类型。可选值
                     * 1. thrift
                     * 2. phoenix
                     * @example `phoenix`
                     */
                    SlbType: string;
                    /**
                     * thrift/phoenix高可用链接地址
                     * @example `ha-v21tmnxjwh2yuy1il-phoenix.bds.9b78df04-b.rds.aliyuncs.com:8765`
                     */
                    SlbConnAddr: string;
                }[];
            };
        }[];
    };
}
