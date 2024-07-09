export interface DescribeDcdnDomainUsageDataRequest {
    /**
     * 需要查询的加速域名。支持批量查询，一次最多可以查询100个域名，多个域名用英文逗号（,）分隔。
     * > 如果不传该参数，默认返回所有加速域名合并后的数据。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 获取数据的起始时间点，日期格式按照ISO8601表示法，并使用UTC时间。格式为：yyyy-MM-ddTHH:mm:ssZ。
     * > 查询数据的最小粒度为5分钟。
     * @example `2015-12-10T20:00:00Z`
     */
    "StartTime": string;
    /**
     * 获取数据的结束时间点，日期格式按照ISO8601表示法，并使用UTC时间。格式为：yyyy-MM-ddTHH:mm:ssZ
     * > 结束时间需大于起始时间，且时间相差不能超过31天。
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
     * 请求数类型，取值：
     * - **static**：静态。
     * - **dynamic**：动态。
     * - **all**：全部。
     * 默认为**all**。
     * @example `dynamic`
     */
    "Type"?: string;
    /**
     * 需要获取的数据的协议。取值：
     * - **quic**：QUIC协议。
     * - **https**：HTTPS协议。
     * - **http**：HTTP协议。
     * - **all**：以上全部协议。
     * 默认为**all**。
     * @example `all`
     */
    "DataProtocol"?: string;
    /**
     * 区域代号。取值：
     * - **CN**：中国内地。
     * - **OverSeas**：全球（不包含中国内地）。
     * - **AP1**：亚太1区。
     * - **AP2**：亚太2区。
     * - **AP3**：亚太3区。
     * - **NA**：北美。
     * - **SA**：南美。
     * - **EU**：欧洲。
     * - **MEAA**：中东、非洲。
     * - **all**：以上全部区域。
     * 默认为**CN**。
     * @example `CN`
     */
    "Area"?: string;
    /**
     * 强制指定获取指定时间粒度的数据，单位为秒。
     * 根据单次查询的最大时间跨度不同，该参数支持300（5分钟）、3600（1小时）和86400（1天）取值，具体请参见**使用说明**中支持查询的时间粒度。
     * @example `300`
     */
    "Interval"?: string;
}
