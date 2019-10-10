interface BatchSetVodDomainConfigsRequest {
    "RegionId"?: string;
    /**
    * 点播加速域名，多个用英文半角逗号分隔。
    * @example `example.com`
    */ "DomainNames": string;
    /**
    * 功能列表。
    * - Functions格式：`[{"functionArgs":[{"argName":"domain_name","argValue":"www.example.com"}],"functionName":"set_req_host_header"}]`
    * - 某些功能，如filetype_based_ttl_set，可以设置多条纪录，当需要更新其中某条纪录时，可通过该条纪录的configId来指定。 `[{"functionArgs":[{"argName":"file_type","argValue":"jpg"},{"argName":"ttl","argValue":"18"},{"argName":"weight","argValue":"30"}],"functionName":"filetype_based_ttl_set","configId":5068995}]`
    * @example `[{"functionArgs":[{"argName":"domain_name","argValue":"www.example.com"}],"functionName":"set_req_host_header"}]`
    */ "Functions": string;
    "OwnerId"?: number;
}
export { BatchSetVodDomainConfigsRequest };