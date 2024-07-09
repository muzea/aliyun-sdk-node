export interface DescribeHistoryApisResponse {
    /**
     * 返回指定的页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `6C87A26A-6A18-4B8E-8099-705278381A2C`
     */
    RequestId: string;
    /**
     * 指定分页查询时每页行数，最大值50，默认值为10
     * @example `10`
     */
    PageSize: number;
    /**
     * 返回结果的总条数
     * @example `20`
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
             * API的ID。
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
             * API分组ID
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
             * 环境别名
             * @example `线上`
             */
            StageAlias: string;
            /**
             * API定义的历史版本
             * @example `20210915101416294`
             */
            HistoryVersion: string;
            /**
             * API名称
             * @example `v2_role_assign`
             */
            ApiName: string;
            /**
             * 地域ID
             * @example `cn-qingdao`
             */
            RegionId: string;
        }[];
    };
}
