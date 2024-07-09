export interface QueryNotifyRequest {
    /**
     * 查询结果中是否包含已确认的通知。取值：
     * - **true**：包含
     * - **false**：不包含
     * >已确认的通知即已通过ConfirmNotify接口标记为已确认的通知。
     * @example `false`
     */
    "WithConfirmed": boolean;
    /**
     * 查询开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2022-05-02T08:38:37Z`
     */
    "From": string;
    /**
     * 查询结束时间，需要晚于开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2022-05-09T08:38:37Z`
     */
    "To": string;
    /**
     * 每页记录数，取值：
     * * **30**
     * * **50**
     * * **100**
     * 默认值：**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值：大于**0**且不超过Integer的最大值。
     * 默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
}
