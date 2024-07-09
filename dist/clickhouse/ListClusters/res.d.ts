export interface ListClustersResponse {
    /**
     * 总记录数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页记录数，取值：
     * - **30**（默认值）
     * - **50**
     * - **100**
     * @example `30`
     */
    PageSize: number;
    /**
     * 集群列表。
     */
    Data: {
        /**
         * 集群ID。
         * @example `cc-bp108z124a8o7****`
         */
        DBClusterId: string;
        /**
         * 集群描述。
         * @example `test`
         */
        DBClusterDescription: string;
        /**
         * 集群的内核版本号，固定为**21.8**。
         * @example `21.8`
         */
        EngineVersion: string;
        /**
         * 阿里云账号ID。
         * @example `140692647406****`
         */
        AliUid: number;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * VPC ID。
         * @example `vpc-2zedznmtm8j7fksbc****`
         */
        VpcId: string;
        /**
         * 可用区ID。
         * @example `cn-hangzhou-h`
         */
        ZoneId: string;
        /**
         * 交换机ID。
         * @example `vsw-bp1tg609m5j85jejq****`
         */
        VswitchId: string;
        /**
         * 付费类型，取值说明：
         * - **Postpaid**：按量付费。
         * - **Prepaid**：预付费（包年包月）。
         * @example `Postpaid`
         */
        PayType: string;
        /**
         * 售卖商品Code。
         * @example `clickhouse_go_public_cn`
         */
        CommodityCode: string;
        /**
         * 集群的创建时间，格式：yyyy-MM-ddTHH:mm:ssZ。
         * @example `2022-03-18T08:14:48Z`
         */
        CreateTime: string;
        /**
         * 集群的到期时间，格式：yyyy-MM-ddTHH:mm:ssZ。
         * >按量付费集群无到期时间，返回值为空。
         * @example `2022-04-17T08:14:48Z`
         */
        ExpireTime: string;
        /**
         * 集群的锁定模式，取值说明：
         * - **Unlock**：正常。
         * - **ManualLock**：手动触发锁定。
         * - **LockByExpiration**：集群过期自动锁定。
         * - **LockByRestoration**：集群回滚前的自动锁定。
         * - **LockByDiskQuota**：集群空间满自动锁定。
         * @example `Unlock`
         */
        LockMode: string;
        /**
         * 锁定原因。
         * >锁定模式为Unlock时，返回值为空。
         * @example `DISK_FULL`
         */
        LockReason: string;
        /**
         * 集群的状态，取值说明：
         * - **OrderPreparing**：订单确认中。
         * - **Creating**：创建中。
         * - **Running**：运行中。
         * - **ResourceChanging**：资源变配中。
         * - **ResourceChangingInReadonly**：资源变配中（实例写入锁定）。
         * - **Deleting**：删除中。
         * @example `Running`
         */
        DBClusterStatus: string;
        /**
         * 集群的CPU规格，单位：核。
         * @example `8`
         */
        ResourceCpuCores: number;
        /**
         * 集群的内存规格，单位：GB。
         * @example `32`
         */
        ResourceMemoryGiB: number;
        /**
         * 集群的缓存类型。
         * @example `CloudESSD`
         */
        CacheStorageType: string;
        /**
         * 集群的缓存空间，单位：GB。
         * @example `200`
         */
        CacheStorageSizeGiB: number;
        /**
         * 集群的存储用量，单位：GB。
         * @example `0`
         */
        ObjectStoreSizeGiB: number;
        /**
         * 计算组列表。
         */
        VirtualWareHouses: {
            /**
             * 计算组ID。
             * @example `vw-uf6a499c0m3w5****`
             */
            VirtualWareHouseId: string;
            /**
             * 计算组描述。
             * @example `test`
             */
            VirtualWareHouseDescription: string;
            /**
             * 计算组的状态，取值说明：
             * - **Creating**：创建中。
             * - **Running**：运行中。
             * - **CreatingPublicSLB**：创建公网链接中。
             * - **DeletingPublicSLB**：释放公网链接中。
             * - **ResourceChanging**：资源变配中。
             * - **ResourceChangingInReadonly**：资源变配中（计算组写入锁定）。
             * - **Deleting**：删除中。
             * @example `Running`
             */
            VirtualWareHouseStatus: string;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-h`
             */
            ZoneId: string;
            /**
             * 交换机ID。
             * @example `vsw-bp1tg609m5j85jejq****`
             */
            VswitchId: string;
            /**
             * 计算组的规格码。
             * @example `n1.xlarge`
             */
            VirtualWareHouseClass: string;
            /**
             * 计算组的缓存空间，单位：GB。
             * @example `200`
             */
            VirtualWareHouseCacheStorage: number;
            /**
             * 计算组的端口号。
             * @example `tcp:9000,http:8123,mysql:9004`
             */
            Ports: string;
        }[];
    }[];
    /**
     * 请求ID。
     * @example `DDB109DC-E37D-5475-8D49-47542C57BD38`
     */
    RequestId: string;
}
