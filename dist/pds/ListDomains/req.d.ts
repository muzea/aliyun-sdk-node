export interface ListDomainsRequest {
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 父 domain id
         * @example `bj1`
         */
        parent_domain_id: string;
        /**
         * 分页 marker，"" 表示从头开始。该接口会返回 next\_marker，可将 next\_marker 设置该值来遍历所有 domain 信息
         * @example `NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg`
         */
        marker: string;
        /**
         * 本次分页获取的数量，默认 50，不可超过 100
         * @example `60`
         */
        limit: number;
        service_code: string;
    };
}
