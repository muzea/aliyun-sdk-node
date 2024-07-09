export interface DescribeDomainBpsDataByTimeStampRequest {
    /**
     * 要查询的域名，仅支持查询单个。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 查询目标时间点。日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 查询数据粒度为5分钟。
     * @example `2019-11-30T05:40:00Z`
     */
    "TimePoint": string;
    /**
     * 运营商英文名，多个用半角逗号（,）分隔。
     * 通过[DescribeCdnRegionAndIsp](~~91077~~)接口查询。
     * @example `unicom,telecom`
     */
    "IspNames": string;
    /**
     * 地域英文名，多个用半角逗号（,）隔开。
     * 通过[DescribeCdnRegionAndIsp](~~91077~~)接口查询。
     * @example `liaoning,guangxi`
     */
    "LocationNames": string;
}
