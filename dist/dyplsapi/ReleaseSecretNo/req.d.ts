interface ReleaseSecretNoRequest {
    "RegionId"?: string;
    /**
    * 号码池Key。请登录[号码隐私保护控制台](https://dypls.console.aliyun.com/dypls.htm#/account)，在**号码池管理**中查看号码池Key。
    * @example `FC123456`
    */ "PoolKey": string;
    /**
    * 指定号码前缀。购买号码时，如果指定**SecretNo**，会根据指定的号码前缀模糊匹配手机号。
    * 最长可设置18位号码前缀。
    * @example `130`
    */ "SecretNo": string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { ReleaseSecretNoRequest };