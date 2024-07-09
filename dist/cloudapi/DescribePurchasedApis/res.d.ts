export interface DescribePurchasedApisResponse {
    /**
     * 当前页的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 本次请求的ID。
     * @example `CE5722A6-AE78-4741-A9B0-6C817D360510`
     */
    RequestId: string;
    /**
     * 每页条目
     * @example `10`
     */
    PageSize: number;
    /**
     * 返回结果的总条数
     * @example `20`
     */
    TotalCount: number;
    PurchasedApis: {
        /**
         * 由purchasedapi组成的数组格式，返回api调用延迟监控信息
         */
        PurchasedApi: {
            /**
             * 可见性，可选值：
             * - **PUBLIC**：公开
             * - **PRIVATE**：私有
             * @example `PUBLIC`
             */
            Visibility: string;
            /**
             * 购买时间
             * @example `2021-06-11T13:57:38+08:00`
             */
            PurchasedTime: string;
            /**
             * API的ID。
             * @example `eb6e54c1576d41149746e8e69b0a0792`
             */
            ApiId: string;
            /**
             * 最后修改时间，格林威治时间
             * @example `2021-06-11T13:57:38+08:00`
             */
            ModifiedTime: string;
            /**
             * API描述
             * @example `test测试`
             */
            Description: string;
            /**
             * API分组名称
             * @example `DMS_DEFAULT_GROUP_408589`
             */
            GroupName: string;
            /**
             * API分组 ID，系统生成，全局唯一
             * @example `3013a55c0c44483f984d26df27120513`
             */
            GroupId: string;
            /**
             * 部署时间，格式为yyyy-mm-ddhh:mm:ss
             * @example `2021-06-1113:57:38`
             */
            DeployedTime: string;
            /**
             * 指定要操作API的环境。
             * - **RELEASE**: 线上
             * - **PRE**: 预发
             * - **TEST**: 测试
             * @example `TEST`
             */
            StageName: string;
            /**
             * API名称
             * @example `gw_rado_tissot_`
             */
            ApiName: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
    };
}
