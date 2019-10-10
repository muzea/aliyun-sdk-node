interface DescribeSiteMonitorDataRequest {
    "RegionId"?: string;
    /**
    * 监控项的名称，可选为：
    * - Availability（可用率）
    * - ResponseTime（响应时间)。
    * @example `Availability`
    */ "MetricName": string;
    /**
    * 任务ID。
    * @example `49f7b317-7645-4cc9-94fd-ea42e522****`
    */ "TaskId": string;
    /**
    * 监控的数据类型。
    * @example `metric`
    */ "Type"?: string;
    /**
    * 开始时间，可以传入距离1970年1月1日0点的毫秒数，也可以传入format时间格式数据，如2015-10-20 00:00:00。
    * @example `1551579637000`
    */ "StartTime"?: string;
    /**
    * 结束时间，可以传入距离1970年1月1日 0点的毫秒数，也可以传入format时间格式数据，如2015-10-20 00:00:00。
    * @example `1551581437000`
    */ "EndTime"?: string;
    /**
    * 统计周期，单位是秒，取60或60的整数倍。默认根据探测频率最小周期返回数据。
    * @example `60`
    */ "Period"?: string;
    /**
    * 分页游标。
    * @example `49f7b317-7645-4cc9-94fd-ea42e5220930ea42e5220930ea42e522****`
    */ "NextToken"?: string;
    /**
    * 返回的数据点数量。
    * @example `1000`
    */ "Length"?: number;
}
export { DescribeSiteMonitorDataRequest };