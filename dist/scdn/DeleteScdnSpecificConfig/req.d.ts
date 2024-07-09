export interface DeleteScdnSpecificConfigRequest {
    /**
     * 您的加速域名，多个用逗号（,）隔开。
     * @example `example.com,aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 配置ID。
     * @example `2317`
     */
    "ConfigId": string;
}
