export interface DescribeRangeDataByLocateAndIspServiceRequest {
    /**
     * 加速域名。
     * @example `example.com`
     */
    "DomainNames": string;
    /**
     * 获取数据开始时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2019-11-30T05:33:00Z`
     */
    "StartTime": string;
    /**
     * 获取数据结束时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间大于开始时间，并且结束时间和开始时间相差不超过1小时。
     * @example `2019-11-30T05:40:00Z`
     */
    "EndTime": string;
    /**
     * 运营商名，每次只能传入一个参数。
     * 运营商名通过[DescribeCdnRegionAndIsp](~~91077~~)接口查询。
     * @example `unicom`
     */
    "IspNames"?: string;
    /**
     * 地域名，多个地域名用英文逗号（,）分隔。
     * 地域名通过[DescribeCdnRegionAndIsp](~~91077~~)接口查询。
     * @example `liaoning,guangxi`
     */
    "LocationNames"?: string;
}
