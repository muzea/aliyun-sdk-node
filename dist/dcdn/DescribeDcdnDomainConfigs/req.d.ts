export interface DescribeDcdnDomainConfigsRequest {
    /**
     * 加速域名，仅支持查询单个域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 功能列表名称，多个用英文逗号（,）分隔。
     * @example `filetype_based_ttl_set,set_req_host_header`
     */
    "FunctionNames"?: string;
    /**
     * 配置ID。
     * @example `5003576`
     */
    "ConfigId"?: string;
}
