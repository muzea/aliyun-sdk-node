export interface DescribeInstanceModificationPriceRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 需要查询升配价格的实例ID。
     * @example `i-bp1f2o4ldh8l****`
     */
    "InstanceId": string;
    /**
     * 实例升配的目标实例规格。建议您先调用[DescribeResourcesModification](~~66187~~)查询指定可用区内可升配的实例规格信息。
     * > 查询时，实例规格参数（`InstanceType`）和数据盘参数（`DataDisk.N.*`）不得同时为空，必须至少指定一个。
     * @example `ecs.g6e.large`
     */
    "InstanceType"?: string;
    /**
     * 系统盘类型。仅当从已停售的实例规格升配至在售实例规格，并将非I/O优化实例规格升级为I/O优化实例规格时，才需要传入参数值。关于实例规格的更多信息，请参见[实例规格族](~~25378~~)以及[已停售的实例规格](~~55263~~)。
     * 取值范围：
     * - cloud_efficiency：高效云盘。
     * - cloud_ssd：SSD云盘。
     * 默认值：无。
     * @example `cloud_ssd`
     */
    "SystemDisk.Category"?: string;
    /**
     * 数据盘类型信息。
     */
    "DataDisk"?: {
        /**
         * 当数据盘类型为ESSD云盘时，设置云盘的性能等级。N的取值必须和`DataDisk.N.Category=cloud_essd`中的N保持一致。取值范围：
         * - PL0：单盘最高随机读写IOPS 1万。
         * - PL1：单盘最高随机读写IOPS 5万。
         * - PL2：单盘最高随机读写IOPS 10万。
         * - PL3：单盘最高随机读写IOPS 100万。
         * 默认值：PL1。
         * 有关如何选择ESSD性能等级，请参见[ESSD云盘](~~122389~~)。
         * @example `PL1`
         */
        PerformanceLevel: string;
        /**
         * 数据盘的容量大小。N的取值范围：1~16，内存单位为GiB。取值范围：
         * - cloud_efficiency：20~32768。
         * - cloud_ssd：20~32768。
         * - cloud_essd：具体取值范围与`DataDisk.N.PerformanceLevel`的取值有关。
         *     - PL0：1~32768。
         *     - PL1：20~32768。
         *     - PL2：461~32768。
         *     - PL3：1261~32768。
         * - cloud：5~2000。
         * 默认值：指定数据盘类型相应的容量大小的最小值。
         * @example `100`
         */
        Size: number;
        /**
         * 数据盘类型。当您需要查询ECS实例挂载的新包年包月数据盘的价格时，可以传入该参数值。N的取值范围：1~16。取值范围：
         * - cloud_efficiency：高效云盘。
         * - cloud_ssd：SSD云盘。
         * - cloud_essd：ESSD云盘。
         * - cloud：普通云盘。
         * 默认值：无。
         * > 查询时，实例规格参数（`InstanceType`）和数据盘参数（`DataDisk.N.*`）不得同时为空，必须至少指定一个。
         * @example `cloud_essd`
         */
        Category: string;
    }[];
}
