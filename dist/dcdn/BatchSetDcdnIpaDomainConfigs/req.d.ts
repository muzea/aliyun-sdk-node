export interface BatchSetDcdnIpaDomainConfigsRequest {
    /**
     * IPA层应用加速域名，多个域名用英文逗号（,）分隔。
     * @example `example.com`
     */
    "DomainNames": string;
    /**
     * 功能列表。```[{"functionArgs":[{"argName":"配置名称","argValue":"配置值"}],"functionName":"功能名称"}]```
     * @example `[{"functionArgs":[{"argName":"domain_name","argValue":"api.*com"}],"functionName":"protogw"}]`
     */
    "Functions": string;
}
