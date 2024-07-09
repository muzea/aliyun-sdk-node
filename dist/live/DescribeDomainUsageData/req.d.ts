export interface DescribeDomainUsageDataRequest {
    /**
     * 直播域名。
     * - 支持批量域名查询，多个域名用英文逗号（,）分隔。
     * - 若参数为空，默认返回所有直播域名合并后的数据。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2015-12-10T20:00:00Z`
     */
    "StartTime": string;
    /**
     * 结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * 需大于起始时间，且与起始时间相差不能超过**31**天。
     * @example `2015-12-10T21:00:00Z`
     */
    "EndTime": string;
    /**
     * 需要获取的用量类型。
     * 当**Field**取值为**bps**或**traf** 时，该参数取值范围：
     * - **rts**：RTS带宽或流量。
     * - **quic**：QUIC带宽或流量。
     * -  **all**：全部。
     * 当**Field**取值为**req\_traf**或**req\_bps** 时，该参数取值范围：
     * - **push**：推流带宽或流量。
     * - **push_proxy**：转推带宽或流量。
     * @example `all`
     */
    "Type"?: string;
    /**
     * 查询用量的数据类型。取值：
     * - **bps**：播放带宽。
     * - **traf**：流量。
     * - **req\_traf**：当Type为push时，为推流流量，当Type为push_proxy时，为转推流量。
     * - **req\_bps**：当Type为push时，为推流带宽，当Type为push_proxy时，为转推带宽。
     * @example `traf`
     */
    "Field": string;
    /**
     * 区域代号。支持：
     * - **CN**：中国内地。
     * - **OverSeas**：海外大区。
     * - **AP1**：亚太1区。
     * - **AP2**：亚太2区。
     * - **AP3**：亚太3区。
     * - **NA**：北美。
     * - **SA**：南美。
     * - **EU**：欧洲。
     * - **MEAA**：中东非洲。
     * - **all**：全部。
     * > 不传值则默认为中国内地。海外大区说明：-  亚太1区：中国香港地区、中国澳门地区、中国台湾地区、日本以及东南亚除越南和印尼之外的国家。- 亚太2区：印度、印尼、韩国、越南。- 亚太3区：澳大利亚、新西兰。北美：美国、加拿大。- 南美：巴西。- 欧洲：乌克兰、英国、法国、荷兰、西班牙、意大利、瑞典、德国。- 中东非洲：南非、阿曼、阿联酋、科威特。
     * @example `CN`
     */
    "Area"?: string;
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
     * 强制指定获取指定时间粒度的数据，单位为秒。支持**300**（5分钟）、**3600**（1小时）和**86400**（1天）。
     * @example `300`
     */
    "Interval"?: string;
}
