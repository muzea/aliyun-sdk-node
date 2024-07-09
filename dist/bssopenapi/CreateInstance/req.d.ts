export interface CreateInstanceRequest {
    /**
     * 产品代码。可通过接口**QueryProductList**查询产品代码
     * @example `Cdn`
     */
    "ProductCode": string;
    /**
     * 产品类型。
     * @example `Cdn`
     */
    "ProductType"?: string;
    /**
     * 付费类型，取值：
     * - Subscription：预付费。
     * - PayAsYouGo：后付费。
     * @example `Subscription`
     */
    "SubscriptionType": string;
    /**
     * 预付费周期。单位为月，按年付费产品请输入12的整数倍。
     * > 当创建预付费实例时，必须设置。
     * @example `12`
     */
    "Period"?: number;
    /**
     * 自动续费状态，取值：
     * - AutoRenewal：自动续费。
     * - ManualRenewal：手动续费。
     * 默认ManualRenewal。
     * @example `ManualRenewal`
     */
    "RenewalStatus"?: string;
    /**
     * 自动续费周期， 单位为月。
     * > 当设置**RenewalStatus**为**AutoRenewal**时，必须设置。
     * @example `12`
     */
    "RenewPeriod"?: number;
    /**
     * 客户端幂等参数，服务端会查询是否有相同ClientToken的请求，如果有，直接返回上次调用结果。
     * @example `JASIOFKVNVIXXXXXX`
     */
    "ClientToken"?: string;
    /**
     * 本次订单的物流信息地址，一般对实物类订单有效
     * @example `{"cityCode":"330100","cityName":"杭州","contactName":"测试","countryCode":"","districtName":"浦沿街道","email":"**@example.com","mobilePhone":"153564848844","phone":"1234567","provCode":"330000","provName":"浙江省","streetCode":"33010610","streetName":"转塘","zipCode":"0000"}`
     */
    "Logistics"?: string;
    /**
     * 模块列表
     */
    "Parameter"?: {
        /**
         * 第n个模块属性value配置，n的取值范围为（1~100）。
         * @example `disk`
         */
        Value: string;
        /**
         * 第n个模块属性code配置，n的取值范围为（1~100），如有多个模块属性参数，按照n=1,2,3…n的形式拼接多个参数。
         * @example `InstanceType`
         */
        Code: string;
    }[];
}
