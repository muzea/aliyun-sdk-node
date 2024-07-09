export interface QuerySmsTemplateRequest {
    /**
     * 短信模板CODE。
     * - 在[AddSmsTemplate](~~121208~~)接口的返回参数中获取短信模板Code。
     * - 在[模板管理](https://dysms.console.aliyun.com/domestic/text/template)页面查看短信模板Code。
     * @example `SMS_1525****`
     */
    "TemplateCode": string;
}
