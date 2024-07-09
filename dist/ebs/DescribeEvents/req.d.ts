export interface DescribeEventsRequest {
    /**
     * 地域ID。您可以调用DescribeRegions查询块存储数据洞察支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 事件名称。取值范围：
     * - NoSnapshot：数据保护
     * - BurstIOTriggered：突发 IO
     * - CostOptimizationNeeded：成本优化
     * - DiskSpecNotMatchedWithInstance：实例与磁盘规格不匹配
     * - DiskIONo4kAligned：非 4K 对齐读写
     * - DiskIOHang：磁盘有 IOHang 发生
     * - InstanceIOPSExceedInstanceMaxLimit：实例 IOPS 到达上限
     * - InstanceBPSExceedInstanceMaxLimit：实例 BPS 到达上限
     * - DiskIOPSExceedInstanceMaxLimit：磁盘 IOPS 到达实例上限
     * - DiskBPSExceedInstanceMaxLimit：磁盘 BPS 到达实例上限
     * - DiskIOPSExceedDiskMaxLimit：磁盘 IOPS 到达磁盘上限
     * - DiskBPSExceedDiskMaxLimit：磁盘 BPS 到达磁盘上限
     * @example `DiskIOHang`
     */
    "EventName"?: string;
    /**
     * 资源ID。
     * @example `d-bp67acfmxazb4p****`
     */
    "ResourceId"?: string;
    /**
     * 资源类型。取值范围：
     * - disk：磁盘
     * @example `disk`
     */
    "ResourceType"?: string;
    /**
     * 事件状态。取值范围：
     * - WillExecute：待处理
     * - Executing：处理中
     * - Executed：已处理
     * - Ignore：已忽略
     * - Expired：已过期
     * - Deleted：已删除
     * @example `WillExecute`
     */
    "Status"?: string;
    /**
     * 事件开始时间点。按照ISO8601标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2023-06-01T03:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 事件结束时间点。按照ISO8601标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2023-06-01T04:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 分页查询时每页的最大条目数。一旦设置该参数，即表示使用`MaxResults`与`NextToken`组合参数的查询方式。
     * 取值范围：1~100。
     * 默认值：10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `AAAAAdDWBF2****`
     */
    "NextToken"?: string;
}
