interface SendSmsRequest {
    "RegionId"?: string;
    /**
    * 接收短信的手机号码。
    * 格式：
    * * 国内短信：11位手机号码，例如15951955195。
    * * 国际/港澳台消息：国际区号+号码，例如85200000000。
    * 支持对多个手机号码发送短信，手机号码之间以英文逗号（,）分隔。上限为1000个手机号码。批量调用相对于单条调用及时性稍有延迟。
    * <note>验证码类型短信，建议使用单独发送的方式。</note>
    * @example `15900000000`
    */ "PhoneNumbers": string;
    /**
    * 短信签名名称。请在控制台**签名管理**页面**签名名称**一列查看。
    * <note>必须是已添加、并通过审核的短信签名。</note>
    * @example `阿里云`
    */ "SignName": string;
    /**
    * 短信模板ID。请在控制台**模板管理**页面**模板CODE**一列查看。
    * <note>必须是已添加、并通过审核的短信签名；且发送国际/港澳台消息时，请使用国际/港澳台短信模版。</note>
    * @example `SMS_153055065`
    */ "TemplateCode": string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 短信模板变量对应的实际值，JSON格式。
    * <note>如果JSON中需要带换行符，请参照标准的JSON协议处理。</note>
    * @example `{"code":"1111"}`
    */ "TemplateParam"?: string;
    /**
    * 上行短信扩展码，无特殊需要此字段的用户请忽略此字段。
    * @example `90999`
    */ "SmsUpExtendCode"?: string;
    /**
    * 外部流水扩展字段。
    * @example `abcdefgh`
    */ "OutId"?: string;
}
export { SendSmsRequest };