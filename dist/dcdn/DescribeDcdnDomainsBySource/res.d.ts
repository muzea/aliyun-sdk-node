export interface DescribeDcdnDomainsBySourceResponse {
    /**
     * 请求ID。
     * @example `F61CDR30-E83C-4FDA-BF73-9A94CDD44229`
     */
    RequestId: string;
    /**
     * 各个源站及对应域名列表信息。
     */
    DomainInfo: {
        /**
         * 域名信息列表。
         */
        DomainList: {
            /**
             * 创建时间。
             * @example `2021-08-21T03:05:20+08:00`
             */
            CreateTime: string;
            /**
             * CNAME。
             * @example `example.org.alikunlun.com`
             */
            DomainCname: string;
            /**
             * 域名状态。取值：
             * - **applying**：审核中
             * - **configuring**：配置中
             * - **online**：正常运行
             * - **stopping**：停止中
             * - **offline**：停止
             * - **disabling**：删除中
             * @example `online`
             */
            Status: string;
            /**
             * 加速域名名称。
             * @example `example.org`
             */
            DomainName: string;
            /**
             * 更新时间。
             * @example `2022-12-01T03:26:55+08:00`
             */
            UpdateTime: string;
            /**
             * 加速域名的业务类型。取值：
             * - **ipa**：四层加速
             * - **dynamic**：七层加速
             * @example `dynamic`
             */
            DomainType: string;
        }[];
        /**
         * 请求的一个源站。
         * @example `example.com`
         */
        Source: string;
    }[];
}
