export interface QueryReceiverByParamRequest {
    /**
     * 当前页码
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 每页大小
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 关键词，默认所有信息
     * @example `mesh-notification`
     */
    "KeyWord"?: string;
    /**
     * 投递结果。不填，代表所有状态。取值：
     * - 0：成功
     * - 2：无效地址
     * - 3：垃圾邮件
     * - 4：失败
     * @example `1`
     */
    "Status"?: number;
}
