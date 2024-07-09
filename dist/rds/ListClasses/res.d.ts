export interface ListClassesResponse {
    /**
     * 请求ID。
     * @example `CF8D35BF-263D-4F7B-883A-1163B79A9EC6`
     */
    RequestId: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 实例规格信息列表。
     */
    Items: {
        /**
         * 实例规格对应的最大IOPS。单位：次/秒。
         * @example `10000`
         */
        MaxIOPS: string;
        /**
         * 实例规格对应的CPU核数。单位：个。
         * @example `1`
         */
        Cpu: string;
        /**
         * 实例规格对应的价格。
         * <props="china">
         * * 单位：分（人民币）。
         * </props>
         * <props="intl">
         * * 单位：分（美元）。
         * </props>
         * > * **CommodityCode**参数中传入按量付费商品码时，本参数展示每小时的价格。
         * > * **CommodityCode**参数中传入包年包月商品码时，本参数展示每月的价格。
         * @example `2500`
         */
        ReferencePrice: string;
        /**
         * 实例规格对应的最大连接数。单位：个。
         * @example `2000`
         */
        MaxConnections: string;
        /**
         * 实例规格对应的内存容量。单位：GB。
         * @example `1GB`
         */
        MemoryClass: string;
        /**
         * 实例规格代码。更多信息，请参见[主实例规格列表](~~26312~~)和[只读实例规格列表](~~145759~~)。
         * @example `mysql.n1.micro.1`
         */
        ClassCode: string;
        /**
         * 实例规格族。更多信息，请参见[实例规格族](~~57184~~)。
         * @example `general-purpose`
         */
        ClassGroup: string;
        /**
         * 实例规格对应的最大IO带宽。单位：Mbps。
         * @example `1024Mbps`
         */
        MaxIOMBPS: string;
        /**
         * 安全增强型实例规格加密内存大小。单位：GB。
         * @example `4`
         */
        EncryptedMemory: string;
        /**
         * 实例规格所属架构类型，返回值如下：
         * - 如果是实例为**x86**架构，默认该参数返回值为空。
         * - 如果是实例为**arm**架构，则返回**arm**。
         * @example `arm`
         */
        InstructionSetArch: string;
    }[];
}
