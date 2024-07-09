export interface GetSmsTemplateResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `819BE656-D2E0-4858-8B21-B2E47708****`
     */
    RequestId: string;
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
     * 短信模板名称。
     * @example `验证码`
     */
    TemplateName: string;
    /**
     * 短信模板Code。
     * @example `SMS_20375****`
     */
    TemplateCode: string;
    /**
     * 短信模板内容。
     * @example `您正在申请手机注册，验证码为：${code}，5分钟内有效！`
     */
    TemplateContent: string;
    /**
     * 短信类型。取值：
     * - **0**：验证码。
     * - **1**：短信通知。
     * - **2**：推广短信。
     * - **3**：国际/港澳台消息。
     * > 仅支持企业认证用户申请推广短信和国际/港澳台消息。个人用户与企业用户权益区别详情请参见[使用须知](https://help.aliyun.com/zh/sms/user-guide/usage-notes?spm=a2c4g.11186623.0.0.67447f576NJnE8)。
     * @example `0`
     */
    TemplateType: string;
    /**
     * 模板审核状态。返回值：
     * - **0**：审核中。
     * - **1**：通过审核。
     * - **2**：未通过审核，会返回审核失败的原因，请参考[短信审核失败的处理建议](https://help.aliyun.com/zh/sms/user-guide/causes-of-application-failures-and-suggestions?spm=a2c4g.11186623.0.0.41fd339f3bPSCQ)，调用[UpdateSmsTemplate](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-updatesmstemplate?spm)接口或在[模板管理](https://dysms.console.aliyun.com/domestic/text/template)页面修改短信模板。
     * - **10**：取消审核。
     * @example `2`
     */
    TemplateStatus: string;
    /**
     * 申请模板时，关联的短信签名。
     * @example `阿里云`
     */
    RelatedSignName: string;
    /**
     * 模板标识，标识模板是用户自定义、系统赠送等。取值：
     * - 2：用户自定义创建模板。
     * - 3：系统赠送模板。
     * @example `2`
     */
    TemplateTag: number;
    /**
     * 工单号。
     * 审核人员查询审核时会用到此参数。您需要审核加急时需要提供此工单号。
     * @example `2003019****`
     */
    OrderId: string;
    /**
     * 模板变量规则。
     * 模板变量规则详情，请参见[示例文档](https://help.aliyun.com/zh/sms/templaterule-template-variable-parameter-filling-example)。
     * @example `{"code":"characterWithNumber"}
    `
     */
    VariableAttribute: string;
    /**
     * 短信模板申请说明，是模板审核的参考信息之一。
     * @example `申请验证码模板`
     */
    Remark: string;
    /**
     * 创建短信模板的时间。
     * @example `2024-06-03 10:02:34`
     */
    CreateDate: string;
    /**
     * 审核信息。
     */
    AuditInfo: {
        /**
         * 审核未通过的原因。
         * @example `模板内容中包含错别字。`
         */
        RejectInfo: string;
        /**
         * 审核时间。
         * @example `2024-06-03 11:20:34
        `
         */
        AuditDate: string;
    };
    FileUrlList: {
        /**
         * 文件资料信息，兼容[AddSmsSign](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-addsmstemplate?spm)接口创建的签名。
         */
        FileUrl: string[];
    };
    MoreDataFileUrlList: {
        /**
         * 更多资料信息，补充上传业务证明文件或业务截图文件列表。
         */
        MoreDataFileUrl: string[];
    };
    /**
     * 国际/港澳台模板类型。当**TemplateType**参数为**3**时，国际/港澳台模板需要设置此参数，取值：
     * - **0**：验证码。
     * - **1**：短信通知。
     * - **2**：推广短信。
     * @example `0`
     */
    IntlType: number;
    /**
     * 应用场景内容。
     * @example `http://www.aliyun.com/
    `
     */
    ApplyScene: string;
}
