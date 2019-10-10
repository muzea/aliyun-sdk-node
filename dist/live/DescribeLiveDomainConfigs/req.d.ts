interface DescribeLiveDomainConfigsRequest {
    "RegionId"?: string;
    /**
    * 您的加速域名。
    * @example `live.yourdomain.com`
    */ "DomainName": string;
    /**
    * 功能列表名称，用逗号分隔。
    * @example `set_req_host_header`
    */ "FunctionNames": string;
    "OwnerId"?: number;
}
export { DescribeLiveDomainConfigsRequest };