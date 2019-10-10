interface DescribeSuspEventDetailRequest {
    "RegionId"?: string;
    /**
    * 请求来源，固定为aqs。
    * @example `aqs`
    */ "From": string;
    /**
    * 接口访问者源IP。
    * @example `2.2.2.2`
    */ "SourceIp"?: string;
    /**
    * 异常事件的语言类型：
    * - zh：中文
    * - cn：英文
    * @example `zh`
    */ "Lang"?: string;
    /**
    * 要查询的异常告警ID。
    * @example `199988`
    */ "SuspiciousEventId"?: number;
}
export { DescribeSuspEventDetailRequest };