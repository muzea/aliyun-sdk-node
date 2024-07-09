export interface CreateRetcodeAppRequest {
    /**
     * 前端监控应用名称。
     * @example `SdkTest`
     */
    "RetcodeAppName": string;
    /**
     * 前端监控应用类型，包括：
     * - `web`：Web页面
     * - `weex`：Weex页面
     * - `mini_dd`：钉钉小程序
     * - `mini_alipay`：支付宝小程序
     * - `mini_wx`：微信小程序
     * - `mini_common`：其他小程序
     * @example `mini_dd`
     */
    "RetcodeAppType": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源组ID，您可以通过**资源管理**控制台获取。
     * @example `rg-acfmxyexli2****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签。
     */
    "Tags"?: {
        /**
         * 标签的键（key）。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签的值（value）。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
