export interface DescribeApiHistoriesResponse {
    /**
     * 返回指定的页码
     * @example `3`
     */
    PageNumber: number;
    /**
     * 请求ID
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BZ003`
     */
    RequestId: string;
    /**
     * 返回指定的每页条数
     * @example `15`
     */
    PageSize: number;
    /**
     * 返回结果的总条数
     * @example `32`
     */
    TotalCount: number;
    ApiHisItems: {
        /**
         * 由 ApiHisItem 组成的数组格式，返回API的信息
         */
        ApiHisItem: {
            /**
             * 对应版本的API是否生效，取值为：**ONLINE**、**OFFLINE**，分别表示有效、无效。
             * @example `ONLINE`
             */
            Status: string;
            /**
             * API编号
             * @example `5af418828f0344a3b588c0cc1331a3bc`
             */
            ApiId: string;
            /**
             * API描述
             * @example `创建对象接口`
             */
            Description: string;
            /**
             * API分组名称
             * @example `myGroup2`
             */
            GroupName: string;
            /**
             * API分组编号
             * @example `1084f9034c744137901057206b39d2b6`
             */
            GroupId: string;
            /**
             * 发布时间(格林威治时间)
             * @example `2016-07-20T08:28:48Z`
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
             * API定义的历史版本
             * @example `20160705104552393`
             */
            HistoryVersion: string;
            /**
             * API名称
             * @example `创建对象`
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
