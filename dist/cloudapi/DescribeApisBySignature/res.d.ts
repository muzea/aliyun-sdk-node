export interface DescribeApisBySignatureResponse {
    /**
     * 返回指定的页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BZ004`
     */
    RequestId: string;
    /**
     * 返回指定的每页条数
     * @example `10`
     */
    PageSize: number;
    /**
     * 返回结果的总条数
     * @example `20`
     */
    TotalCount: number;
    ApiInfos: {
        /**
         * 由 ApiInfo 组成的数组格式，返回API的信息项
         */
        ApiInfo: {
            /**
             * 绑定时间
             * @example `2016-07-23T08:28:48Z`
             */
            BoundTime: string;
            /**
             * 可见性，枚举为：
             * - **PUBLIC**: 公开
             * - **PRIVATE**: 私有
             * @example `PUBLIC`
             */
            Visibility: string;
            /**
             * API编号
             * @example `3b81fd160f5645e097cc8855d75a1cf6`
             */
            ApiId: string;
            /**
             * API描述
             * @example `描述`
             */
            Description: string;
            /**
             * API分组名称
             * @example `mygroup`
             */
            GroupName: string;
            /**
             * API分组编号
             * @example `0009db9c828549768a200320714b8930`
             */
            GroupId: string;
            /**
             * 环境名称，枚举为：
             * - **RELEASE**: 线上
             * - **TEST**: 测试
             * @example `TEST`
             */
            StageName: string;
            /**
             * API名称
             * @example `testapi`
             */
            ApiName: string;
            /**
             * 所在的region
             * @example `cn-qingdao`
             */
            RegionId: string;
        }[];
    };
}
