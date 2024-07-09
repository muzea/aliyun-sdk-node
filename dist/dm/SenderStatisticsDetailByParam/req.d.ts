export interface SenderStatisticsDetailByParamRequest {
    /**
     * 发信地址。不填，代表所有地址。
     * > **AccountName**、**TagName**、**ToAddress**可以都不填写。若填写，只能传递其中一个参数，不能同时传递两个或以上组合的参数。
     * @example `s***@example.net`
     */
    "AccountName"?: string;
    /**
     * 收信地址。不填，代表所有收信地址。
     * @example `b***@example.net`
     */
    "ToAddress"?: string;
    /**
     * 投递结果。不填，代表所有状态。取值：
     * - 0：成功
     * - 2：无效地址
     * - 3：垃圾邮件
     * - 4：失败
     * @example `0`
     */
    "Status"?: number;
    /**
     * 起始时间，和结束时间跨度不能超出30天，格式yyyy-MM-dd HH:mm
     * @example `2021-04-28 00:00`
     */
    "StartTime"?: string;
    /**
     * 结束时间，和起始时间跨度不能超出30天, 格式yyyy-MM-dd HH:mm。
     * @example `2021-04-29 00:00`
     */
    "EndTime"?: string;
    /**
     * 邮件标签。不填，代表所有标签。
     * @example `EmailQuestionnaireHelioscam`
     */
    "TagName"?: string;
    /**
     * 指定本次请求返回结果数目。范围是1~100
     * @example `5`
     */
    "Length"?: number;
    /**
     * 分页用，指定本次请求的偏移量。如果还有更多结果，下次请求将该返回值设置到请求中的NextStart
     * @example `90f0243616#203#a***@example.net-1658817837#a***@example.net.247475288187`
     */
    "NextStart"?: string;
}
