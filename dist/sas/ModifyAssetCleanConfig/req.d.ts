export interface ModifyAssetCleanConfigRequest {
    /**
     * 资产清理配置的列表信息。
     */
    "AssetCleanConfigs"?: {
        /**
         * 清理的主机类型，取值：
         * · **1**：云外主机
         * @example `1`
         */
        Type: number;
        /**
         * 云外主机自动清理的离线天数，取值：1~30的整数。
         * @example `7`
         */
        CleanDays: number;
        /**
         * 是否开启离线云外主机自动清理。取值：
         * - **0**：否
         * - **1**：是
         * @example `1`
         */
        Status: number;
    }[];
}
