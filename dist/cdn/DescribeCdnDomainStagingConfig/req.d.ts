export interface DescribeCdnDomainStagingConfigRequest {
    /**
     * 加速域名，仅支持单个查询。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 功能名称列表，多个用半角逗号（,）分隔，可配置功能请参见[功能列表](~~388460~~)。
     * @example `aliauth`
     */
    "FunctionNames"?: string;
}
