interface BindZoneVpcRequest {
    "RegionId"?: string;
    /**
    * ZoneId，zone的唯一识别码。
    * @example `AgIDE0OQ_149`
    */ "ZoneId": string;
    /**
    * 语言。
    * @example `en`
    */ "Lang"?: string;
    "Vpcs"?: string[];
    /**
    * 用户Ip。
    * @example `1.1.1.1`
    */ "UserClientIp"?: string;
}
export { BindZoneVpcRequest };