interface AddSmsSignRequest {
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
}
export { AddSmsSignRequest };