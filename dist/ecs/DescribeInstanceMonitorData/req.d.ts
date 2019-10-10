interface DescribeInstanceMonitorDataRequest {
    "RegionId"?: string;
    /**
    * 待查询的实例 ID。
    * @example `i-instnace1`
    */ "InstanceId": string;
    /**
    * 获取数据的起始时间点。按照 [ISO8601](~~25696~~) 表示，并需要使用 UTC 时间，格式为：YYYY-MM-DDThh:mm:ssZ。如果指定的秒（ss）不是 00，则自动换算为下一分钟。
    * @example `2014-10-29T23:00:00Z`
    */ "StartTime": string;
    /**
    * 获取数据的结束时间点。按照 [ISO8601](~~25696~~) 标准表示，并需要使用 UTC 时间，格式为：YYYY-MM-DDThh:mm:ssZ。 如果指定的秒（ss）不是 00，则自动换算为下一分钟。
    * @example `2014-10-30T08:00:00Z`
    */ "EndTime": string;
    "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 获取监控数据的间隔时间，单位为秒。取值范围：
    * - 60
    * - 600
    * - 3600
    * 默认值：60
    * @example `60`
    */ "Period"?: number;
}
export { DescribeInstanceMonitorDataRequest };