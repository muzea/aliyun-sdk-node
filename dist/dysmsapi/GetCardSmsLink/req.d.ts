export interface GetCardSmsLinkRequest {
    /**
     * 卡片短信模板Code。请在控制台**国内消息**页面中的**模板管理**页签下**模板CODE**一列查看。
     * >必须是已添加、并通过审核的短信模板。
     * @example `CARD_SMS_****`
     */
    "CardTemplateCode": string;
    /**
     * 外部流水扩展字段。
     * @example `BC20220608102511660860762****`
     */
    "OutId"?: string;
    /**
     * 手机号码、用户ID或系统内部标识。
     * > - 最多支持1万个手机号码。
     * > - 用户也可自定义标识，长度不超过60个字符。
     * > - OPPO厂商的模板一次最多申请10个。
     * @example `[\"1390000****
    \",\"1370000****
    \"]`
     */
    "PhoneNumberJson"?: string;
    /**
     * 短信签名名称。
     * 请在控制台**国内消息**页面中的**签名管理**页签下**签名名称**一列查看。
     * >必须是已添加、并通过审核的短信签名；且短信签名的个数必须与手机号码的个数相同、内容一一对应。
     * @example `[\"阿里云\", \"阿里云2\"]`
     */
    "SignNameJson": string;
    /**
     * 卡片短信动参。
     * @example ` [{\"customUrl\":\"https://alibaba.com\",\"dyncParams\": \"{\\\"动参key\\\":\\\"动参value\\\"}\"},{\"customUrl\":\"https://alibaba.com\",\"dyncParams\": \"{\\\"动参key\\\":\\\"动参value\\\"}\"}]`
     */
    "CardTemplateParamJson"?: string;
    /**
     * 卡片短信短链编码类型。
     * - **1**：群发
     * - **2**：个性化
     * @example `2`
     */
    "CardCodeType"?: number;
    /**
     * 卡片短信短链类型。
     * - 1：标准生成短码。
     * - 2：自定义生成短码。
     * > **CardLinkType**不填时，默认为标准生成短码。如需生成自定义短码，请联系阿里运营人员进行报备。
     * @example `1`
     */
    "CardLinkType"?: number;
    /**
     * 发送账号分配的短链域名，需要提前报备。
     * > - 当**CardLinkType**为**2**时，**Domain**参数必填。
     * > - 当**Domain**参数不填时，则使用系统默认域名。长度不超过100个字符。
     * @example `xxx.com`
     */
    "Domain"?: string;
    /**
     * 客户自定义短码。长度为4~8位的数字或字母。
     * > 当生成类型为自定义生成短码时必填。
     * @example `abCde`
     */
    "CustomShortCodeJson"?: string;
}
