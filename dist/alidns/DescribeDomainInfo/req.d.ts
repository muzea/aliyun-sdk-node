interface DescribeDomainInfoRequest {
    "RegionId"?: string;
    /**
    * 域名名称。
    * @example `example.com`
    */ "DomainName": string;
    /**
    * 用户语言。
    * @example `en`
    */ "Lang"?: string;
    "UserClientIp"?: string;
    /**
    * 默认值为**false**，表示不需要细节属性。
    * @example `false`
    */ "NeedDetailAttributes"?: boolean;
}
export { DescribeDomainInfoRequest };