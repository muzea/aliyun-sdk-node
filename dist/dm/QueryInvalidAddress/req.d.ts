export interface QueryInvalidAddressRequest {
    /**
     * 开始时间，时间不能早于30日，格式yyyy-MM-dd。
     * @example `2019-09-29`
     */
    "StartTime"?: string;
    /**
     * 结束时间，和起始时间跨度不能超出30天,格式yyyy-MM-dd。
     * @example `2019-09-29`
     */
    "EndTime"?: string;
    /**
     * 关键词。不填，代表所有无效地址。
     * @example `info`
     */
    "KeyWord"?: string;
    /**
     * 每次请求数目
     * @example `100`
     */
    "Length"?: number;
    /**
     * 请求开始位置
     * @example `***`
     */
    "NextStart"?: string;
}
