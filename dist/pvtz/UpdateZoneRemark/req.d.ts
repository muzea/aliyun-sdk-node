interface UpdateZoneRemarkRequest {
    "RegionId"?: string;
    /**
    * Zone ID。
    * @example `AgIDE1MA_149`
    */ "ZoneId": string;
    /**
    * 语言。
    * @example `en`
    */ "Lang"?: string;
    /**
    * 备注。
    * @example `test`
    */ "Remark"?: string;
    /**
    * 用户Ip。
    * @example `1.1.1.1`
    */ "UserClientIp"?: string;
}
export { UpdateZoneRemarkRequest };