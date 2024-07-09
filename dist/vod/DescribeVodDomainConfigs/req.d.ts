export interface DescribeVodDomainConfigsRequest {
    /**
     * 点播加速域名，仅支持查询单个域名。
     * @example `www.example.com`
     */
    "DomainName": string;
    /**
     * 功能名称。一次可查询多个功能配置信息，多个功能名称之间使用半角逗号（,）分隔。点播加速域名支持配置的功能及各功能名称，请参见[域名配置功能函数](~~2411639~~)。
     * @example `filetype_based_ttl_set,set_req_host_header`
     */
    "FunctionNames": string;
}
