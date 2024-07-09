export interface DescribeDomainUsageDataRequest {
    /**
     * 需要查询的加速域名。支持批量查询，多个域名用英文逗号（,）分隔，一次最多可以查询100个域名。
     * > 如果参数为空，默认返回账号下所有加速域名合并后的数据。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 获取数据的起始时间点。
     * 日期格式按照ISO 8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 查询数据时间粒度为5分钟。
     * @example `2015-12-10T20:00:00Z`
     */
    "StartTime": string;
    /**
     * 获取数据的结束时间点。
     * 日期格式按照ISO 8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需晚于起始时间，且时间相差不能超过31天。
     * @example `2015-12-10T22:00:00Z`
     */
    "EndTime": string;
    /**
     * 请求的数据类型。取值：
     * - **bps**：带宽。
     * - **traf**：流量。
     * - **acc**：请求数。
     * > **acc**不支持根据**Area**参数查询。
     * @example `bps`
     */
    "Field": string;
    /**
     * 需要获取的用量类型。取值：
     * - **static**：静态。
     * - **dynamic**：动态。
     * - **all**（默认）：全部。
     * @example `static`
     */
    "Type"?: string;
    /**
     * 需要获取的数据的协议。取值：
     * - **http**：HTTP协议。
     * - **https**：HTTPS协议。
     * - **quic**：QUIC协议。
     * - **all**（默认）：以上全部协议。
     * @example `all`
     */
    "DataProtocol"?: string;
    /**
     * 区域代号。取值：
     * - **CN**（默认）：中国内地。
     * - **OverSeas**：全球（不包含中国内地）。
     * - **AP1**：亚太1区。
     * - **AP2**：亚太2区。
     * - **AP3**：亚太3区。
     * - **NA**：北美。
     * - **SA**：南美。
     * - **EU**：欧洲。
     * - **MEAA**：中东、非洲。
     * - **all**：以上全部区域。
     * @example `CN`
     */
    "Area"?: string;
    /**
     * 强制指定获取指定时间粒度的数据，单位为秒。支持**300**（5分钟）、**3600**（1小时）和**86400**（1天）。
     * - **Interval**=**300**：最长可查询最近半年的数据，单次查询的时间跨度最长为3天。
     * - **Interval**=**3600**或**86400**：最长可查询最近1年的数据。
     * - 不指定**Interval**：单次查询跨度最长为1个月。当查询时间为1~3天时，数据按小时粒度返回；当查询时间为4天及以上时，数据按天粒度返回。
     * @example `300`
     */
    "Interval"?: string;
}
