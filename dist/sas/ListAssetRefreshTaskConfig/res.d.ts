export interface ListAssetRefreshTaskConfigResponse {
    /**
     * 资产刷新配置。
     */
    AssetRefreshConfig: {
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
         * @example `1`
         */
        RefreshConfigType: number;
    }[];
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `D65AADFC-1D20-5A6A-8F6A-9FA53C0DC1F8`
     */
    RequestId: string;
}
