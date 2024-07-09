export interface ListRetcodeAppsResponse {
    /**
     * 请求ID。
     * @example `99A663CB-8D7B-4B0D-A006-03C8EE38E7BB`
     */
    RequestId: string;
    /**
     * 前端监控应用列表信息。
     */
    RetcodeApps: {
        /**
         * 前端应用名称。
         * @example `A1`
         */
        AppName: string;
        /**
         * 接入的前端类型。
         * - `web`：Web端。
         * - `weex`：Weex端。
         * - `mini_dd`：钉钉E应用。
         * - `mini_alipay`：支付宝小程序。
         * - `mini_wx`：微信小程序。
         * - `mini_common`：其他类型小程序。
         * @example `web`
         */
        RetcodeAppType: string;
        /**
         * 应用ID，数据库自增字段。
         * @example `16064`
         */
        AppId: number;
        /**
         * 应用的ID标识串。
         * @example `atc889zkcf@d8deedfa9bf****`
         */
        Pid: string;
        /**
         * 前端监控应用别名。
         * @example `B1`
         */
        NickName: string;
        /**
         * 资源组ID。
         * @example `rg-acfmxyexli2****`
         */
        ResourceGroupId: string;
        /**
         * 标签。
         */
        Tags: {
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
    }[];
}
