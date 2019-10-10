interface DescribeEipMonitorDataRequest {
    /**
    * EIP所属地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    *  获取数据的起始时间。 使用UTC时间。按照ISO8601标准，格式为YYYY-MM-DDThh:mm:ssZ。 例如，北京时间2013年1月10日20点0分0秒，表示为2013-01-10T12:00:00Z。
    * 如果秒不是00，则自动取下一分钟为起始时间点。
    * @example `2017-01-05T02:05:05Z`
    */ "StartTime": string;
    /**
    *  获取数据的结束时间。 使用UTC时间。按照ISO8601标准，格式为YYYY-MM-DDThh:mm:ssZ。 例如，北京时间2013年1月10日20点0分0秒，表示为2013-01-10T12:00:00Z。
    * 如果秒不是00，则自动取下一分钟为起始时间点。
    * @example `2017-01-05T01:05:10Z`
    */ "EndTime": string;
    "OwnerId"?: number;
    /**
    * EIP的实例ID。
    * @example `eip-2zeerraiwb7uj6ixxxxxxxx`
    */ "AllocationId": string;
    /**
    * 每条监控数据的时间长度，单位为秒，默认值为60，取值：  [60, 600, 3600]
    * - （EndTime–StartTime）/ Peroid必须大于200，即最多返回200条监控数据。
    * - 如果EndTime–StartTime小于200则只返回起始时间点的监控数据。
    * @example `60`
    */ "Period"?: number;
}
export { DescribeEipMonitorDataRequest };