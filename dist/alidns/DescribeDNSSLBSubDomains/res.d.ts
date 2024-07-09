export interface DescribeDNSSLBSubDomainsResponse {
    /**
     * 域名分组数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页查询时设置的每页行数，最大值**100**，默认为**20**。
     * @example `1`
     */
    PageSize: number;
    /**
     * 唯一请求识别码。
     * @example `536E9CAD-DB30-4647-AC87-AA5CC38C5382`
     */
    RequestId: string;
    /**
     * 当前页数，起始值为**1**，默认为**1**。
     * @example `1`
     */
    PageNumber: number;
    SlbSubDomains: {
        /**
         * 权重配置子域名列表。
         */
        SlbSubDomain: {
            /**
             * 描述：支持设置权重配置的记录类型，取值为：A、AAAA、CNAME。
             * @example `A`
             */
            Type: string;
            /**
             * 解析记录数量。
             * @example `3`
             */
            RecordCount: number;
            /**
             * 权重配置的状态。
             * @example `true`
             */
            Open: boolean;
            /**
             * 子域名名称。
             * @example `test.dns-example.top
            `
             */
            SubDomain: string;
            LineAlgorithms: {
                /**
                 * 权重线路列表。
                 */
                LineAlgorithm: {
                    /**
                     * 指解析线路，如电信、移动、联通等。
                     * @example `default`
                     */
                    Line: string;
                    /**
                     * 是否开启权重配置。取值：
                     * - **true**（默认）：开启
                     * - **false**：关闭
                     * @example `true`
                     */
                    Open: boolean;
                }[];
            };
        }[];
    };
}
