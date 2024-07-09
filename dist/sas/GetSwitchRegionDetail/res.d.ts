export interface GetSwitchRegionDetailResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 是否同意迁移。
         * @example `true`
         */
        IsAgree: string;
        /**
         * 授权操作修改的时间。
         * @example `1692858597000`
         */
        GmtIsAgreeModified: number;
        /**
         * 是否已经通知。
         * @example `YES`
         */
        IsNoticed: string;
        /**
         * 通知时间。
         * @example `1692858597000`
         */
        GmtNoticed: number;
        /**
         * region的切换状态。
         */
        RegionStatus: {
            /**
             * ECS数量。
             * @example `27`
             */
            EcsCount: number;
            /**
             * 服务器所在的地域。
             * @example `us-east-1`
             */
            RegionId: string;
            /**
             * 迁移的状态。取值：
             * - **0**：等待迁移
             * - **1**：切换成功
             * @example `0`
             */
            Status: number;
            /**
             * 计划迁移的时间。
             * @example `1692858597000`
             */
            GmtPlanSwitchTime: number;
        }[];
    };
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `30CBF632-109F-596F-97F2-451C8B2A****`
     */
    RequestId: string;
}
