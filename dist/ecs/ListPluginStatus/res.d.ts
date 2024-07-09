export interface ListPluginStatusResponse {
    /**
     * 每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 查询结果的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 符合查询条件的记录条数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 本次调用返回的查询凭证值。
     * @example `AAAAAdDWBF2`
     */
    NextToken: string;
    InstancePluginStatusSet: {
        /**
         * 实例插件状态列表。
         */
        InstancePluginStatus: {
            /**
             * 实例ID。
             * @example `i-xxxxx`
             */
            InstanceId: string;
            PluginStatusSet: {
                /**
                 * 插件状态列表。
                 */
                PluginStatus: {
                    /**
                     * 插件版本号。
                     * @example `1.1`
                     */
                    PluginVersion: string;
                    /**
                     * 插件名称。
                     * @example `testName`
                     */
                    PluginName: string;
                    /**
                     * 云助手第一次上报插件状态的时间。
                     * @example `2020-01-19T09:15:46Z`
                     */
                    FirstHeartbeatTime: string;
                    /**
                     * 云助手最近一次上报插件状态的时间。
                     * @example `2020-01-19T09:15:46Z`
                     */
                    LastHeartbeatTime: string;
                    /**
                     * 插件状态。取值范围：
                     * - NotInstalled：插件未安装。
                     * - Installed：一次性插件已安装。
                     * - Running：常驻插件运行中。
                     * - Stopped：常驻插件未运行。
                     * - Crashed：插件状态异常。
                     * - Removed：插件已卸载。
                     * - UnKnown：状态未知。
                     * @example `Running`
                     */
                    PluginStatus: string;
                }[];
            };
        }[];
    };
}
