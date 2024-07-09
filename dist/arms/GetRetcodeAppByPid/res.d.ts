export interface GetRetcodeAppByPidResponse {
    /**
     * 请求ID。
     * @example `2983BEF7-4A0D-47A2-94A2-8E9C5E63****`
     */
    RequestId: string;
    /**
     * 前端监控应用返回数据。
     */
    RetcodeApp: {
        /**
         * 前端监控应用名称。
         * @example `testRetcodeAppXXXX`
         */
        AppName: string;
        /**
         * 前端监控应用类型，包括：
         * - `web`：Web页面
         * - `weex`：Weex页面
         * - `mini_dd`：钉钉小程序
         * - `mini_alipay`：支付宝小程序
         * - `mini_wx`：微信小程序
         * - `mini_common`：其他小程序
         * @example `web`
         */
        RetcodeAppType: string;
        /**
         * 应用ID，数据库自增字段。
         * @example `2787XXXX`
         */
        AppId: string;
        /**
         * 应用ID。
         * @example `b590lhguqs@9781be0f44dXXXX`
         */
        Pid: string;
        /**
         * 资源组ID，您可以通过**资源管理**控制台获取。
         * @example `rg-acfmxidtzXXXX`
         */
        ResourceGroupId: string;
        /**
         * 标签。
         */
        Tags: {
            /**
             * 标签的键（key）。
             * @example `testKey`
             */
            Key: string;
            /**
             * 标签的值（value）。
             * @example `testValue`
             */
            Value: string;
        }[];
    };
}
