export interface DescribeRtcUserCntDataRequest {
    /**
     * 查询数据起始时间，UTC格式，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2018-01-29T00:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 查询数据结束时间，UTC格式，格式为yyyy-MM-ddTHH:mm:ssZ。
     * 结束时间需大于起始时间。
     * @example `2018-01-29T01:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 应用ID，仅支持传单个ID。
     * 默认查询所有应用ID。
     *
     * @example `yourAppId`
     */
    "AppId"?: string;
    /**
     * 服务区域。CN：中国（默认值）。
     * @example `CN`
     */
    "ServiceArea"?: string;
    /**
     * 查询数据时间粒度，单位：秒。
     * 取值为**3600**（1小时） 或**86400**（1天），默认为**3600**。
     *
     * @example `3600`
     */
    "Interval"?: string;
}
