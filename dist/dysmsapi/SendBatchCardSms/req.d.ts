export interface SendBatchCardSmsRequest {
    /**
     * 卡片短信模板Code。请在控制台**国内消息**页面中的**模板管理**页签下**模板CODE**一列查看。
     * >必须是已添加、并通过审核的卡片短信模板。
     * @example `CARD_SMS_3245`
     */
    "CardTemplateCode": string;
    /**
     * 回落文本短信的模板Code。请在控制台**国内消息**页面中的**模板管理**页签下**模板CODE**一列查看。
     * >必须是已添加、并通过审核的短信模板。
     * @example `SMS_234251075`
     */
    "SmsTemplateCode"?: string;
    /**
     * 回落类型。取值：
     * - **SMS**：不支持卡片短信的号码，回落文本短信。
     * - **DIGITALSMS**：不支持卡片短信的号码，回落数字短信。
     * - **NONE**：不需要回落。
     * @example `SMS`
     */
    "FallbackType": string;
    /**
     * 回落数字短信的模板Code。请在控制台**国内消息**页面中的**模板管理**页签下**模板CODE**一列查看。
     * >必须是已添加、并通过审核的短信模板。
     * @example `DIGITAL_SMS_234080176`
     */
    "DigitalTemplateCode"?: string;
    /**
     * 预留给调用方使用的ID。
     * @example `16545681783595370`
     */
    "OutId"?: string;
    /**
     * 接收短信的手机号码。
     * @example `[\"1390000****\",\"1370000****\"]"`
     */
    "PhoneNumberJson": string;
    /**
     * 短信签名名称。
     * 请在控制台**国内消息**页面中的**签名管理**页签下**签名名称**一列查看。
     * >必须是已添加、并通过审核的短信签名；且短信签名的个数必须与手机号码的个数相同、内容一一对应。
     * @example `[\"阿里云\",\"阿里巴巴\"]`
     */
    "SignNameJson": string;
    /**
     * 卡片短信模板参数对应的实际值。
     * @example `[{\"customurl\":\"http://www.alibaba.com\",\"dyncParams\":\"{\\\"a\\\":\\\"hello\\\",\\\"b\\\":\\\"world\\\"}\"}]`
     */
    "CardTemplateParamJson"?: string;
    /**
     * 文本短信模板参数对应的实际值。
     * @example `[{"a":1,"b":2},{"a":9,"b":8}]`
     */
    "SmsTemplateParamJson"?: string;
    /**
     * 数字短信模板参数对应的实际值。
     * @example `[{"a":1,"b":2},{"a":9,"b":8}]`
     */
    "DigitalTemplateParamJson"?: string;
    /**
     * 上行短信扩展码。
     * @example `[\"6\",\"6\"]`
     */
    "SmsUpExtendCodeJson"?: string;
    /**
     * 短信模板CODE。
     * 您可以登录[短信服务控制台](https://dysms.console.aliyun.com/dysms.htm?spm=5176.12818093.categories-n-products.ddysms.3b2816d0xml2NA#/overview)，选择**国内消息**或**国际/港澳台消息**，在**模板管理**页面查看**模板CODE**。
     * >必须是已添加、并通过审核的短信模板；且发送国际/港澳台消息时，请使用国际/港澳台短信模板。
     * @example `SMS_20375****`
     */
    "TemplateCode"?: string;
    /**
     * 短信模板变量对应的实际值。
     * >如果JSON中需要带换行符，请参照标准的JSON协议处理；且模板变量值的个数必须与手机号码、签名的个数相同、内容一一对应，表示向指定手机号码中发对应签名的短信，且短信模板中的变量参数替换为对应的值。
     * @example `[{"name":"TemplateParamJson"},{"name":"TemplateParamJson"}]`
     */
    "TemplateParamJson"?: string;
}
