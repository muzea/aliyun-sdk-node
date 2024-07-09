export interface DescribeDeployedApisResponse {
    /**
     * 返回指定的页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BZ002`
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
    DeployedApis: {
        /**
         * 由 DeployedApiItem 组成的数组格式，返回API的信息
         */
        DeployedApiItem: {
            /**
             * 可见性，可选值：
             * - **PUBLIC**: 公开
             * - **PRIVATE**: 私有
             * @example `PUBLIC`
             */
            Visibility: string;
            /**
             * API编号
             * @example `c076144d7878437b8f82fb85890ce6a0`
             */
            ApiId: string;
            /**
             * API描述
             * @example `分页显示对象列表`
             */
            Description: string;
            /**
             * API分组名称
             * @example `myGroup3`
             */
            GroupName: string;
            /**
             * API分组编号
             * @example `63be9002440b4778a61122f14c2b2bbb`
             */
            GroupId: string;
            /**
             * 发布时间(格林威治时间)
             * @example `2016-07-23T08:28:48Z`
             */
            DeployedTime: string;
            /**
             * 环境名称，可选值：
             * - **RELEASE**: 线上
             * - **TEST**: 测试
             * @example `RELEASE`
             */
            StageName: string;
            /**
             * API名称
             * @example `获取对象列表`
             */
            ApiName: string;
            /**
             * 所在的region
             * @example `cn-qingdao`
             */
            RegionId: string;
            /**
             * API的请求Path
             * @example `/trademark/search`
             */
            ApiPath: string;
            /**
             * API的请求HTTP方法
             * @example `POST`
             */
            ApiMethod: string;
        }[];
    };
}
