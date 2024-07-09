export interface DescribeLiveDrmUsageDataRequest {
    /**
     * 域名过滤，多个域名使用逗号（半角）分隔，若参数为空，默认返回所有域名合并后数据。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 获取数据起始时间点，日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。最小数据粒度为5分钟
     * @example `2021-05-01T16:00:00Z`
     */
    "StartTime": string;
    /**
     * 结束时间需大于起始时间，获日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
     * @example `2021-05-02T16:00:00Z`
     */
    "EndTime": string;
    /**
     * 查询数据的时间粒度。单位：秒。取值：
     * - 300
     * - 3600
     * - 86400
     * 不传或传值不支持时，使用默认值3600秒。
     * @example `3600`
     */
    "Interval"?: string;
    /**
     * 分组键。默认为domain,region,drm_type。可选值为domain、region、drm_type 中的一个或多个，多个使用逗号（半角）分隔。置为空或null即不区分上述键。
     * @example `domain,region,drm_type`
     */
    "SplitBy"?: string;
}
