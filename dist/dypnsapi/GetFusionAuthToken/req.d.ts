export interface GetFusionAuthTokenRequest {
    /**
     * 方案Code。
     * @example `FA1000*************201`
     */
    "SchemeCode": string;
    /**
     * Platform为Android时必须传入，App的包名信息。
     * @example `com.example.test`
     */
    "PackageName"?: string;
    /**
     * Platform为Android时必须传入，App的包签名信息。
     * @example `47fcc************************278`
     */
    "PackageSign"?: string;
    /**
     * Platform为iOS时必须传入，App的bundleId信息。
     * @example `com.example.test`
     */
    "BundleId"?: string;
    /**
     * 平台，Android或者iOS。
     * @example `Android`
     */
    "Platform": string;
    /**
     * Token有效时长，单位是秒，最小值900，最大值43200。
     * @example `900`
     */
    "DurationSeconds": number;
}
