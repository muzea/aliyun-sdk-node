export interface DescribeSummaryResponse {
    /**
     * 请求id。
     * @example `DE78056B-E82A-52FD-BF5E-F737D8B63845`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `True`
     */
    Success: boolean;
    /**
     * 受保护服务器总数量
     * @example `2`
     */
    ServerCount: number;
    /**
     * 站点对总数量
     * @example `10`
     */
    TotalSize: number;
    /**
     * 状态码
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * -
     * @example `-`
     */
    DbServerCount: number;
    /**
     * 站点数量
     * @example `4`
     */
    SiteCount: number;
    /**
     * 复制状态统计信息
     */
    ReplicationDetails: {
        WarningServers: {
            /**
             * 处于警告状态的受保护服务器信息
             */
            warningServer: {
                /**
                 * 受保护服务器ID
                 * @example `sr-000fzufp79icz33l4pak`
                 */
                ServerId: string;
                /**
                 * 受保护服务器实例ID
                 * @example `i-bp1a4374akk4527gbt9x`
                 */
                InstanceId: string;
                /**
                 * 受保护服务器站点对ID
                 * @example `s-000bzkmmlwh5riquud19`
                 */
                SitePairId: string;
                /**
                 * RPO
                 * @example `30`
                 */
                Rpo: number;
                /**
                 * 状态
                 * @example `replicating`
                 */
                Status: string;
                /**
                 * 连接状态
                 * @example `connected`
                 */
                ConnectionStatus: string;
            }[];
        };
        CriticalServers: {
            /**
             * 处于危险状态的受保护服务器信息
             */
            criticalServer: {
                /**
                 * 受保护服务器ID
                 * @example `sr-0005qxusucb0fqqdf4ba`
                 */
                ServerId: string;
                /**
                 * 受保护服务器实例ID
                 * @example `i-bp1a4374akk4527gbt9x`
                 */
                InstanceId: string;
                /**
                 * 受保护服务器站点对ID
                 * @example `s-0005qxusucbii3ba2uve`
                 */
                SitePairId: string;
                /**
                 * RPO
                 * @example `30`
                 */
                Rpo: number;
                /**
                 * 状态
                 * @example `replicating`
                 */
                Status: string;
                /**
                 * 连接状态
                 * @example `connected`
                 */
                ConnectionStatus: string;
            }[];
        };
        NotApplicableServers: {
            /**
             * 处于非复制状态的受保护服务器信息
             */
            notApplicableServer: {
                /**
                 * 受保护服务器ID
                 * @example `sr-000iji78mxxc93yldd2e`
                 */
                ServerId: string;
                /**
                 * 受保护服务器实例ID
                 * @example `i-bp1a4374akk4527gbt9x`
                 */
                InstanceId: string;
                /**
                 * 受保护服务器站点对ID
                 * @example `s-000bzkmmlwh5riquud19`
                 */
                SitePairId: string;
                /**
                 * RPO
                 * @example `40`
                 */
                Rpo: number;
                /**
                 * 状态
                 * @example `replicating`
                 */
                Status: string;
                /**
                 * 连接状态
                 * @example `connected`
                 */
                ConnectionStatus: string;
            }[];
        };
    };
}
