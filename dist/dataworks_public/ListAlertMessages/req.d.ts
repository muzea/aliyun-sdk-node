export interface ListAlertMessagesRequest {
    /**
     * 分页的页数。默认值为1、最小值为1、最大值为30。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页显示的条数，默认为10，最大100条。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 起始报警时间，需要使用yyyy-MM-dd'T'HH:mm:ssZ的UTC格式。
     * @example `2020-04-02T00:00:00+0800`
     */
    "BeginTime": string;
    /**
     * 截止报警时间，需要使用yyyy-MM-dd'T'HH:mm:ssZ的UTC格式。
     * @example `2020-04-04T00:00:00+0800`
     */
    "EndTime": string;
    /**
     * 自定义规则的ID，当AlertRuleTypes参数配置为USER_DEFINE自定义规则时生效。
     * 该参数与BaselineId参数配置一个即可。
     * @example `9527`
     */
    "RemindId"?: number;
    /**
     * 报警方式，取值如下：
     * - MAIL：邮件。
     * - SMS：短信。
     * <props="intl">可使用短信告警的地域为：新加坡、马来西亚（吉隆坡）、德国（法兰克福）。</props>
     * <props="china">- PHONE：电话。仅DataWorks专业版及以上版本支持。</props>
     * 多个报警方式之间使用英文逗号（,）分隔。
     * @example `SMS,MAIL,PHONE`
     */
    "AlertMethods"?: string;
    /**
     * 报警接收人的阿里云UID。
     * @example `123456`
     */
    "AlertUser"?: string;
    /**
     * 规则类型，包括GLOBAL（全局规则）、USER_DEFINE（自定义规则）和OTHER（其它）。多个规则类型之间使用英文逗号（,）分隔。
     * @example `GLOBAL,USER_DEFINE,OTHER`
     */
    "AlertRuleTypes"?: string;
    /**
     * 基线ID。当AlertRuleTypes参数配置为GLOBAL时生效。
     * 该参数与RemindId参数配置一个即可。
     * @example `1234`
     */
    "BaselineId"?: number;
}
