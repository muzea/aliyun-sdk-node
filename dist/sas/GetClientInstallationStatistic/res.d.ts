export interface GetClientInstallationStatisticResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `F62DD457-2588-589A-B1F6-A1245895D2AB`
     */
    RequestId: string;
    /**
     * 客户端安装率统计数据。
     */
    ClientInstallRatio: {
        /**
         * 历史客户端安装率统计数据列表。
         */
        HistoryItems: {
            /**
             * 资产厂商。取值：
             * - **0**：阿里云资产
             * - **1**：云外资产
             * - **2**：IDC资产
             * - **3**、**4**、**5**、**7**：其它云资产
             * - **8**：轻量级资产
             * @example `4`
             */
            Vendor: number;
            /**
             * 客户端安装率统计数据列表。
             */
            Items: {
                /**
                 * 计算时间戳。单位：毫秒。
                 * @example `1687759630045`
                 */
                CalculateTime: number;
                /**
                 * 资产总数。
                 * @example `100`
                 */
                AssetTotalCount: number;
                /**
                 * 安装比率。单位：%。
                 * @example `80.00`
                 */
                InstallRatio: number;
                /**
                 * 已安装资产数。
                 * @example `80`
                 */
                InstalledAssetCount: number;
            }[];
        }[];
        /**
         * 当前客户端安装率统计数据列表。
         */
        CurrentItems: {
            /**
             * 资产厂商。取值：
             * - **0**：阿里云资产
             * - **1**：云外资产
             * - **2**：IDC资产
             * - **3**、**4**、**5**、**7**：其它云资产
             * - **8**：轻量级资产
             * @example `7`
             */
            Vendor: number;
            /**
             * 当前客户端安装率统计数据列表。
             */
            Items: {
                /**
                 * 计算时间戳。单位：毫秒。
                 * @example `1687759630045`
                 */
                CalculateTime: number;
                /**
                 * 资产总数。
                 * @example `100`
                 */
                AssetTotalCount: number;
                /**
                 * 安装比率。单位：%。
                 * @example `70.00`
                 */
                InstallRatio: number;
                /**
                 * 已安装客户端资产数。
                 * @example `70`
                 */
                InstalledAssetCount: number;
            }[];
        }[];
        /**
         * 统计时间列表。
         */
        Dates: number[];
    };
}
