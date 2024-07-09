export interface GetClientRatioStatisticResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `A4EB8B1C-1DEC-5E18-BCD0-D1BBB3936FA7`
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
             * 云资产厂商。取值：
             * - **0**：阿里云资产
             * - **1**：云外资产
             * - **2**：IDC资产
             * - **3**、**4**、**5**、**7**：其它云资产
             * - **8**：轻量应用服务器
             * @example `3`
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
                 * 已安装客户端资产数。
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
             * 服务器厂商。取值：
             * - **0**：阿里云资产
             * - **1**：云外资产
             * - **2**：IDC资产
             * - **3**、**4**、**5**、**7**：其它云资产
             * - **8**：轻量级资产
             * @example `0`
             */
            Vendor: number;
            /**
             * 厂商客户端安装率统计数据列表。
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
    };
    /**
     * 客户端在线率统计数据。
     */
    ClientOnlineRatio: {
        /**
         * 历史客户端在线率统计数据列表。
         */
        HistoryItems: {
            /**
             * 服务器厂商。取值：
             * - **0**：阿里云资产
             * - **1**：云外资产
             * - **2**：IDC资产
             * - **3**、**4**、**5**、**7**：其它云资产
             * - **8**：轻量级资产
             * @example `7`
             */
            Vendor: number;
            /**
             * 厂商历史客户端在线率统计列表。
             */
            Items: {
                /**
                 * 计算时间戳。单位：毫秒。
                 * @example `1687759630045`
                 */
                CalculateTime: number;
                /**
                 * 已安装客户端资产数。
                 * @example `50`
                 */
                AssetInstallCount: number;
                /**
                 * 在线比率。单位：%。
                 * @example `40.00`
                 */
                OnlineRatio: number;
                /**
                 * 在线资产数。
                 * @example `20`
                 */
                OnlineAssetCount: number;
            }[];
        }[];
        /**
         * 当前客户端在线率统计数据列表。
         */
        CurrentItems: {
            /**
             * 云资产厂商。取值：
             * - **0**：阿里云资产
             * - **1**：云外资产
             * - **2**：IDC资产
             * - **3**、**4**、**5**、**7**：其它云资产
             * - **8**：轻量应用服务器
             * @example `3`
             */
            Vendor: number;
            /**
             * 厂商当前客户端在线率统计列表。
             */
            Items: {
                /**
                 * 计算时间戳。单位：毫秒。
                 * @example `1687759630045`
                 */
                CalculateTime: number;
                /**
                 * 已安装客户端资产数。
                 * @example `50`
                 */
                AssetInstallCount: number;
                /**
                 * 在线比率。单位：%。
                 * @example `20.00`
                 */
                OnlineRatio: number;
                /**
                 * 在线资产数。
                 * @example `10`
                 */
                OnlineAssetCount: number;
            }[];
        }[];
    };
    /**
     * 统计时间列表。
     */
    Dates: number[];
}
