export interface DescribePluginApisResponse {
    /**
     * 返回指定的页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID
     * @example `F9C5C4A5-BC6C-57A3-839F-AB08********`
     */
    RequestId: string;
    /**
     * 分页参数：每页显示条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 返回结果总数
     * @example `7`
     */
    TotalCount: number;
    ApiSummarys: {
        /**
         * API信息集合
         */
        ApiPluginSummary: {
            /**
             * API编号
             * @example `accc8c68b7294b1cb4928741********`
             */
            ApiId: string;
            /**
             * API描述信息
             * @example `API描述信息`
             */
            Description: string;
            /**
             * API所属的分组名称
             * @example `myGroup2`
             */
            GroupName: string;
            /**
             * API分组编号
             * @example `5f51f89261854fd9ad5116be********`
             */
            GroupId: string;
            /**
             * API的请求路径
             * @example `/mqTest`
             */
            Path: string;
            /**
             * API的请求HTTP Method
             * @example `GET`
             */
            Method: string;
            /**
             * 环境名称，可选值：
             * - **RELEASE**：线上
             * - **PRE**：预发
             * - **TEST**：测试
             * @example `RELEASE`
             */
            StageName: string;
            /**
             * API名称
             * @example `fhosQueryDayOfStock_V2`
             */
            ApiName: string;
            /**
             * API所在地域ID
             * @example `cn-shanghai`
             */
            RegionId: string;
            /**
             * 环境别名
             * @example `线上`
             */
            StageAlias: string;
        }[];
    };
}
