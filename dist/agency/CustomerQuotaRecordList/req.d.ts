export interface CustomerQuotaRecordListRequest {
    /**
     * 客户uid
     * @example `5113766248601929`
     */
    "EndUserPk": number;
    /**
     * 开始日期
     * 格式：yyyy-MM-dd
     * @example `2023-01-02`
     */
    "StartDate": string;
    /**
     * 结束日期
     * 格式：yyyy-MM-dd
     * @example `2023-09-24`
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
     * 分页每页记录数，最大值100
     * @example `10`
     */
    "PageSize": number;
    /**
     * 分页，当前页码，从 1 开始
     * @example `1`
     */
    "PageNo": number;
    /**
     * 多语言参数，默认英文
     * en：英文
     * zh：中文
     * ja：日文
     * @example `en`
     */
    "Language"?: string;
}
