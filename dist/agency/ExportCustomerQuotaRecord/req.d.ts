export interface ExportCustomerQuotaRecordRequest {
    /**
     * 客户uid
     * @example `5113766248601929`
     */
    "EndUserPk": number;
    /**
     * 开始日期
     * 格式：yyyy-MM-dd
     * @example `2023-11-10`
     */
    "StartDate": string;
    /**
     * 结束日期
     * 格式：yyyy-MM-dd
     * @example `2023-12-24`
     */
    "EndDate": string;
    /**
     * 操作类型
     * 枚举
     * all 全部
     * quota_create  创建
     * quota_amount_adjust 额度调整
     * @example `all`
     */
    "OperationType": string;
    /**
     * 多语言参数，默认英文
     * en：英文
     * zh：中文
     * ja：日文
     * @example `en`
     */
    "Language"?: string;
}
