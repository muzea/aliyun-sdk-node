interface DescribeHistoryMonitorValuesRequest {
    "RegionId"?: string;
    /**
    * 历史监控开始时间点；采用ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
    * @example `2018-10-18T12:00:00Z`
    */ "StartTime": string;
    /**
    * 历史监控结束时间点；采用ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。结束时间必须晚于开始时间。
    * @example `2018-10-19T12:00:00Z`
    */ "EndTime": string;
    /**
    * 历史监控数据间隔，单位m（分钟），唯一值`01m`。
    * @example `01m`
    */ "IntervalForHistory": string;
    "OwnerId"?: number;
    /**
    * 目标实例的ID。
    * @example `r-bp1xxxxxxxxxxxxx`
    */ "InstanceId": string;
    /**
    * 监控项。可调用[DescribeMonitorItems](~~61106~~)查询。
    * @example `hscan`
    */ "MonitorKeys"?: string;
    /**
    * 传入集群实例中特定子节点的ID查询该节点的监控信息。
    * @example `r-bp1xxxxxxxxxxxxx-db-0#6xxxxx5`
    */ "NodeId"?: string;
}
export { DescribeHistoryMonitorValuesRequest };