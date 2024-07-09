export interface UpdateSmsTemplateRequest {
    /**
     * 模板名称，长度不超过30个字符。
     * @example `验证码`
     */
    "TemplateName": string;
    /**
     * 未通过审核的模板Code。
     * @example `SMS_152550****`
     */
    "TemplateCode": string;
    /**
     * 模板内容，长度不超过500个字符。
     * 模板内容和变量内容必须符合短信规范，否则模板会审核失败。您也可以在申请模板页面，查看常用模板示例。使用示例模板可提高审核效率和成功率。变量规范请参见[TemplateContent参数变量规范](https://help.aliyun.com/zh/sms/templaterule-template-variable-parameter-filling-example?spm)。
     * @example `您正在申请手机注册，验证码为：${code}，5分钟内有效！`
     */
    "TemplateContent": string;
    /**
     * 短信模板申请说明，是模板审核的参考信息之一。
     * @example `登录场景使用验证码`
     */
    "Remark"?: string;
    /**
     * 短信类型。取值：
     * - **0**：验证码。
     * - **1**：短信通知。
     * - **2**：推广短信。
     * - **3**：国际/港澳台消息。
     * > 仅支持企业认证用户申请推广短信和国际/港澳台消息。个人用户与企业用户权益区别详情请参见[使用须知](https://help.aliyun.com/zh/sms/user-guide/usage-notes?spm=a2c4g.11186623.0.0.67447f576NJnE8)。
     * @example `0`
     */
    "TemplateType": number;
    /**
     * 模板申请时关联的短信签名。
     * @example `阿里云`
     */
    "RelatedSignName"?: string;
    /**
     * 模板变量规则。
     * 变量规则填写请参见[示例文档](https://help.aliyun.com/zh/sms/templaterule-template-variable-parameter-filling-example?spm)。
     * @example `{"code":"characterWithNumber"}`
     */
    "TemplateRule"?: string;
    /**
     * 更多资料，补充上传业务证明文件或业务截图，有助于审核人员了解您的业务详情。非必填，可不设置。
     */
    "MoreData"?: string[];
    /**
     * 应用场景，填写说明如下：
     * - 已备案网站，请填写带有HTTP或HTTPS的工信部备案的网站域名。
     * - 已上线APP，请填写带有HTTP或HTTPS的应用商店的展示链接，并确保App已经上线。
     * - 公众号或小程序，请填写公众号或小程序全称，并确保公众号或小程序已上线。
     * - 电商平台店铺名，仅适用于企业用户，请填写带有HTTP或HTTPS的电商铺的展示链接。
     * @example `http://www.aliyun.com/
    `
     */
    "ApplySceneContent"?: string;
    /**
     * 国际/港澳台模板类型。当**TemplateType**参数为**3**时，国际/港澳台模板需要设置此参数，取值：
     * - **0**：验证码。
     * - **1**：短信通知。
     * - **2**：推广短信。
     * @example `0`
     */
    "IntlType"?: number;
}
