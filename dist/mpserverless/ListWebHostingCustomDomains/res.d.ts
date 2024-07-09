export interface ListWebHostingCustomDomainsResponse {
    /**
     * 唯一请求ID。
     * @example `93FC5921-2A54-408B-B360-2E5C93488CF4`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 域名状态。
         * - online：正常运行。
         * - offline：已停用。
         * - configuring：配置中。
         * - configure_failed：配置失败。
         * - disabling：停用中。
         * - checking：审核中。
         * - check_failed：审核失败。
         * @example `online`
         */
        Status: string;
        /**
         * 域名。
         * @example `www.test.com`
         */
        Domain: string;
        /**
         * 修改时间。
         * @example `1590470646143`
         */
        UpdateTime: number;
        /**
         * HTTPS开启状态。
         * - on：开启。
         * - off：关闭。
         * @example `off`
         */
        SslProtocol: string;
        /**
         * 可选参数为：
         * - HTTPS_FORCE: 强制跳转HTTPS。
         * - OFF：不跳转。
         * @example `HTTPS_FORCE`
         */
        ForceRedirectType: string;
        /**
         * 域名描述。
         * @example `测试域名`
         */
        Description: string;
        /**
         * 创建时间。
         * @example `1590470646000`
         */
        CreateTime: number;
        /**
         * 别名记录值。
         * @example `www.test.com.w.kunlungr.com`
         */
        Cname: string;
        /**
         * 当前是否开启跨域
         * @example `true`
         */
        EnableCors: boolean;
        /**
         * 跨域规则
         * @example `https://*.example.com, https://*.example.org`
         */
        AccessControlAllowOrigin: string;
        /**
         * 当开启跨域检查后，是否检查Origin字段。
         * - true: 只有在校验通过后才会返回跨域头；
         * - false: 不检查Origin字段，固定返回配置的跨域头；
         * @example `true`
         */
        AccessOriginControl: boolean;
    }[];
}
