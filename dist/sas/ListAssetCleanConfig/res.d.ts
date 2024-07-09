export interface ListAssetCleanConfigResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `20456DD5-5CBF-5015-9173-12CA4246B***`
     */
    RequestId: string;
    /**
     * 清理主机配置列表。
     */
    Data: {
        /**
         * 清理的主机类型，取值：
         * - **1**：云外主机
         * @example `1`
         */
        Type: number;
        /**
         * 云外主机自动清理离线天数，取值范围：1~30的整数。
         * @example `7`
         */
        CleanDays: number;
        /**
         * 配置是否生效。取值：
         * - **0**：无效
         * - **1**：有效
         * @example `1`
         */
        Status: number;
    }[];
    /**
     * 清理配置数量。
     * @example `1`
     */
    Count: number;
}
