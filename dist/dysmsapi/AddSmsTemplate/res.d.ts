export interface AddSmsTemplateResponse {
    /**
     * 请求状态码。
     * * 返回OK代表请求成功。
     * * 其他错误码，请参见[API错误码](~~101346~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `F655A8D5-B967-440B-8683-DAD6FF8DE990`
     */
    RequestId: string;
    /**
     * 短信模板Code。
     * 提交模板申请后，您可以使用短信模板Code，通过[QuerySmsTemplate](~~419289~~)接口查询模板审核详情。也可以[配置回执消息](https://help.aliyun.com/zh/sms/developer-reference/configure-delivery-receipts-1?spm=a2c4g.11186623.0.0.4c5a2b2a3ThSM8)，通过TemplateSmsReport获取模板的审核状态消息。
     * @example `SMS_46817****`
     */
    TemplateCode: string;
}
