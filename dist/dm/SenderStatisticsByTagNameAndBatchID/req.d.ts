export interface SenderStatisticsByTagNameAndBatchIDRequest {
    /**
     * 发信地址。不填，代表所有地址。
     * @example `xxx`
     */
    "AccountName"?: string;
    /**
     * 起始时间，格式yyyy-MM-dd。
     * @example `2019-09-29`
     */
    "StartTime": string;
    /**
     * 结束时间，和起始时间跨度不能超出7天，格式yyyy-MM-dd。
     * @example `2019-09-29`
     */
    "EndTime": string;
    /**
     * 邮件标签。不填，代表所有标签。
     * @example `xxx`
     */
    "TagName"?: string;
}
