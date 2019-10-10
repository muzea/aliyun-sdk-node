interface QueryRegistrantProfileRealNameVerificationInfoRequest {
    "RegionId"?: string;
    /**
    * 域名信息模板编号
    * @example `123456`
    */ "RegistrantProfileId": number;
    /**
    * 用户ip
    * @example `127.0.0.1`
    */ "UserClientIp"?: string;
    /**
    * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en
    * @example `en`
    */ "Lang"?: string;
    /**
    * 是否获取实名认证图片
    * @example `false`
    */ "FetchImage"?: boolean;
}
export { QueryRegistrantProfileRealNameVerificationInfoRequest };