export interface DescribeLensMonitorDisksRequest {
    /**
     * 地域 ID。您可以调用 DescribeRegions 查询块存储数据洞察支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 指定云盘ID列表。
     * @example `['d-1', 'd-2']`
     */
    "DiskIds"?: string[];
    /**
     * 云盘类型。取值范围：
     * - cloud：普通云盘。
     * - cloud_efficiency：高效云盘。
     * - cloud_ssd：SSD 盘。
     * - cloud_essd：ESSD 云盘。
     * - cloud_auto：ESSD AutoPL 云盘。
     * - cloud_essd_entry：ESSD Entry 云盘。
     * @example `cloud_auto`
     */
    "DiskCategory"?: string;
    /**
     * 云盘事件标签列表，用于筛选24小时内发生过这些事件类型的云盘。取值范围：
     * - NoSnapshot：数据保护
     * - BurstIOTriggered：突发IO
     * - CostOptimizationNeeded：成本优化
     * - DiskSpecNotMatchedWithInstance：实例与磁盘规格不匹配
     * - DiskIONo4kAligned：非4K对齐读写
     * - DiskIOHang：磁盘有IOHang发生
     * - InstanceIOPSExceedInstanceMaxLimit：实例IOPS到达上限
     * - InstanceBPSExceedInstanceMaxLimit：实例BPS到达上限
     * - DiskIOPSExceedInstanceMaxLimit：磁盘IOPS到达实例上限
     * - DiskBPSExceedInstanceMaxLimit：磁盘BPS到达实例上限
     * - DiskIOPSExceedDiskMaxLimit：磁盘IOPS到达磁盘上限
     * - DiskBPSExceedDiskMaxLimit：磁盘BPS到达磁盘上限
     * - DiskSlowIOTriggerred：磁盘存在慢IO
     */
    "LensTags"?: string[];
    /**
     * 查询凭证（Token），取值为上一次 API 调用返回的NextToken参数值。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    "NextToken"?: string;
    /**
     * 分页查询时每页行数。最大值为 100。
     * 默认值：
     * - 默认值为 10。
     * - 当设置的值大于 100 时，默认值为 100。
     * @example `10`
     */
    "MaxResults"?: number;
}
