export interface DescribeDashboardResponse {
    /**
     * 请求唯一标识，用于识别一个请求。
     * @example `4CC30A8F-787C-55CA-87A6-7D1BED56067E`
     */
    RequestId: string;
    /**
     * 返回结果
     * @example `{
        "success":true,
        "model":{
            "perfMonthCount":0,
            "compatibilityMonthCount":0,
            "perfLastMonthCount":0,
            "compatibilityLastMonthCount":0,
            "automationMonthCount":0,
            "automationLastMonthCount":0
        }
    }`
     */
    Model: string;
}
