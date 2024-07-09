export interface DescribeScdnDomainRealTimeQpsDataRequest {
    /**
     * 域名。多个之间用英文逗号（,）分隔。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 运营商英文名，不传为所有运营商。
     * @example `telecom`
     */
    "IspNameEn"?: string;
    /**
     * 区域英文名，不传为所有区域。
     * @example `telecom`
     */
    "LocationNameEn"?: string;
    /**
     * 起始时间，日期格式按照ISO8601表示法，并使用UTC时间。
     * @example `2018-01-02T11:26:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间，日期格式按照ISO8601表示法，并使用UTC时间。
     * @example `2018-01-02T11:27:00Z`
     */
    "EndTime"?: string;
}
