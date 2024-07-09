export interface DescribeWebCacheConfigsResponse {
    /**
     * 本次请求的ID。
     * @example `6623EA1F-30FB-5BC8-BEC9-74D55F6F08F1`
     */
    RequestId: string;
    /**
     * 静态页面缓存的配置信息。
     */
    DomainCacheConfigs: {
        /**
         * 网站域名。
         * @example `www.aliyundoc.com`
         */
        Domain: string;
        /**
         * 缓存模式。取值：
         * - **standard**：表示标准模式。
         * - **aggressive**：表示强力模式。
         * - **bypass**：表示不缓存。
         * @example `bypass`
         */
        Mode: string;
        /**
         * 开关状态。取值：
         * - **1**：表示开启。
         * - **0**：表示关闭。
         * @example `1`
         */
        Enable: number;
        /**
         * 自定义缓存规则配置。
         */
        CustomRules: {
            /**
             * 缓存模式。取值：
             * - **standard**：表示标准模式。
             * - **aggressive**：表示强力模式。
             * - **bypass**：表示不缓存。
             * @example `standard`
             */
            Mode: string;
            /**
             * 页面缓存的过期时间。单位：秒。
             * @example `86400`
             */
            CacheTtl: number;
            /**
             * 规则名称。
             * @example `c1`
             */
            Name: string;
            /**
             * 缓存页面的路径。
             * @example `/blog/`
             */
            Uri: string;
        }[];
    }[];
}
