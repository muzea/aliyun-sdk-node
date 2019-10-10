interface CreateDVOrderAuditRequest {
    "RegionId"?: string;
    /**
    *
    * 指定证书实例名称。
    * @example `cas-cn-1111`
    */ "InstanceId": string;
    /**
    * 指定域名。如果有多个域名，要用半角逗号分开。
    * @example `*.com`
    */ "Domain": string;
    /**
    * 指定域名授权验证类型。取值为FILE或DNS，注意是大写。
    * @example `DNS`
    */ "DomainVerifyType": string;
    /**
    *
    * 指定用户姓名。
    * @example `AXXX`
    */ "Username": string;
    /**
    *
    * 指定用户邮箱。
    * @example `*@xx.com`
    */ "Email": string;
    /**
    *
    * 指定手机号码。
    * @example `12345XXXXXX`
    */ "Mobile": string;
    /**
    *
    * 指定省份。建议用拼音。
    * @example `zhejiang`
    */ "Province": string;
    /**
    *
    * 指定城市。建议用拼音。
    * @example `hangzhou`
    */ "City": string;
    /**
    * 指定请求的来源IP地址。
    * @example `1.2.3.4`
    */ "SourceIp"?: string;
    /**
    * 指定请求和接收消息的语言类型。
    * @example `zh`
    */ "Lang"?: string;
}
export { CreateDVOrderAuditRequest };