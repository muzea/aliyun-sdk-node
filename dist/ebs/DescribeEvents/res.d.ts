export interface DescribeEventsResponse {
    /**
     * Id of the request
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 分页查询时的结果总条数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `AAAAAdDWBF2****`
     */
    NextToken: string;
    /**
     * 事件列表。
     */
    ResourceEvents: {
        /**
         * 事件类型。可能值：
         * 1. Notification
         * 2. SystemException
         * 3. Alert
         * @example `Alert`
         */
        EventType: string;
        /**
         * 事件名称。可能值：
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
        EventName: string;
        /**
         * 资源ID。
         * @example `d-bp67acfmxazb4p****
        `
         */
        ResourceId: string;
        /**
         * 资源类型。
         * @example `disk`
         */
        ResourceType: string;
        /**
         * 事件状态。可能值：
         * 1. WillExecute：待处理
         * 2. Executing：处理中
         * 3. Executed：已处理
         * 4. Ignore：已忽略
         * 5. Expired：已过期
         * 6. Deleted：已删除
         * @example `WillExecute`
         */
        Status: string;
        /**
         * 事件开始时间戳（毫秒级）。
         * @example `1684204822000`
         */
        StartTime: string;
        /**
         * 事件描述。
         * @example `可通过购买4296预配置IOPS以获得成本优化，根据您过往7天使用情况，预计成本可以下降16%。`
         */
        Description: string;
        /**
         * 事件发生后的推荐操作。可能值：
         * - ModifyDiskSpec：变配
         * - CreateSnapshot：打快照
         * - ResizeDisk：扩容
         * - AdjustProvision：调节预配置等
         * - ModifyInstanceSpec：实例变配
         * @example `AdjustProvision`
         */
        RecommendAction: string;
        /**
         * 事件发生后的推荐操作的参数。
         * @example `4296`
         */
        RecommendParams: string;
        /**
         * 事件级别，可能值：
         * 1. INFO
         * 2. WARN
         * 3. CRITICAL
         * @example `INFO`
         */
        EventLevel: string;
        /**
         * 事件结束时间戳（毫秒级）。
         * @example `1679538083000`
         */
        EndTime: string;
    }[];
}
