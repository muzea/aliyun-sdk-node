export interface BatchSetVsDomainConfigsRequest {
    /**
     * 您的加速域名。
     * > 支持多个，用英文逗号（,）分隔。
     * @example `example.aliyundoc.com`
     */
    "DomainNames": string;
    /**
     * 功能列表。
     * @example `[{“functionArgs”:[{“argName”:”domain_name”,”argValue”:”api.hellodtworld.com”}],”functionName”:”set_req_host_header”}]`
     */
    "Functions": string;
}
