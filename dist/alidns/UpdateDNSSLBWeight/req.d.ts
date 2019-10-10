interface UpdateDNSSLBWeightRequest {
    "RegionId"?: string;
    /**
    * 解析记录ID。
    * @example `9999985`
    */ "RecordId": string;
    /**
    * 要修改的权重值`[1-100]`。
    * @example `2`
    */ "Weight": number;
    /**
    * 语言。
    * @example `en`
    */ "Lang"?: string;
    /**
    * 用户IP。
    * @example `1.1.1.1`
    */ "UserClientIp"?: string;
}
export { UpdateDNSSLBWeightRequest };