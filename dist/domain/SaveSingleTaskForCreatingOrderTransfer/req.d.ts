interface SaveSingleTaskForCreatingOrderTransferRequest {
    "RegionId"?: string;
    /**
    * 域名
    * @example `test.com`
    */ "DomainName": string;
    /**
    * 域名转入密码
    * @example `testCode`
    */ "AuthorizationCode": string;
    /**
    * 已经实名认证域名信息模板id
    * @example `123456`
    */ "RegistrantProfileId": number;
    /**
    * 用户ip
    * @example `127.0.0.1`
    */ "UserClientIp"?: string;
    /**
    * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en。
    * @example `en`
    */ "Lang"?: string;
    /**
    * 是否允许溢价词域名转入，默认为false
    * @example `false`
    */ "PermitPremiumTransfer"?: boolean;
    "CouponNo"?: string;
    "UseCoupon"?: boolean;
    "PromotionNo"?: string;
    "UsePromotion"?: boolean;
}
export { SaveSingleTaskForCreatingOrderTransferRequest };