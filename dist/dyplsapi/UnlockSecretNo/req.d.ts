export interface UnlockSecretNoRequest {
    /**
     * 号码池Key。
     * 在号码隐私保护控制台，[号码池管理](https://dyplsnext.console.aliyun.com/number-pool)页面获取**号码池Key**。
     * @example `FC2256****`
     */
    "PoolKey": string;
    /**
     * 需要解锁的隐私号码，需要填写完整的手机号码。
     * @example `1300000****`
     */
    "SecretNo": string;
}
