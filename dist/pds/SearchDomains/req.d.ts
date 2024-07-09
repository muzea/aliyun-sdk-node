export interface SearchDomainsRequest {
    /**
     * 请求body
     */
    "body"?: {
        /**
         * 要搜索的 domain 名称，支持模糊搜索
         * @example `你好网盘`
         */
        name: string;
        /**
         * 设定结果从marker之后按字母排序的第一个开始返回。如果不设定，则从头开始返回数据。
         * <br>默认值：无
         * @example `NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg`
         */
        marker: string;
        /**
         * 限定此次返回资源的数量，取值范围\[0,100\]，默认100
         * 返回结果可以小于指定的数量，但不能多于指定的数量。
         * @example `50`
         */
        limit: number;
        /**
         * 排序规则，当前仅支持：
         * created_at，创建时间
         * @example `created_at`
         */
        order_by: string;
    };
}
