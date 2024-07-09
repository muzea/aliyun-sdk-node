export interface QuerySubscriptionDetailRequest {
    /**
     * 号码池Key。
     * 在号码隐私保护控制台，[号码池管理](https://dyplsnext.console.aliyun.com/number-pool?spm=a2c4g.11186623.0.0.7e6449bbtiHP8m)页面获取**号码池Key**。
     * > 当**ProductType**为空时必填。
     * @example `FC10000012345****`
     */
    "PoolKey"?: string;
    /**
     * 产品类型。取值：
     * - **AXB_170**。
     * - **AXN_170**。
     * - **AXN_95**。
     * - **AXN\_EXTENSION\_REUSE**。
     * > - 适用于原阿里大于客户，阿里云用户可忽略。
     * > - 当**PoolKey**为空时必填。
     * @example `AXB_170`
     */
    "ProductType"?: string;
    /**
     * 绑定关系ID。
     * 请登录号码隐私保护控制台，在[号码管理](https://dyplsnext.console.aliyun.com/number/list)页面筛选号码，点击**详情**查看号码的绑定关系ID，或者在调用[BindAxb](https://help.aliyun.com/zh/pnp/developer-reference/api-dyplsapi-2017-05-25-bindaxb?spm=a2c4g.11186623.0.0.6a807e38uud6C5)等号码绑定API时查看返回参数中的**SubsId**。
     * > 在填写绑定关系ID时，注意填写与**PhoneNoX**参数关联的绑定关系ID。
     * @example `100000076879****`
     */
    "SubsId": string;
    /**
     * 绑定关系中的隐私号码，即X号码。
     * 请登录号码隐私保护控制台，在[号码管理](https://dyplsnext.console.aliyun.com/number/list)页面获取X号码，或者在调用[BindAxb](https://help.aliyun.com/zh/pnp/developer-reference/api-dyplsapi-2017-05-25-bindaxb?spm=a2c4g.11186623.0.0.6a807e38uud6C5)等号码绑定接口时查看返回参数中的**SecretNo**。
     * > 在填写X号码时，注意填写与**SubsId**参数关联的X号码。
     * @example `139****1111`
     */
    "PhoneNoX": string;
}
