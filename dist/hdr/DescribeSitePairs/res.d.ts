export interface DescribeSitePairsResponse {
    /**
     * 请求ID
     * @example `24CFBF97-EAD7-5D53-8D50-7F9E9D20C3A3`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `True`
     */
    Success: boolean;
    /**
     * 状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 分页查询时设置的每页行数，默认值为10。
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前页码。
     * @example `5`
     */
    PageNumber: number;
    /**
     * 总数量。
     * @example `28`
     */
    TotalCount: number;
    SitePairs: {
        /**
         * 站点对信息
         */
        sitePair: {
            /**
             * 站点对类型
             * @example `cloud2cloud`
             */
            SitePairType: string;
            /**
             * 本地站点名称
             * @example `local-site`
             */
            LocalSiteName: string;
            /**
             * 从站ID
             * @example `si-0007nrkb2riv9yalg8s8`
             */
            SecondarySiteId: string;
            /**
             * 主站ID
             * @example `si-000as7kbj0cmlp3tt60m`
             */
            PrimarySiteId: string;
            /**
             * 网关版本号
             * @example `3.7.3`
             */
            Version: string;
            /**
             * 受保护服务器数量
             * @example `14`
             */
            ServerCount: number;
            /**
             * 云上站点名称
             * @example `cloud-site`
             */
            CloudSiteName: string;
            /**
             * 站点对ID
             * @example `s-0003obqyc8f8lx2pf6m9`
             */
            SitePairId: string;
            /**
             * 从站名称
             * @example `SH`
             */
            SecondarySiteName: string;
            /**
             * 主站名称
             * @example `HZ`
             */
            PrimarySiteName: string;
            /**
             * 创建时间
             * @example `1636092147`
             */
            CreatedTime: number;
            /**
             * 复制状态统计
             */
            ReplicationStatistics: {
                /**
                 * 处于健康状态（全量复制、实时复制）的受保护服务器数量。
                 * @example `4`
                 */
                Healthy: number;
                /**
                 * 处于警告状态（RPO超过20分钟、暂时断开连接等）的受保护服务器数量
                 * @example `0`
                 */
                Warning: number;
                /**
                 * 处于危险状态（复制失败等）的受保护服务器数量
                 * @example `0`
                 */
                Critical: number;
                /**
                 * 处于其他状态的受保护服务器数量
                 * @example `0`
                 */
                NotApplicable: number;
            };
        }[];
    };
}
