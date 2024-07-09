export interface SendSmsVerifyCodeRequest {
    /**
     * 方案名称，如果不填则为“默认方案”。最多不超过20个字符。
     * @example `方案名称`
     */
    "SchemeName"?: string;
    /**
     * 号码国家编码，默认为86，目前也仅支持国内号码发送。
     * @example `国家码`
     */
    "CountryCode"?: string;
    /**
     * 手机号。
     * @example `86130****0000`
     */
    "PhoneNumber": string;
    /**
     * 签名名称。
     * @example `阿里云`
     */
    "SignName": string;
    /**
     * 短信模板CODE。
     * 您可以登录[短信服务控制台](https://dysms.console.aliyun.com/dysms.htm?spm=5176.12818093.categories-n-products.ddysms.3b2816d0xml2NA#/overview)，选择**国内消息**或**国际/港澳台消息**，在**模板管理**页面查看**模板CODE**。
     * >必须是已添加、并通过审核的短信模板；且发送国际/港澳台消息时，请使用国际/港澳台短信模板。
     * @example `azsq_*****`
     */
    "TemplateCode": string;
    /**
     * 短信模板变量填写的参数值。验证码位置使用"##code##"替代。
     * 示例：如模板内容为：“您的验证码是${authCode}，5分钟内有效，请勿告诉他人。”。此时，该字段传入：{"authCode":"##code##"}
     * <notice>上文中的authCode请替换成您实际申请的验证码模板中的参数名称</notice>
     * > - 如果JSON中需要带换行符，请参照标准的JSON协议处理。
     * > - 模板变量规范，请参见[短信模板规范](~~108253~~)。>
     * @example `{"code":"##code##"}`
     */
    "TemplateParam": string;
    /**
     * 上行短信扩展码。上行短信指发送给通信服务提供商的短信，用于定制某种服务、完成查询，或是办理某种业务等，需要收费，按运营商普通短信资费进行扣费。
     * >扩展码是生成签名时系统自动默认生成的，不支持自行传入。无特殊需要此字段的用户请忽略此字段。如需使用，请联系您的商务经理。
     * @example `1213123`
     */
    "SmsUpExtendCode"?: string;
    /**
     * 外部流水号。
     * @example `外部流水号（透传）`
     */
    "OutId"?: string;
    /**
     * 验证码长度支持4～8位长度，默认是4位。
     * @example `4`
     */
    "CodeLength"?: number;
    /**
     * 验证码有效时长，单位秒，默认为300秒。
     * @example `300`
     */
    "ValidTime"?: number;
    /**
     * 核验规则，当有效时间内对同场景内的同号码重复发送验证码时，旧验证码如何处理。
     * - 1：覆盖处理（默认），即旧验证码会失效掉。
     * - 2：保留，即多个验证码都是在有效期内都可以校验通过。
     * @example `1`
     */
    "DuplicatePolicy"?: number;
    /**
     * 时间间隔，单位：秒。即多久间隔可以发送一次验证码，用于频控，默认60秒。
     * @example `60`
     */
    "Interval"?: number;
    /**
     * 生成的验证码类型，默认为1。
     * - 1：纯数字
     * - 2：纯大写字母
     * - 3：纯小写字母
     * - 4：大小字母混合
     * - 5：数字+大写字母混合
     * - 6：数字+小写字母混合
     * - 7：数字+大小写字母混合
     * @example `1`
     */
    "CodeType"?: number;
    /**
     * 是否返回验证码。
     * - **true**：返回。
     * - **false**：不返回。
     * @example `false`
     */
    "ReturnVerifyCode"?: boolean;
}
