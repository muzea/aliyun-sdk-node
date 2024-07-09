export interface DescribeLiveStreamPushMetricDetailDataRequest {
    /**
     * - 需要查询的加速域名。仅支持单个域名查询，传多个域名将报错。
     * - 不指定AppName和StreamName时，按指定加速域名返回此域名下所有流粒度的数据，所有查询数据不聚合。
     * - DomainName不为空且AppName为all和StreamName为all时，返回指定加速域名下所有流粒度的聚合数据。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 获取数据起始时间点，日期格式按照ISO8601表示法，并使用UTC时间。
     * 格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2022-09-10T20:00:00Z`
     */
    "StartTime": string;
    /**
     * 获取数据结束时间点，日期格式按照ISO8601表示法，并使用UTC时间，结束时间需大于起始时间，且不能相差超过1天。
     * 格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2022-09-10T21:00:00Z`
     */
    "EndTime": string;
    /**
     * 直播流所属应用名称。指定应用名称，查询对应应用流粒度的数据。
     * @example `liveApp****`
     */
    "AppName"?: string;
    /**
     * 直播流名称。指定StreamName时，按指定AppName的指定StreamName，返回流粒度的数据（指定StreamName时，必须指定AppName）。
     * @example `liveStream****`
     */
    "StreamName"?: string;
    /**
     * 分页查询token，每次查询最多返回5000行数据，当要查询的数据超过5000行时，响应数据会提供下次查询数据的起始索引。
     * 请求时传入该token，将从上一次查询结束的下一行继续查询未获取的数据。
     * @example `UjsM9x3aVcJi9a0-ArwJUTTC67C***37C0=`
     */
    "NextPageToken"?: string;
}
