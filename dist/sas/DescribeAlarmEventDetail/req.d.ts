interface DescribeAlarmEventDetailRequest {
    "RegionId"?: string;
    /**
    * 告警事件的唯一标识。
    * @example `8df914418f4211fbf756efe7a6f40cbc`
    */ "AlarmUniqueInfo": string;
    /**
    * 请求来源标识，固定为sas。
    * @example `sas`
    */ "From": string;
    /**
    * 请求源IP。
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * 告警事件显示的语言类型。
    * - zh：中文
    * - cn：英文
    * @example `zh`
    */ "Lang"?: string;
}
export { DescribeAlarmEventDetailRequest };