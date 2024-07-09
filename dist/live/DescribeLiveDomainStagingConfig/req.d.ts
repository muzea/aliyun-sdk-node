export interface DescribeLiveDomainStagingConfigRequest {
    /**
     * 加速域名。
     * @example `developer.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 功能列表名称，多个用英文逗号（,）分隔。
     * @example `aliauth`
     */
    "FunctionNames": string;
}
