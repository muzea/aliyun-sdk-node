export interface DescribeApisResponse {
    /**
     * 返回指定的页码
     * @example `3`
     */
    PageNumber: number;
    /**
     * 请求ID
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BZ002`
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
    ApiSummarys: {
        /**
         * 由 ApiSummary 组成的数组格式，返回API的定义信息
         */
        ApiSummary: {
            /**
             * 可见性，可选值：
             * - **PUBLIC**：公开
             * - **PRIVATE**：私有
             * @example `PUBLIC`
             */
            Visibility: string;
            /**
             * API编号
             * @example `5af418828f0344a3b588c0cc1331a3bc`
             */
            ApiId: string;
            /**
             * 修改时间（格林威治时间）
             * @example `2016-07-23T08:28:48Z`
             */
            ModifiedTime: string;
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
             * 创建时间（格林威治时间）
             * @example `2016-05-20T18:18:25Z`
             */
            CreatedTime: string;
            /**
             * API名称
             * @example `创建对象`
             */
            ApiName: string;
            /**
             * API所在地域ID
             * @example `cn-qingdao`
             */
            RegionId: string;
            /**
             * api的路径
             * @example `/sqb/`
             */
            ApiPath: string;
            /**
             * api的请求方法
             * @example `GET`
             */
            ApiMethod: string;
            DeployedInfos: {
                /**
                 * API发布状态
                 */
                DeployedInfo: {
                    /**
                     * 环境名称：
                     * - **RELEASE**: 线上
                     * - **PRE**：预发
                     * - **TEST**: 测试
                     * @example `RELEASE`
                     */
                    StageName: string;
                    /**
                     * 已部署的版本
                     * @example `20220103170737313`
                     */
                    EffectiveVersion: string;
                    /**
                     * 部署状态，取值为：DEPLOYED、NONDEPLOYED，分别表示已部署、未部署
                     * @example `DEPLOYED`
                     */
                    DeployedStatus: string;
                }[];
            };
            TagList: {
                /**
                 * 标签信息
                 */
                Tag: {
                    /**
                     * 标签键
                     * @example `tagKey`
                     */
                    TagKey: string;
                    /**
                     * 标签值
                     * @example `tagValue`
                     */
                    TagValue: string;
                }[];
            };
        }[];
    };
}
