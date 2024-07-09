export interface DescribeDomainInfoRequest {
    /**
     * 用户语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 域名名称。
     * @example `dns-example.com`
     */
    "DomainName": string;
    /**
     * 默认值为**false**，表示不需要细节属性。
     * 当值为**true**时，则返回以下数据：lineType、minTtl、recordLineTreeJson、recordLines、lineCode、lineDisplayName、lineName、regionLines、slaveDns。
     * @example `true`
     */
    "NeedDetailAttributes"?: boolean;
}
