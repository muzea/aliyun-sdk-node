export interface ModifySmsTemplateRequest {
    /**
     * 短信类型。取值：
     * - **0**：验证码。
     * - **1**：短信通知。
     * - **2**：推广短信。
     * - **3**：国际/港澳台消息。
     * @example `0`
     */
    "TemplateType": number;
    /**
     * 模板名称，长度限制为1~30个字符。
     * @example `验证码模板`
     */
    "TemplateName": string;
    /**
     * 未通过审核的短信模板Code。
     * - 通过[QuerySmsTemplateList](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-querysmstemplatelist?spm=a2c4g.11186623.0.0.92976e8bjA4ySH)接口获取未通过审核的短信模板Code。
     * - 在[模板管理](https://dysms.console.aliyun.com/domestic/text/template)页面查看未通过审核的短信模板Code。
     * @example `SMS_15255****`
     */
    "TemplateCode": string;
    /**
     * 模板内容，长度不超过500个字符。
     * 模板内容和变量内容必须符合[短信规范](https://help.aliyun.com/zh/sms/user-guide/message-template-specifications/?spm=a2c4g.11186623.0.0.2fa35bceYWIYYG)，否则模板会审核失败。您也可以在[申请模板](https://dysms.console.aliyun.com/domestic/text/template/add)页面，查看常用模板示例。使用示例模板可提高审核效率和成功率。
     * @example `您正在申请手机注册，验证码为：${code}，5分钟内有效！`
     */
    "TemplateContent": string;
    /**
     * 短信模板申请说明，长度不超过100个字符。
     * 模板审核的参考信息，完善申请说明有助于审核人员理解您的业务场景，提高审核效率。填写指导：
     * - 您可以提供已上线业务的使用场景。
     * - 您可以提供真实场景的短信示例，体现您的业务场景。
     * - 您可以提供变量的传参内容，详细描述业务使用场景和选择这个变量属性的原因。
     * - 您可以提供实际业务的网站链接、已备案的域名地址、应用市场下载链接等。
     * - 登录场景，您可以提供测试账号和密码。
     * @example `手机注册登录`
     */
    "Remark": string;
}
