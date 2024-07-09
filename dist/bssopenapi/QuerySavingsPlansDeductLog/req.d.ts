export interface QuerySavingsPlansDeductLogRequest {
    /**
     * 查询类型：
     * - spn 节省计划实例
     * - product 抵扣云产品实例
     * @example `spn`
     */
    "InstanceType"?: string;
    /**
     * 每页数量
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 多语言选项，默认返回中文
     * ZH 中文
     * EN 英文
     * @example `ZH`
     */
    "Locale"?: string;
    /**
     * 查询页数
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 实例ID
     * @example `spn-XXXXXXX`
     */
    "InstanceId"?: string;
    /**
     * 查询开始时间
     * @example `2022-01-01 00:00:00`
     */
    "StartTime"?: string;
    /**
     * 查询结束时间
     * @example `2022-01-05 00:00:00`
     */
    "EndTime"?: string;
}
