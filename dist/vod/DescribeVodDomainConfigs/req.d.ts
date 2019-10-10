interface DescribeVodDomainConfigsRequest {
    "RegionId"?: string;
    /**
    * 点播加速域名。
    * @example `www.example.com`
    */ "DomainName": string;
    /**
    * 功能列表名称，多个用英文逗号分隔。
    * @example `filetype_based_ttl_set,set_req_host_header`
    */ "FunctionNames": string;
    "OwnerId"?: number;
}
export { DescribeVodDomainConfigsRequest };