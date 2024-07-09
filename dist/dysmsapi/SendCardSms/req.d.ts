export interface SendCardSmsRequest {
    /**
     * 卡片短信对象。
     */
    "CardObjects": {
        /**
         * 渲染失败后跳转链接。
         * @example `https://alibaba.com`
         */
        customUrl: string;
        /**
         * 动态参数。动参变量不需要${}
         * @example `{\"param3\":\"李四3\",\"param1\":\"李四\",\"param2\":\"李四2\"}`
         */
        dyncParams: string;
        /**
         * 手机号码。
         * @example `1390000****`
         */
        mobile: string;
    }[];
    /**
     * 短信签名名称。请在控制台**国内消息**页面中的**签名管理**页签下**签名名称**一列查看。
     * >必须是通过审核的短信签名。
     * @example `阿里云`
     */
    "SignName": string;
    /**
     * 卡片短信模板Code。请在控制台**国内消息**页面中的**模板管理**页签下**模板CODE**一列查看。
     * >必须是已添加、并通过审核的卡片短信模板。
     * @example `CARD_SMS_70`
     */
    "CardTemplateCode": string;
    /**
     * 回落文本短信的模板Code。请在控制台**国内消息**页面中的**模板管理**页签下**模板CODE**一列查看。
     * >必须是已添加、并通过审核的短信模板。**FallbackType**为**SMS**时为必填。
     * @example `SIER_TEST_01`
     */
    "SmsTemplateCode"?: string;
    /**
     * 上行短信扩展码。上行短信，指发送给通信服务提供商的短信，用于定制某种服务、完成查询，或是办理某种业务等，需要收费的，按运营商普通短信资费进行扣费。
     * >无上述需求的用户请忽略此字段。
     * @example `1`
     */
    "SmsUpExtendCode"?: string;
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
     * @example `SMS_003`
     */
    "DigitalTemplateCode"?: string;
    /**
     * 预留给调用方使用的ID。
     * @example `38d76c9b-4a9a-4c89-afae-61fd8e0e****`
     */
    "OutId"?: string;
    /**
     * 回落文本短信的模板变量对应的实际值。
     * >如果JSON中需要带换行符，请参照标准的JSON协议处理。
     * @example `{\"jifen\":\"回落参数\"}`
     */
    "SmsTemplateParam"?: string;
    /**
     * 回落数字短信的模板变量对应的实际值。
     * >如果JSON中需要带换行符，请参照标准的JSON协议处理。
     * @example `{\"msg\",\"xxxd\"}`
     */
    "DigitalTemplateParam"?: string;
    /**
     * 文本短信模板CODE。
     * 请在控制台**国内消息**或**国际/港澳台消息**页面中的**模板管理**页签下**模板CODE**一列查看。
     * >必须是已添加、并通过审核的模板CODE；且发送国际/港澳台消息时，请使用国际/港澳台短信模版。
     * @example `SMS_2322****`
     */
    "TemplateCode"?: string;
    /**
     * 短信模板变量对应的实际值，JSON格式。
     * >如果JSON中需要带换行符，请参照标准的JSON协议处理。
     * @example `{
          \"code\": \"1111\"
    }`
     */
    "TemplateParam"?: string;
}
