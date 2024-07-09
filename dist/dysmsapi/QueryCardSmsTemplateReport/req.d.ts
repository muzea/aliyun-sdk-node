export interface QueryCardSmsTemplateReportRequest {
    /**
     * 卡片短信对象。
     */
    "TemplateCodes": string[];
    /**
     * 开始时间，格式为yyyy-MM-dd HH:mm:ss
     * @example `2020-10-10 00:00:01`
     */
    "StartDate": string;
    /**
     * 结束时间，格式为yyyy-MM-dd HH:mm:ss
     * @example `2020-10-11 00:00:01`
     */
    "EndDate": string;
}
