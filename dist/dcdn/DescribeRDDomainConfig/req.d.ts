export interface DescribeRDDomainConfigRequest {
    /**
     * 加速域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 功能名称，默认查询源站组（source_group）功能。
     * @example `source_group`
     */
    "FunctionName"?: string;
}
