interface UpdateZoneRecordRequest {
    "RegionId"?: string;
    /**
    * 主机记录。
    * 如果要解析@.exmaple.com，主机记录要填写"@”，而不是空。
    * @example `www`
    */ "Rr": string;
    /**
    * 解析记录ID。
    * @example `5809`
    */ "RecordId": number;
    /**
    * 解析记录类型。
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
    * 生存时间。
    * @example `60`
    */ "Ttl"?: number;
    /**
    * MX记录的优先级，取值范围：**\[1,10\]**。
    * 记录类型为MX记录时，此参数必选。
    * @example `60`
    */ "Priority"?: number;
    /**
    * 用户Ip。
    * @example `2.2.2.2`
    */ "UserClientIp"?: string;
}
export { UpdateZoneRecordRequest };