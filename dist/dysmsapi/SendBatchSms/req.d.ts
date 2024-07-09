export interface SendBatchSmsRequest {
    /**
     * 接收短信的手机号码。手机号码格式：
     * * 国内短信：+/+86/0086/86或无任何前缀的11位手机号码，例如1590000\*\*\*\*。
     * * 国际/港澳台消息：国际区号+号码，例如852000012\*\*\*\*。
     * > 验证码类型短信，建议使用接口SendSms单独发送。
     * @example `["1590000****","1350000****"]`
     */
    "PhoneNumberJson": string;
    /**
     * 短信签名名称。
     * 添加签名并审核通过后，才可使用签名名称。
     * 您可以通过[AddSmsSign](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-addsmssign?spm=a2c4g.11186623.0.0.4b1334e5uB0hxV)接口添加签名或在[短信服务控制台](https://dysms.console.aliyun.com/dysms.htm?spm=5176.12818093.categories-n-products.ddysms.3b2816d0xml2NA#/overview)添加签名。
     * @example `["阿里云","阿里巴巴"]`
     */
    "SignNameJson": string;
    /**
     * 短信模板Code。国内短信模板和国际短信模板不可以混用。
     * 添加模板并审核通过后，才可使用模板Code。
     * 您可以通过[AddSmsTemplate](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-addsmstemplate?spm=a2c4g.11186623.0.0.4b864201n9RljR)接口添加签名或在[短信服务控制台](https://dysms.console.aliyun.com/dysms.htm?spm=5176.12818093.categories-n-products.ddysms.3b2816d0xml2NA#/overview)添加模板。
     * @example `SMS_15255****`
     */
    "TemplateCode": string;
    /**
     * 短信模板变量对应的实际值。
     * >如果JSON中需要带换行符，请参照标准的JSON协议处理；且模板变量值的个数必须与手机号码、签名的个数相同、内容一一对应，表示向指定手机号码中发对应签名的短信，且短信模板中的变量参数替换为对应的值。
     * @example `[{"name":"TemplateParamJson"},{"name":"TemplateParamJson"}]`
     */
    "TemplateParamJson"?: string;
    /**
     * 上行短信扩展码，JSON数组格式。
     * > 无特殊需要可忽略此字段。
     * @example `["90999","90998"]`
     */
    "SmsUpExtendCodeJson"?: string;
    /**
     * 外部流水扩展字段，长度小于256的字符串。
     * > 无特殊需要可忽略此字段。
     * @example `abcdefg`
     */
    "OutId"?: string;
}
