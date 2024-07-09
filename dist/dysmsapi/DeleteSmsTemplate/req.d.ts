export interface DeleteSmsTemplateRequest {
    /**
     * 短信模板Code。
     * - 通过[QuerySmsTemplateList](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-querysmstemplatelist?spm=a2c4g.11186623.0.0.92976e8bjA4ySH)接口获取短信模板Code。
     * - 在[模板管理](https://dysms.console.aliyun.com/domestic/text/template)页面获取短信模板Code。
     * ><notice>删除短信模板后不可恢复，请谨慎操作。></notice>
     * @example `SMS_152550****`
     */
    "TemplateCode": string;
}
