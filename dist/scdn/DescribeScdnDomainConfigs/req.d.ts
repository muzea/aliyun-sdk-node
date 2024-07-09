export interface DescribeScdnDomainConfigsRequest {
    /**
     * 加速域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 功能列表名称，多个使用半角逗号（,）分隔。
     * @example `filetype_based_ttl_set,set_req_host_header`
     */
    "FunctionNames": string;
    /**
     * 配置ID。
     * @example `123`
     */
    "ConfigId"?: string;
}
