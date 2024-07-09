export interface DescribeVodDomainBpsDataByLayerRequest {
    /**
     * 要查询的加速域名。
     * - 不传入该参数，则默认返回所有加速域名的合并数据。
     * - 支持批量查询，多个域名之间用半角逗号（,）分隔，一次最多支持500个域名查询。
     * - 您可以登录[视频点播控制台](https://vod.console.aliyun.com)，从左侧导航选择**配置管理 > 分发加速配置 > 域名管理**，查看您已接入到视频点播的加速域名，或者调用[DescribeVodUserDomains](~~DescribeVodUserDomains~~)接口查询加速域名列表。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 获取数据的起始时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2019-01-23T12:35:12Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据的结束时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需大于起始时间。
     * @example `2019-01-23T12:40:12Z`
     */
    "EndTime"?: string;
    /**
     * 设置查询数据的时间粒度。单位：秒。取值：**300**、**3600**和**86400**。不传和传的值不支持时，使用默认值。根据您指定的`StartTime`和`EndTime`的时间跨度，支持设置的时间粒度如下：
     * - 3天以内（不包含3天整）支持：**300**（默认）、**3600**、**86400**。
     * - 3-31天（不包含31天整）支持：**3600**（默认）和**86400**。
     * - 31天以上支持：**86400**（默认）。
     * @example `300`
     */
    "Interval"?: string;
    /**
     * 运营商英文名。不传入该参数，默认查询所有运营商。
     * @example `unicom`
     */
    "IspNameEn"?: string;
    /**
     * 地域英文名。不传入该参数，默认查询所有地域。
     * @example `beijing`
     */
    "LocationNameEn"?: string;
    /**
     * 协议类型。可按网络层或应用层的维度指定查询的协议类型。
     * 默认取值：
     * - all：包含网络层和应用层
     * 网络层取值：
     * - IPv4
     * - IPv6
     * 应用层取值：
     * - http
     * - https
     * - quic
     * @example `IPv4`
     */
    "Layer"?: string;
}
