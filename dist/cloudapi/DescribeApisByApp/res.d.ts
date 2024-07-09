export interface DescribeApisByAppResponse {
    /**
     * 当前页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BZ015`
     */
    RequestId: string;
    /**
     * 每页条目
     * @example `10`
     */
    PageSize: number;
    /**
     * 总条目数
     * @example `2`
     */
    TotalCount: number;
    AppApiRelationInfos: {
        /**
         * API授权信息
         */
        AppApiRelationInfo: {
            /**
             * API的ID
             * @example `c625795a1e664782a918eaa629e96ab5`
             */
            ApiId: string;
            /**
             * 授权来源
             * @example `SELF`
             */
            AuthorizationSource: string;
            /**
             * 授权有效时间
             * @example `Sun, 02 Jan 2022 16:00:00 GMT`
             */
            AuthVaildTime: string;
            /**
             * 描述
             * @example `b1008kz`
             */
            Description: string;
            /**
             * 分组名称
             * @example `wb2022012101605749`
             */
            GroupName: string;
            /**
             * 分组ID
             * @example `38bed48d664149e4b9b5ea576319673f`
             */
            GroupId: string;
            /**
             * 授权的人，取值：
             * - **PROVIDER**：API所有者
             * - **CONSUMER**：API调用者
             * @example `PROVIDER`
             */
            Operator: string;
            /**
             * 环境名称
             * @example `RELEASE`
             */
            StageName: string;
            /**
             * 环境别名
             * @example `线上`
             */
            StageAlias: string;
            /**
             * 授权时间
             * @example `Sun, 02 Jan 2022 16:00:00 GMT`
             */
            CreatedTime: string;
            /**
             * API名称
             * @example `sd2_h5_player_history_competition`
             */
            ApiName: string;
            /**
             * 地区ID
             * @example `cn-shanghai`
             */
            RegionId: string;
            /**
             * API的请求路径
             * @example `/api/offline/cacheData`
             */
            Path: string;
            /**
             * API的请求HTTP Method
             * @example `GET`
             */
            Method: string;
        }[];
    };
}
