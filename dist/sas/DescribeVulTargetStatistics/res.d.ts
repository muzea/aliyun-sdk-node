export interface DescribeVulTargetStatisticsResponse {
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 本次请求的ID。
     * @example `23AD0BD2-8771-5647-819E-6BA51E212F80`
     */
    RequestId: string;
    /**
     * 分页查询时，每页最多显示的数据条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 查询结果的总数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 漏洞配置的统计结果。
     */
    TargetStats: {
        /**
         * 要查询的漏洞类型。取值：
         * - cve：Linux漏洞
         * - sys：Windows漏洞
         * - cms：WebCMS漏洞
         * - emg：应急漏洞
         * @example `cve`
         */
        VulType: string;
        /**
         * 查询到的资产总数量。
         * @example `1`
         */
        TotalCount: number;
        /**
         * 配置生效的服务器的数量。
         * @example `1`
         */
        UuidCount: number;
        /**
         * 资产的目标服务器列表。
         */
        Targets: {
            /**
             * 配置生效类型。取值：
             * - **add**：对机器生效
             * - **del**：不对该机器生效
             * @example `add`
             */
            Flag: string;
            /**
             * 配置生效的资产的分组ID或者UUID。
             * @example `0011ea53-738c-4bff-93be-ce6a1cc9****`
             */
            Target: string;
            /**
             * 目标类型。取值：
             * - **uuid**：资产。
             * - **groupId**：服务器分组。
             * @example `uuid`
             */
            TargetType: string;
        }[];
    }[];
}
