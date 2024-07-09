export interface DescribeParameterGroupResponse {
    /**
     * 请求ID。
     * @example `A501A191-BD70-5E50-98A9-C2A486A82****`
     */
    RequestId: string;
    /**
     * 返回参数模板对象。
     */
    ParameterGroup: {
        /**
         * 引擎兼容版本。
         * @example `5.0`
         */
        EngineVersion: string;
        /**
         * 参数模板的最近修改时间。
         * @example `2023-04-18 16:32:45`
         */
        Modified: string;
        /**
         * 参数模板名称。
         * @example `testGroupName`
         */
        ParameterGroupName: string;
        /**
         * 参数模版的描述信息。
         * @example `test`
         */
        ParameterGroupDesc: string;
        /**
         * 参数模本引擎
         * @example `redis`
         */
        Engine: string;
        /**
         * 参数模板ID，全局唯一。
         * @example `sys-001*****`
         */
        ParamGroupId: string;
        /**
         * 参数模板的创建时间。
         * @example `2023-04-18 16:32:45`
         */
        Created: string;
        /**
         * 产品类别，取值：
         * - **0**：社区版
         * - **1**：Tair（Redis企业版）
         * @example `1`
         */
        Category: number;
        /**
         * 参数模板的参数详情。
         */
        ParamGroupsDetails: {
            /**
             * 参数名称。
             * @example `timeout`
             */
            ParamName: string;
            /**
             * 参数值。
             * @example `1000`
             */
            ParamValue: string;
        }[];
    };
}
