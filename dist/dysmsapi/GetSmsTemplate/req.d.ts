export interface GetSmsTemplateRequest {
    /**
     * 短信模板Code。
     * - 在[CreateSmsTemplate](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-createsmstemplate?spm)接口的返回参数中获取短信模板Code。
     * - 在[模板管理](https://dysms.console.aliyun.com/domestic/text/template)页面查看短信模板Code。
     * @example `SMS_20375****`
     */
    "TemplateCode": string;
}
