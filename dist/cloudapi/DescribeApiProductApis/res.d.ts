export interface DescribeApiProductApisResponse {
    /**
     * 请求ID
     * @example `03442A3D-3B7D-434C-8A95-A5FEB989B519`
     */
    RequestId: string;
    /**
     * 分页参数：当前页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页参数：每页显示条数
     * @example `10`
     */
    PageSize: number;
    /**
     * 返回结果的总条数
     * @example `4`
     */
    TotalCount: number;
    ApiInfoList: {
        /**
         * 返回的API列表信息
         */
        ApiInfo: {
            /**
             * API的ID
             * @example `dd46297680014a7e8e318308f3345951`
             */
            ApiId: string;
            /**
             * API的描述信息
             * @example `test`
             */
            Description: string;
            /**
             * api分组名称
             * @example `testApiGroup`
             */
            GroupName: string;
            /**
             * api分组ID
             * @example `1e377f18142345dfb700cd8911c2463a`
             */
            GroupId: string;
            /**
             * API的请求路径
             * @example `/test`
             */
            Path: string;
            /**
             * API的请求方法
             * @example `POST`
             */
            Method: string;
            /**
             * API的环境。
             * - **RELEASE**: 线上
             * - **PRE**: 预发
             * - **TEST**: 测试
             * @example `RELEASE`
             */
            StageName: string;
            /**
             * API名称
             * @example `testApi`
             */
            ApiName: string;
            /**
             * 所在的region
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
    };
}
