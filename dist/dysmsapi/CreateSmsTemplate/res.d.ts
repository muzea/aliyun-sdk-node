export interface CreateSmsTemplateResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `F655A8D5-B967-440B-8683-DAD6FF8DE990`
     */
    RequestId: string;
    /**
     * 请求状态码。
     * * 返回OK代表请求成功。
     * * 其他错误码，请参见本章节的**错误码**列表或产品[API错误码](~~101346~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `successful`
     */
    Message: string;
    /**
     * 短信模板名称。
     * @example `验证码`
     */
    TemplateName: string;
    /**
     * 短信模板Code。
     * 提交模板申请后，您可以使用短信模板Code，通过[GetSmsTemplate](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-getsmstemplate?)接口查询模板审核详情。也可以[配置回执消息](https://help.aliyun.com/zh/sms/developer-reference/configure-delivery-receipts-1?spm)，通过TemplateSmsReport获取模板的审核状态消息。
     * @example `SMS_10000****`
     */
    TemplateCode: string;
    /**
     * 工单ID。
     * 审核人员查询审核时会用到此参数。您需要审核加急时需要提供此工单号。
     * @example `2005020****`
     */
    OrderId: string;
}
