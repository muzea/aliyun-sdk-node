export interface QueryDedicatedBlockStorageClusterInventoryDataResponse {
    /**
     * 专属块存储集群Id。
     * @example `dbsc-xxx`
     */
    DbscId: string;
    /**
     * 专属块存储集群名。
     * @example `myDBSCCluster`
     */
    DbscName: string;
    /**
     * IO类型。
     * @example `cloud_essd`
     */
    DiskCategory: string;
    /**
     * 查询到的数据总数。
     * @example `60`
     */
    TotalCount: number;
    /**
     * 云盘的监控数据集合。
     */
    Data: {
        /**
         * 监控项数值集合。
         */
        MonitorItems: {
            /**
             * 专属块存储集群可用容量GiB。
             * @example `61360`
             */
            AvailableSize: number;
            /**
             * 专属块存储集群总容量GiB。
             * @example `61440`
             */
            TotalSize: number;
        };
        /**
         * 查询监控信息的时间戳。
         * @example `1606403800`
         */
        Timestamp: string;
        /**
         * 资源Id。
         * @example `dbsc-xxx`
         */
        ResourceId: string;
    }[];
    /**
     * 请求id。
     * @example `F1A4258A-0C8C-5329-B495-BC5AD7AD****`
     */
    RequestId: string;
}
