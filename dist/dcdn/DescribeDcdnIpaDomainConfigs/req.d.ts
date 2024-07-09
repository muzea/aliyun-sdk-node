export interface DescribeDcdnIpaDomainConfigsRequest {
    /**
     * 您的加速域名，多个域名用英文逗号（,）分隔。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 功能列表名称。仅支持protogw，表示IP应用加速。
     * @example `protogw`
     */
    "FunctionNames": string;
}
