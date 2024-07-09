export interface GetResourcePackagePriceRequest {
    /**
     * 产品代码，可通过接口**QueryProductList**查询产品代码，或查看**阿里云产品Code速查手册**。
     * @example `ossbag`
     */
    "ProductCode": string;
    /**
     * 资源包类型。值与**描述资源包接口**返回的**ResourcePackage**的Code值相等。
     * @example `FPT_ossbag_periodMonthlyAcc_NetworkOut_finance_common`
     */
    "PackageType": string;
    /**
     * 资源包生效时间，不填默认立即生效。
     * 订单类型为**购买**时，不支持询价**生效时间大于当前时间六个月**的资源包。
     * 订单类型为**升级**时，生效时间**必须小于等于**升级的资源包实际到期时间。
     * 日期格式按照ISO8601标准表示，并需要使用UTC时间。格式为：yyyy-MM-ddTHH:mm:ssZ。
     * @example `2020-02-10T12:00:00Z`
     */
    "EffectiveDate"?: string;
    /**
     * 资源包规格大小。
     * @example `500`
     */
    "Specification": string;
    /**
     * 资源包时长。值与规格大小的可用时长相符。
     * @example `6`
     */
    "Duration": number;
    /**
     * 资源包时长单位。取值：
     * - Month：月。
     * - Year：年。
     * @example `Month`
     */
    "PricingCycle"?: string;
    /**
     * 订单类型，取值：
     * - BUY：新购。
     * - UPGRADE：升级。
     * - RENEW：续费。
     * 默认值BUY。
     * @example `BUY`
     */
    "OrderType"?: string;
    /**
     * 用户实例ID。**订单类型为续费、升级时，必填。**
     * @example `OSSBAG-cn-0xl0002`
     */
    "InstanceId"?: string;
}
