export interface QuerySmsTemplateResponse {
    /**
     * 短信模板内容。
     * @example `亲爱的会员！阿里云短信服务祝您新年快乐！`
     */
    TemplateContent: string;
    /**
     * 请求ID。
     * @example `0A974B78-02BF-4C79-ADF3-90CFBA1B55B1`
     */
    RequestId: string;
    /**
     * 短信模板Code。
     * @example `SMS_1525****`
     */
    TemplateCode: string;
    /**
     * 模板审核状态。返回值：
     * - **0**：审核中。
     * - **1**：通过审核。
     * - **2**：未通过审核，会返回审核失败的原因，请参考[短信审核失败的处理建议](https://help.aliyun.com/zh/sms/user-guide/causes-of-application-failures-and-suggestions?spm=a2c4g.11186623.0.0.41fd339f3bPSCQ)，调用[ModifySmsTemplate](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-modifysmstemplate?spm=a2c4g.11186623.0.0.5b1f6e8bQloFit)接口或在[模板管理](https://dysms.console.aliyun.com/domestic/text/template)页面修改短信模板。
     * - **10**：取消审核。
     * @example `0`
     */
    TemplateStatus: number;
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~101346~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 短信类型。返回值：
     * - **0**：验证码。
     * - **1**：短信通知。
     * - **2**：推广短信。
     * - **3**：国际/港澳台消息。
     * @example `1`
     */
    TemplateType: number;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 短信模板名称。
     * @example `通知短信`
     */
    TemplateName: string;
    /**
     * 创建短信模板的时间。
     * @example `2024-06-03 10:02:34`
     */
    CreateDate: string;
    /**
     * 模板审核备注。
     * - 如果审核状态为**通过审核**或**审核中**，Reason返回“无审批备注”。
     * - 如果审核状态为**未通过审核**，Reason返回未审核通过的具体原因。
     * @example `无审批备注`
     */
    Reason: string;
}
