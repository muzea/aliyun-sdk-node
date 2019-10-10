interface DescribeZoneInfoRequest {
    "RegionId"?: string;
    /**
    * 语言。
    * @example `en`
    */ "Lang"?: string;
    /**
    * Zone ID。
    * @example `AgIDE1MA_149`
    */ "ZoneId"?: string;
    /**
    * 用户Ip。
    * @example `1.1.1.1`
    */ "UserClientIp"?: string;
}
export { DescribeZoneInfoRequest };