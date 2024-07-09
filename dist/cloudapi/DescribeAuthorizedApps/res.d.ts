export interface DescribeAuthorizedAppsResponse {
    /**
     * 返回指定的页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID
     * @example `D6E46F10-F26C-4AA0-BB69-FE2743D9AE62`
     */
    RequestId: string;
    /**
     * 返回指定的每页条数
     * @example `10`
     */
    PageSize: number;
    /**
     * 返回结果的总条数
     * @example `2`
     */
    TotalCount: number;
    AuthorizedApps: {
        /**
         * 返回分组集合
         */
        AuthorizedApp: {
            /**
             * 应用名称
             * @example `天气`
             */
            AppName: string;
            /**
             * 授权来源，取值：
             * - **CONSOLE**：控制台
             * - **API**：API
             * @example `CONSOLE`
             */
            AuthorizationSource: string;
            /**
             * 应用名称
             * @example `2018-10-05T16:00:00Z`
             */
            AuthVaildTime: string;
            /**
             * 授权说明
             * @example `根据地区名称查询天气情况`
             */
            Description: string;
            /**
             * 授权操作的时间，格林威治时间
             * @example `2016-07-21T06:17:20Z`
             */
            AuthorizedTime: string;
            /**
             * 编号，系统生成，全局唯一
             * @example `2386789`
             */
            AppId: number;
            /**
             * API的环境。
             * - **RELEASE**: 线上
             * - **PRE**: 预发
             * - **TEST**: 测试
             * @example `RELEASE`
             */
            StageName: string;
            /**
             * 环境别名
             * @example `线上`
             */
            StageAlias: string;
            /**
             * 授权的人，取值：
             * - **PROVIDER**：API所有者
             * - **CONSUMER**：API调用者
             * @example `PROVIDER`
             */
            Operator: string;
            /**
             * 应用描述信息
             * @example `生产应用`
             */
            AppDescription: string;
            Tag: {
                TagInfo: {
                    Key: string;
                    Value: string;
                }[];
            };
        }[];
    };
}
