export interface ReleaseSecretNoRequest {
    /**
     * 号码池Key。
     * 在号码隐私保护控制台，[号码池管理](https://dyplsnext.console.aliyun.com/number-pool)页面获取**号码池Key**。
     * @example `FC10000012345****`
     */
    "PoolKey": string;
    /**
     * 需要释放的隐私号码。
     * 请登录号码隐私保护控制台，在[号码管理](https://dyplsnext.console.aliyun.com/number/list)页面获取隐私号码，或者在调用[BindAxb](https://help.aliyun.com/zh/pnp/developer-reference/api-dyplsapi-2017-05-25-bindaxb?spm=a2c4g.11186623.0.0.6a807e38uud6C5)等号码绑定接口时查看返回参数中的**SecretNo**。
     * @example `139****0000`
     */
    "SecretNo": string;
}
