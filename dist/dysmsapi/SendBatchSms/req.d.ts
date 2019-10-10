interface SendBatchSmsRequest {
    "RegionId"?: string;
    /**
    * 接收短信的手机号码，JSON数组格式。
    * 手机号码格式：
    * * 国内短信：11位手机号码，例如15900000000。
    * * 国际/港澳台消息：国际区号+号码，例如85200000000。
    * > 验证码类型短信，建议使用接口SendSms单独发送。
    * @example `["15900000000","13500000000"]`
    */ "PhoneNumberJson": string;
    /**
    * 短信签名名称，JSON数组格式。
    * 请在控制台**签名管理**页面**签名名称**一列查看。
    * <note> 必须是已添加、并通过审核的短信签名；且短信签名的个数必须与手机号码的个数相同、内容一一对应。</note>
    * @example `["阿里云","阿里巴巴"]`
    */ "SignNameJson": string;
    /**
    * 短信模板CODE。请在控制台**模板管理**页面**模板CODE**一列查看。
    * <note>必须是已添加、并通过审核的模板CODE；且发送国际/港澳台消息时，请使用国际/港澳台短信模版。</note>
    * @example `SMS_152550005`
    */ "TemplateCode": string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    "templateParamJson"?: string;
    /**
    * 短信模板变量对应的实际值，JSON格式。
    * <note>如果JSON中需要带换行符，请参照标准的JSON协议处理；且模板变量值的个数必须与手机号码、签名的个数相同、内容一一对应，表示向指定手机号码中发对应签名的短信，且短信模板中的变量参数替换为对应的值。</note>
    * @example `[{"name":"TemplateParamJson"},{"name":"TemplateParamJson"}]`
    */ "TemplateParamJson"?: string;
    /**
    * 上行短信扩展码，JSON数组格式。无特殊需要此字段的用户请忽略此字段。
    * @example `["90999","90998"]`
    */ "SmsUpExtendCodeJson"?: string;
}
export { SendBatchSmsRequest };