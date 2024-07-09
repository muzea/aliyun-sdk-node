export interface DescribeDcdnDomainStagingConfigRequest {
    /**
     * 加速域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 功能列表名称，多个用逗号（,）分隔。
     * @example `aliauth`
     */
    "FunctionNames": string;
}
