export interface DescribeLivePushProxyUsageDataRequest {
    /**
     * 查询不同直播中心, 支持批量地区查询，多个地区用逗号（半角）分隔。取值：
     * - cn-beijing：北京
     * - cn-shanghai：上海
     * - cn-shenzhen：深圳
     * - cn-qingdao：青岛
     * - ap-southeast-1：新加坡
     * - eu-central-1：德国
     * - ap-northeast-1：东京
     * - ap-south-1：孟买
     * - ap-southeast-5：雅加达
     * 若参数为空，默认返回所有Region合并后数据。
     * @example `cn-beijing`
     */
    "Region"?: string;
    /**
     * 域名过滤，多个域名使用逗号（半角）分隔，若参数为空，默认返回所有域名合并后数据。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 获取数据起始时间点，日期格式按照ISO8601表示法，并使用UTC时间，格式为：YYYY-MM-DDThh:mm:ssZ，默认返回近七天的数据。
     * @example `2022-10-10T20:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间需大于起始时间，日期格式按照ISO8601表示法，并使用UTC时间，格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2022-10-10T21:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 分组键，若参数为空，默认为region，按照聚合后数据输出。多个使用逗号（半角）分隔，取值：
     * - domain：域名。如果此参数SplitBy（分组键）取值为domain时，返回参数Domain才生效。
     * - region（默认值）：直播中心地域。如果此参数SplitBy（分组键）取值为region时，返回参数Region才生效。
     * @example `region`
     */
    "SplitBy"?: string;
}
