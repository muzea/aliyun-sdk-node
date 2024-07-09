export interface DescribeLiveDomainBpsDataByLayerRequest {
    /**
     * 播流域名。
     * >- 若参数为空，默认返回所有域名合并后数据。- 支持批量域名查询，多个域名用英文逗号（,）分隔。
     * @example `pull.aliyundoc.com`
     */
    "DomainName"?: string;
    /**
     * 获取数据起始时间，格式为：<i>yyyy-MM-ddTHH:mm:ssZ</i>（UTC时间）。
     * >不填默认读取过去24小时数据，最小数据粒度为5分钟。
     * @example `2022-03-15T16:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间需大于起始时间，格式为：<i>yyyy-MM-ddTHH:mm:ssZ</i>（UTC时间）。
     * @example `2022-03-16T16:59:59Z`
     */
    "EndTime"?: string;
    /**
     * 查询数据的时间粒度，单位：秒（s）。取值：
     * - **300**
     * - **3600**
     * - **86400**
     * >- 数据间隔≤3天，支持数据时间粒度300、3600、86400。- 3天＜数据间隔≤31天，支持数据时间粒度3600和86400。- 数据间隔＞31天，支持数据时间粒度86400。- 不传和传的值不支持时，使用默认值300。
     * @example `300`
     */
    "Interval"?: string;
    /**
     * 运营商英文名，不传为所有运营商。
     * >您可调用[DescribeLiveRegionAndIsp](~~91077~~)接口获取区域英文名和运营商英文名。
     * @example `tele***`
     */
    "IspNameEn"?: string;
    /**
     * 区域英文名，不传为所有区域 。
     * >您可调用[DescribeLiveRegionAndIsp](~~91077~~)接口获取区域英文名和运营商英文名。
     * @example `hangzhou`
     */
    "LocationNameEn"?: string;
    /**
     * 查询维度。可选：
     * - 网络层（IPv4、IPv6）
     * - 应用层（http、https、quic）
     * - all（默认为all）
     * @example `all`
     */
    "Layer"?: string;
}
