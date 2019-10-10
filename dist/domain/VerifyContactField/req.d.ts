interface VerifyContactFieldRequest {
    "RegionId"?: string;
    /**
    * 省份
    * @example `Bei jing`
    */ "Province"?: string;
    /**
    * 用户ip
    * @example `127.0.0.1`
    */ "UserClientIp"?: string;
    /**
    * 接口返回信息的语言，枚举值范围：zh 中文；en 英文。默认为en
    * @example `en`
    */ "Lang"?: string;
    /**
    * 城市
    * @example `Bei jing`
    */ "City"?: string;
    /**
    * 持有者名称
    * @example `zhang san`
    */ "RegistrantOrganization"?: string;
    /**
    * 国家代码 如CN，US
    * @example `CN`
    */ "Country"?: string;
    /**
    * 联系人名称
    * @example `zhang san`
    */ "RegistrantName"?: string;
    /**
    * 地址
    * @example `Rd. xitucheng`
    */ "Address"?: string;
    /**
    * 电子邮箱
    * @example `test@test.com`
    */ "Email"?: string;
    /**
    * 邮政编码
    * @example `10000`
    */ "PostalCode"?: string;
    /**
    * 电话国家代码
    * @example `86`
    */ "TelArea"?: string;
    /**
    * 电话
    * @example `13800000000`
    */ "Telephone"?: string;
    /**
    * 分机号码
    * @example `01`
    */ "TelExt"?: string;
    /**
    * 中文持有者名称
    * @example `张三`
    */ "ZhRegistrantOrganization"?: string;
    /**
    * 中文联系人名称
    * @example `张三`
    */ "ZhRegistrantName"?: string;
    /**
    * 中文省份
    * @example `北京`
    */ "ZhProvince"?: string;
    /**
    * 中文地址
    * @example `西土城路`
    */ "ZhAddress"?: string;
    /**
    * 中文城市
    * @example `北京市`
    */ "ZhCity"?: string;
    /**
    * 注册者类型，取值范围：1 个人；2 企业
    * @example `1`
    */ "RegistrantType"?: string;
    "DomainName"?: string;
}
export { VerifyContactFieldRequest };