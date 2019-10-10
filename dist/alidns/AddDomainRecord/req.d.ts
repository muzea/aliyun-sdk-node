interface AddDomainRecordRequest {
    "RegionId"?: string;
    /**
    * 域名名称。
    * @example `example.com`
    */ "DomainName": string;
    /**
    * 主机记录。
    * 如果要解析@.exmaple.com，主机记录要填写”@”，而不是空。
    * @example `www`
    */ "RR": string;
    /**
    * 解析记录类型，参见[解析记录类型格式](https://help.aliyun.com/document_detail/29805.html?spm=a2c4g.11186623.2.20.2cee2846MZb2I3)。
    * @example `A`
    */ "Type": string;
    /**
    * 记录值。
    * @example `202.106.0.20`
    */ "Value": string;
    /**
    * 语言。
    * @example `en`
    */ "Lang"?: string;
    /**
    * 用户端IP。
    * @example `1.1.1.1`
    */ "UserClientIp"?: string;
    /**
    * 解析生效时间，默认为600秒（10分钟）。
    * 参见[TTL定义说明](https://help.aliyun.com/document_detail/29806.html?spm=a2c4g.11186623.2.21.2cee2846MZb2I3)。
    * @example `600`
    */ "TTL"?: number;
    /**
    * MX记录的优先级，取值范围：`[1,10]`。
    * 记录类型为MX记录时，此参数必需。
    * @example `1`
    */ "Priority"?: number;
    /**
    * 解析线路，默认为**default**。
    * 参见[解析线路枚举](https://help.aliyun.com/document_detail/29807.html?spm=a2c4g.11186623.2.22.2cee2846MZb2I3)。
    * @example `default`
    */ "Line"?: string;
}
export { AddDomainRecordRequest };