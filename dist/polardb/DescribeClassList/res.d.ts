export interface DescribeClassListResponse {
    /**
     * 请求ID。
     * @example `69A85BAF-1089-4CDF-A82F-0A140F******`
     */
    RequestId: string;
    /**
     * 集群规格列表。
     */
    Items: {
        /**
         * PSL4最大I/O请求次数，即IOPS。单位：次/秒。
         * @example `48000`
         */
        Psl4MaxIOPS: string;
        /**
         * 规格类型。
         * @example `enterprise`
         */
        ClassTypeLevel: string;
        /**
         * CPU核数。单位：个。
         * @example `8`
         */
        Cpu: string;
        /**
         * 价格。
         * <props="china">单位：分（人民币）。</props>
         * <props="intl">单位：美分（美元）。</props>
         * >* CommodityCode参数中传入按量付费的商品Code时，显示为每小时的价格。
         * >* CommodityCode参数中传入包年包月的商品Code时，显示为每月的价格。
         * @example `200000`
         */
        ReferencePrice: string;
        /**
         * 额外价格。
         * <props="china">单位：分（人民币）。</props>
         * <props="intl">单位：美分（美元）。</props>
         * >* MasterHa参数中传入cluster和single时，显示与ReferencePrice相同。
         * >* MasterHa参数中传入cluster和single时，显示单节点商品的价格。
         * @example `200000`
         */
        ReferenceExtPrice: string;
        /**
         * 最大集群并发连接数。
         * @example `8000`
         */
        MaxConnections: string;
        /**
         * 内存容量。单位：GB。
         * @example `32`
         */
        MemoryClass: string;
        /**
         * 集群规格。
         * @example `polar.mysql.x4.medium`
         */
        ClassCode: string;
        /**
         * 集群规格族。取值范围：
         * * Exclusive package：独享套餐。
         * * Exclusive physical machine：独占物理机。
         * * Beginner：入门级。
         * * Historical specifications：历史规格。
         * @example `Exclusive package`
         */
        ClassGroup: string;
        /**
         * PSL5最大I/O请求次数，即IOPS。单位：次/秒。
         * @example `96000`
         */
        Psl5MaxIOPS: string;
        /**
         * 最大I/O请求次数，即IOPS。单位：次/秒。
         * @example `32000`
         */
        MaxIOPS: string;
        /**
         * 最大存储容量。单位：TB。
         * @example `20`
         */
        MaxStorageCapacity: string;
        /**
         * ESSD PL1云盘的最大IOPS。单位：次/秒。
         * @example `50000`
         */
        Pl1MaxIOPS: string;
        /**
         * ESSD PL2云盘的最大IOPS。单位：次/秒。
         * @example `100000`
         */
        Pl2MaxIOPS: string;
        /**
         * ESSD PL3云盘的最大IOPS。单位：次/秒。
         * @example `1000000`
         */
        Pl3MaxIOPS: string;
    }[];
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
}
