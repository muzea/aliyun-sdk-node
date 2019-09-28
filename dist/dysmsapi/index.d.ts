interface DYSMSAPI {
    /**
    * 调用QuerySendDetails接口查看短信发送记录和发送状态。
    */ QuerySendDetails(query: {
        "RegionId"?: string;
        /**
        * 接收短信的手机号码。
        * 格式：
        * * 国内短信：11位手机号码，例如15900000000。
        * * 国际/港澳台消息：国际区号+号码，例如85200000000。
        * @example `15900000000`
        */ "PhoneNumber": string;
        /**
        * 短信发送日期，支持查询最近30天的记录。
        * 格式为yyyyMMdd，例如20181225。
        * @example `20181228`
        */ "SendDate": string;
        /**
        * 分页查看发送记录，指定每页显示的短信记录数量。
        * 取值范围为1~50。
        * @example `10`
        */ "PageSize": number;
        /**
        * 分页查看发送记录，指定发送记录的的当前页码。
        * @example `1`
        */ "CurrentPage": number;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 发送回执ID，即发送流水号。调用发送接口SendSms或SendBatchSms发送短信时，返回值中的BizId字段。
        * @example `134523^4351232`
        */ "BizId"?: string;
    }): Promise<{
        "TotalCount": number;
        "Message": string;
        "RequestId": string;
        "SmsSendDetailDTOs": {
            "SmsSendDetailDTO": {
                "SendDate": string;
                "SendStatus": number;
                "ReceiveDate": string;
                "ErrCode": string;
                "TemplateCode": string;
                "Content": string;
                "PhoneNum": string;
            }[];
        };
        "Code": string;
    }>;
    /**
    * 调用SendBatchSms接口批量发送短信。
    */ SendBatchSms(query: {
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
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "BizId": string;
        "Code": string;
    }>;
    /**
    * 调用SendSms发送短信。
    */ SendSms(query: {
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
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "BizId": string;
        "Code": string;
    }>;
    /**
    * 调用短信AddSmsSign申请短信签名。
    */ AddSmsSign(query: {
        "RegionId"?: string;
        /**
        * 签名名称。
        * > 签名必须符合[个人用户签名规范](~~108076~~)或[企业用户签名规范](~~108254~~)。
        * @example `阿里云`
        */ "SignName": string;
        /**
        * 签名来源。其中：
        * - 0：企事业单位的全称或简称。
        * - 1：工信部备案网站的全称或简称。
        * - 2：APP应用的全称或简称。
        * - 3：公众号或小程序的全称或简称。
        * - 4：电商平台店铺名的全称或简称。
        * - 5：商标名的全称或简称
        * > 签名来源为1时，请在申请说明中添加网站域名，加快审核速度。
        * @example `1`
        */ "SignSource": number;
        /**
        * 短信签名申请说明。请在申请说明中详细描述您的业务使用场景，申请工信部备案网站的全称或简称请在此处填写域名，长度不超过200个字符。
        * @example `当前的短信签名应用于双11大促推广营销`
        */ "Remark": string;
        "SignFileList": string[];
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用接口DeleteSmsSign删除短信签名。
    */ DeleteSmsSign(query: {
        "RegionId"?: string;
        /**
        * 短信签名。
        * > 必须是本账号已申请的短信签名。
        * @example `阿里云`
        */ "SignName": string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{}>;
    AddSmsTemplate(query: {
        "RegionId"?: string;
        "TemplateType": number;
        "TemplateName": string;
        "TemplateContent": string;
        "Remark": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DeleteSmsTemplate(query: {
        "RegionId"?: string;
        "TemplateCode": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    ModifySmsSign(query: {
        "RegionId"?: string;
        "SignName": string;
        "SignSource": number;
        "Remark": string;
        "SignFileList": string[];
        "OwnerId"?: number;
    }): Promise<{}>;
    ModifySmsTemplate(query: {
        "RegionId"?: string;
        "TemplateType": number;
        "TemplateName": string;
        "TemplateCode": string;
        "TemplateContent": string;
        "Remark": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    QuerySmsSign(query: {
        "RegionId"?: string;
        "SignName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    QuerySmsTemplate(query: {
        "RegionId"?: string;
        "TemplateCode": string;
        "OwnerId"?: number;
    }): Promise<{}>;
}
export default DYSMSAPI;
