export interface DescribeLiveProducerUsageDataRequest {
    /**
     * 域名所属地域。
     * @example `cn-shanghai`
     */
    "Region"?: string;
    /**
     * 云导播播流域名。多个域名使用英文逗号（,）分隔。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 查询实例。支持批量实例查询，多个实例用英文逗号（,）分隔。
     * > 若参数为空，默认返回所有实例合并后数据。
     * @example `a17d0184-462d-4630-b2a6-8c26dde2****`
     */
    "Instance"?: string;
    /**
     * 导播类型。支持批量查询，多个类型用英文逗号（,）分隔。取值：
     * - **slidelive**：播单型。
     * - **universal**：通用型。
     * > 若参数为空，默认返回所有导播类型合并后数据。
     * @example `slidelive`
     */
    "Type"?: string;
    /**
     * 分组键。可以指定domain、region、 instance,、type其中之一或多个, 多个使用英文逗号（,）分隔.。指定了split 的字段将会被分组输出。
     * >若参数为空, 则只输出按照聚合后数据.
     * @example `type`
     */
    "SplitBy"?: string;
    /**
     * 开始时间。日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2018-09-30T16:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间。日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * >结束时间需大于起始时间。
     * @example `2018-10-31T15:59:59Z`
     */
    "EndTime"?: string;
    /**
     * 指定查询数据的时间粒度，支持3600（1小时）和86400（1天）的取值。单位：秒。
     * @example `3600`
     */
    "Interval"?: string;
    /**
     * 播流所属应用名称。
     * @example `liveApp****`
     */
    "app"?: string;
}
