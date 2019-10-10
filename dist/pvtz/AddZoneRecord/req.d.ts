interface AddZoneRecordRequest {
    "RegionId"?: string;
    /**
    * Zone ID。
    * @example `CAgICA1OA_58`
    */ "ZoneId": string;
    /**
    * 主机记录。
    * 如果要解析@.exmaple.com，主机记录要填写"@”，而不是空。
    * @example `www`
    */ "Rr": string;
    /**
    * 解析记录类型，目前仅支持**A**, **CNAME**, **TXT**, **MX**, **PTR**。
    * @example `A`
    */ "Type": string;
    /**
    * 记录值。
    * @example `1.1.1.1`
    */ "Value": string;
    /**
    * 语言。
    * @example `en`
    */ "Lang"?: string;
    /**
    * 生存时间，默认值为**60**。
    * @example `60`
    */ "Ttl"?: number;
    /**
    * MX记录的优先级，取值范围：**\[1,10\]**。
    * @example `5`
    */ "Priority"?: number;
    /**
    * 用户Ip。
    * @example `2.2.2.2`
    */ "UserClientIp"?: string;
}
export { AddZoneRecordRequest };