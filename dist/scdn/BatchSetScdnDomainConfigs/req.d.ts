export interface BatchSetScdnDomainConfigsRequest {
    /**
     * 加速域名，多个使用半角逗号（,）分隔。
     * @example `example.com,aliyundoc.com`
     */
    "DomainNames": string;
    /**
     * 功能列表。
     * @example `[{"functionArgs":[{"argName":"domain_name","argValue":"example.com"}],"functionName":"set_req_host_header"}]`
     */
    "Functions": string;
}
