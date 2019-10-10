interface DescribeDcdnDomainConfigsRequest {
    "RegionId"?: string;
    /**
    * 您的加速域名。
    * @example `example.com`
    */ "DomainName": string;
    /**
    * 功能列表名称，用逗号（,）分隔。
    * @example `filetype_based_ttl_set,set_req_host_header`
    */ "FunctionNames": string;
    "OwnerId"?: number;
}
export { DescribeDcdnDomainConfigsRequest };