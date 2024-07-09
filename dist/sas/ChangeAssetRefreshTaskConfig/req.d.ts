export interface ChangeAssetRefreshTaskConfigRequest {
    /**
     * 资产刷新配置列表。
     */
    "AssetRefreshConfigs"?: {
        /**
         * 云资产厂商。取值：
         * - **3**：腾讯云
         * - **4**：华为云
         * - **7**：亚马逊云
         * @example `3`
         */
        Vendor: number;
        /**
         * 同步周期。取值：
         *  - **60**：60分钟
         *  - **180**：3小时
         *  - **360**：6小时
         *  - **720**：12小时
         *  - **1440**：1天
         *  - **10080**：7天
         * @example `360`
         */
        SchedulePeriod: number;
        /**
         * 配置开启状态。取值：
         *  - **1**：开启
         * - **0**：关闭
         * @example `1`
         */
        Status: number;
        /**
         * 配置类型。取值：
         * - **0**：主机刷新任务
         * - **1**：云产品刷新任务
         * - **2**：AK定时校验任务
         * @example `2`
         */
        RefreshConfigType: number;
        /**
         * 配置AK定时校验任务时，指定的AK记录的ID。
         * @example `2308`
         */
        TargetId: number;
    }[];
    /**
     * 云安全中心实例地域。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
