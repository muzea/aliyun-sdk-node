export interface DescribeVodDomainRealTimeTrafficDataRequest {
    /**
     * 要查询的加速域名。
     * - 多个域名用半角逗号（,）分隔，一次最多支持100个域名查询。
     * - 查询多个域名时，返回的数据为各域名合并后的数据值。
     * - 您可以登录[视频点播控制台](https://vod.console.aliyun.com)，从左侧导航选择**配置管理 > 分发加速配置 > 域名管理**，查看您已接入到视频点播的加速域名，或者调用[DescribeVodUserDomains](~~DescribeVodUserDomains~~)接口查询加速域名列表。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 获取数据的起始时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为：yyyy-MM-ddTHH:mm:ssZ。
     * @example `2019-12-10T20:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据的结束时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为：yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需大于起始时间。
     * @example `2019-12-10T20:01:00Z`
     */
    "EndTime"?: string;
    /**
     * 运营商英文名。不传该参数默认查询所有运营商。
     * @example `telecom`
     */
    "IspNameEn"?: string;
    /**
     * 地域英文名。不传该参数默认查询所有地域。
     * @example `shanghai`
     */
    "LocationNameEn"?: string;
}
