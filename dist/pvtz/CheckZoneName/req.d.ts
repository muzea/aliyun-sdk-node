interface CheckZoneNameRequest {
    "RegionId"?: string;
    /**
    * 语言。
    * @example `en`
    */ "Lang"?: string;
    /**
    * zone的名称。
    * @example `demo.com`
    */ "ZoneName"?: string;
    /**
    * 用户Ip。
    * @example `1.1.1.1`
    */ "UserClientIp"?: string;
}
export { CheckZoneNameRequest };