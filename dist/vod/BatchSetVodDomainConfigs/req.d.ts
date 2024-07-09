export interface BatchSetVodDomainConfigsRequest {
    /**
     * 点播加速域名。多个域名之间使用半角逗号（,）分隔。一次最多支持配置50个域名。
     * @example `example.com`
     */
    "DomainNames": string;
    /**
     * 功能列表。
     * - functionName（功能名称，必填）：可配置的功能及功能名称参数请参见[域名配置功能函数](~~2411639~~)。
     * - argName（参数名称，必填）：functionName的配置项（可配置多个配置项）。
     * - argValue（参数值，必填）：functionName的配置项的取值。
     * 点播加速域名支持配置的功能及各功能名称和参数名称等详细信息，请参见[域名配置功能函数](~~2411639~~)。
     * > 某些功能，如filetype_based_ttl_set（配置文件过期时间），可以设置多条配置规则，当需要更新其中某条配置规则时，可通过该条配置规则的configId来指定。配置示例如下：
     * `[{"functionArgs":[{"argName":"file_type","argValue":"jpg"},{"argName":"ttl","argValue":"18"},{"argName":"weight","argValue":"30"}],"functionName":"filetype_based_ttl_set","configId":5068995}]`
     * @example `[{"functionArgs":[{"argName":"domain_name","argValue":"www.example.com"}],"functionName":"set_req_host_header"}]`
     */
    "Functions": string;
}
