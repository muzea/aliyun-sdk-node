export interface DescribeLiveGrtnTrafficUsageRequest {
    /**
     * 获取数据起始时间点，日期格式按照ISO8601表示法，并使用UTC时间，格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2023-09-12T06:10:00Z`
     */
    "StartTime": string;
    /**
     * 结束时间需大于起始时间，日期格式按照ISO8601表示法，并使用UTC时间，格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2023-09-15T16:00:00Z`
     */
    "EndTime": string;
    /**
     * 应用ID，支持查询多个应用ID，多个ID用半角逗号（,）分隔，最多可查询30个ID。默认返回所有应用合并后的数据。
     * @example `7fd341b3-c6fa-43e1-96b8-7295a1dd****`
     */
    "AppId": string;
    /**
     * 用量区域代号。支持：
     * - CN：中国内地。
     * - OverSeas：海外大区。
     * - AP1：亚太1区，包含中国香港地区、中国澳门地区、中国台湾地区、日本以及东南亚除越南和印尼之外的国家。
     * - AP2：亚太2区，包含印度、印尼、韩国、越南。
     * - AP3：亚太3区，包含澳大利亚、新西兰。
     * - NA：北美，包含美国、加拿大。
     * - SA：南美，特指巴西。
     * - EU：欧洲，包含乌克兰、英国、法国、荷兰、西班牙、意大利、瑞典、德国。
     * - MEAA：中东非洲，包含南非、阿曼、阿联酋、科威特。
     * 不传值时默认为所有区域数据聚合输出。
     * @example `CN`
     */
    "Area"?: string;
    /**
     * 查询用量的类型。取值：
     * - bps：播放带宽，用量单位：bps。
     * - traf：流量，用量单位：Byte。
     * @example `traf`
     */
    "Field": string;
    /**
     * 查询数据的时间粒度。单位：秒。取值：
     * - 300
     * - 3600
     * - 86400
     * 不传或传值不支持时，使用默认值300秒。
     * @example `300`
     */
    "Interval"?: string;
}
