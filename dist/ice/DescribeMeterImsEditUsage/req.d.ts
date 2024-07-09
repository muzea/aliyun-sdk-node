export interface DescribeMeterImsEditUsageRequest {
    /**
     * 开始时间戳，10位。
     * @example `1654403036`
     */
    "StartTs": number;
    /**
     * 结束时间戳，10位。
     * @example `1656995036`
     */
    "EndTs": number;
    /**
     * 查询时间粒度，枚举值：3600（小时粒度），86400（天粒度）。
     * @example `86400`
     */
    "Interval": number;
    /**
     * 目前该字段暂未生效，默认返回全部region用量。
     * @example `cn-shanghai`
     */
    "Region"?: string;
}
