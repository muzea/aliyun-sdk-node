interface BatchSetDcdnDomainConfigsRequest {
    "RegionId"?: string;
    /**
    * 您的加速域名，多个用逗号（,）分隔。
    * @example `example.com`
    */ "DomainNames": string;
    /**
    * 功能列表。
    * @example `[{"functionArgs":[{"argName":"domain_name","argValue":"api.hellodtworld.com"}],"functionName":"set_req_host_header"}]`
    */ "Functions": string;
    "OwnerId"?: number;
}
export { BatchSetDcdnDomainConfigsRequest };