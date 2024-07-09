export interface SendSmsRequest {
    /**
     * 接收短信的手机号码。手机号码格式：
     * * 国内短信：+/+86/0086/86或无任何前缀的11位手机号码，例如1390000\*\*\*\*。
     * * 国际/港澳台消息：国际区号+号码，例如852000012\*\*\*\*。
     * * 发送测试短信的手机号，需要先在[控制台](https://dysms.console.aliyun.com/quickstart)绑定测试手机号后才可使用。
     * >支持对多个手机号码发送短信，手机号码之间以半角逗号（,）分隔。上限为1000个手机号码。批量调用相对于单条调用及时性稍有延迟。验证码类型短信，建议使用单独发送的方式。
     * @example `1390000****`
     */
    "PhoneNumbers": string;
    /**
     * 短信签名名称。
     * 您可以通过[AddSmsSign](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-addsmssign?spm=a2c4g.11186623.0.0.4b1334e5uB0hxV)接口添加签名或在[短信服务控制台](https://dysms.console.aliyun.com/dysms.htm?spm=5176.12818093.categories-n-products.ddysms.3b2816d0xml2NA#/overview)添加签名，签名通过审核后，才可使用签名名称。
     * @example `阿里云`
     */
    "SignName": string;
    /**
     * 短信模板Code。
     * 您可以通过[AddSmsTemplate](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-addsmstemplate?spm=a2c4g.11186623.0.0.4b864201n9RljR)接口添加模板或在[短信服务控制台](https://dysms.console.aliyun.com/dysms.htm?spm=5176.12818093.categories-n-products.ddysms.3b2816d0xml2NA#/overview)添加模板，模板通过审核后，才可使用模板Code。
     * @example `SMS_15305****`
     */
    "TemplateCode": string;
    /**
     * 短信模板变量对应的实际值。支持传入多个参数。
     * > - 如果JSON中需要带换行符，请参照标准的JSON协议处理。
     * > - 模板变量规范，请参见[短信模板规范](~~108253~~)。
     * @example `{"name":"张三","number":"1390000****"}`
     */
    "TemplateParam"?: string;
    /**
     * 上行短信扩展码。上行短信指发送给通信服务提供商的短信，用于定制某种服务、完成查询，或是办理某种业务等，需要收费，按运营商普通短信资费进行扣费。
     * > 扩展码是生成签名时系统自动默认生成的，不支持自行传入。无特殊需要可忽略此字段。
     * @example `90999`
     */
    "SmsUpExtendCode"?: string;
    /**
     * 外部流水扩展字段。
     * > 无特殊需要可忽略此字段。
     * @example `abcdefgh`
     */
    "OutId"?: string;
}
