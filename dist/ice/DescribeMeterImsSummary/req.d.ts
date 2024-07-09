export interface DescribeMeterImsSummaryRequest {
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
     * 目前该字段暂未生效，默认返回全部region用量。
     * @example `cn-shanghai`
     */
    "Region"?: string;
}
