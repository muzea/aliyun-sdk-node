export interface DescribeAuthorizedApisResponse {
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
    AuthorizedApis: {
        /**
         * 已授权的API集合
         */
        AuthorizedApi: {
            /**
             * 系统自动生成API唯一标识符
             * @example `baacc592e63a4cb6a41920d9d3f91f38`
             */
            ApiId: string;
            /**
             * 授权来源，取值：
             * - **CONSOLE**：控制台
             * - **API**：API
             * @example `CONSOLE`
             */
            AuthorizationSource: string;
            /**
             * 授权有效时间的截止时间，格林威治时间
             * @example `2018-10-05T16:00:00Z`
             */
            AuthVaildTime: string;
            /**
             * 授权说明
             * @example `根据地区名称查询天气情况`
             */
            Description: string;
            /**
             * API分组名称
             * @example `Weather`
             */
            GroupName: string;
            /**
             * API分组ID，系统生成，全局唯一
             * @example `523e8dc7bbe04613b5b1d726c2a7889d`
             */
            GroupId: string;
            /**
             * 授权操作的时间，格林威治时间
             * @example `2016-07-21T06:17:20`
             */
            AuthorizedTime: string;
            /**
             * 授权的人，取值：
             * - **PROVIDER**：API所有者
             * - **CONSUMER**：API调用者
             * @example `PROVIDER`
             */
            Operator: string;
            /**
             * API环境，取值：
             * - **RELEASE**：线上
             * - **TEST**：测试
             * @example `RELEASE`
             */
            StageName: string;
            /**
             * API名称
             * @example `AreaWeather`
             */
            ApiName: string;
            /**
             * API所在区域
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
    };
}
