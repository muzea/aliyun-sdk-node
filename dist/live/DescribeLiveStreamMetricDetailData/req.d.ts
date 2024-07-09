export interface DescribeLiveStreamMetricDetailDataRequest {
    /**
     * - 需要查询的加速域名。仅支持单个域名查询，传多个域名将报错。
     * - 不指定AppName和StreamName时，按域名返回所有流粒度的数据。
     * - 域名为空时，查询用户下的所有加速域名的聚合数据
     * - DomainName不为空且AppName为all和StreamName为all时，返回指定加速域名下的聚合数据。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 获取数据起始时间点，日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2015-12-10T20:00:00Z`
     */
    "StartTime": string;
    /**
     * 结束时间需大于起始时间，不能相差超过1天；日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2015-12-10T21:00:00Z`
     */
    "EndTime": string;
    /**
     * 应用名称，查询指定应用流粒度的数据。
     * >指定StreamName时，必须指定AppName。
     * @example `liveApp****`
     */
    "AppName"?: string;
    /**
     * 流名称，按照设置的AppName指定StreamName，返回流粒度的数据。
     * >指定StreamName时，必须指定AppName。
     * @example `liveStream****`
     */
    "StreamName"?: string;
    /**
     * 流协议名，目前支持：**flv**、**hls**、**rtmp**、**rts**和**p2p**。
     * 支持查询多个协议的数据，不同协议之间用英文逗号（,）分隔。但多个协议的数据不会聚合，按照流的粒度输出。
     * @example `flv`
     */
    "Protocol"?: string;
    /**
     * 分页查询token，每次查询最多返回5000行数据，当要查询的数据超过5000行时，响应数据会提供下次查询数据的起始索引。请求时传入该token，将从上一次查询结束的下一行继续查询未获取的数据。
     * @example `UjsM9x3aVcJi9a0-ArwJUTTC67CIBKLw*****`
     */
    "NextPageToken"?: string;
}
