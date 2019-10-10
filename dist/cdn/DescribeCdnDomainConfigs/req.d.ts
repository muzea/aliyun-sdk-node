interface DescribeCdnDomainConfigsRequest {
    "RegionId"?: string;
    /**
    * 加速域名。
    * @example `example.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 功能列表名称，用逗号（,）分隔。
    * @example `aliauth`
    */ "FunctionNames"?: string;
}
export { DescribeCdnDomainConfigsRequest };