export interface DescribeLiveUserDomainsResponse {
    Domains: {
        /**
         * 返回直播域名的状态信息。
         */
        PageData: {
            /**
             * 直播域名对应的CNAME域名。
             * @example `learn.developer.aliyundoc.com`
             */
            Cname: string;
            /**
             * 备注说明。
             * @example `test`
             */
            Description: string;
            /**
             * 直播推流域名或播流域名。
             * @example `demo.aliyundoc.com`
             */
            DomainName: string;
            /**
             * 直播域名创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2017-08-29T12:15:36Z`
             */
            GmtCreated: string;
            /**
             * 直播域名修改时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2017-12-29T12:15:36Z`
             */
            GmtModified: string;
            /**
             * 域名状态。取值：
             * - **online**：运行中（表示域名服务状态正常）。
             * - **offline**：已停止。
             * - **configuring**：配置中。
             * @example `online`
             */
            LiveDomainStatus: string;
            /**
             * 直播域名业务类型。取值：
             * - **liveVideo**：播流域名。
             * - **liveEdge**：边缘推流域名。
             * @example `liveVideo`
             */
            LiveDomainType: string;
            /**
             * 域名所属地域。
             * @example `cn-beijing`
             */
            RegionName: string;
        }[];
    };
    /**
     * 返回数据的当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页大小。
     * @example `100`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `E4EBD2BF-5EB0-4476-8829-9D94E1B15267`
     */
    RequestId: string;
    /**
     * 总条数。
     * @example `1`
     */
    TotalCount: number;
}
