export interface CreateResourcePackageRequest {
    /**
     * 产品代码，可通过接口**QueryProductList**查询产品代码，或查看**阿里云产品Code速查手册**。
     * @example `ossbag`
     */
    "ProductCode": string;
    /**
     * 资源包类型。值与**描述资源包**返回的**ResourcePackage**的Code值相等。
     * @example `FPT_ossbag_absolute_Storage_sh`
     */
    "PackageType": string;
    /**
     * 资源包生效时间，不填默认立即生效。
     * 日期格式按照ISO8601标准表示，并需要使用UTC时间。格式为：yyyy-MM-ddTHH:mm:ssZ。
     * @example `2020-03-03T12:00:00Z`
     */
    "EffectiveDate"?: string;
    /**
     * 资源包规格大小。值与**描述资源包**返回的**Specification**的value值相等。
     * @example `40`
     */
    "Specification": string;
    /**
     * 资源包时长。
     * @example `6`
     */
    "Duration": number;
    /**
     * 资源包时长单位，取值：
     * - Month：月。
     * - Year：年。
     * 默认值Month。
     * @example `Month`
     */
    "PricingCycle"?: string;
}
