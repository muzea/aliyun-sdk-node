export interface DescribeVsDomainConfigsRequest {
    /**
     * 您的加速域名。
     * @example `example.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 功能列表名称。
     * > 支持多个，用英文逗号（,）分隔。
     * @example `path_based_ttl_set,oss_auth`
     */
    "FunctionNames": string;
}
