export interface DescribeParameterGroupsResponse {
    /**
     * 请求ID。
     * @example `686BB8A6-BBA5-47E5-8A75-D2ADE433****`
     */
    RequestId: string;
    /**
     * 参数模版列表。
     */
    ParameterGroups: {
        /**
         * 引擎兼容版本。
         * @example `5`
         */
        EngineVersion: string;
        /**
         * 参数模板的最近修改时间。
         * @example `2023-04-18 16:32:45`
         */
        Modified: string;
        /**
         * 参数模版名称。
         * @example `testGroupName`
         */
        ParameterGroupName: string;
        /**
         * 参数模版的描述信息。
         * @example `test`
         */
        ParameterGroupDesc: string;
        /**
         * 引擎类型，取值如下：
         * - **redis**：Redis或Tair内存型。
         * - **tair_pena**：Tair持久内存型。
         * - **tair_pdb**：Tair云盘（ESSD）型。
         * @example `tair_pena`
         */
        Engine: string;
        /**
         * 参数模板ID。
         * @example `test01`
         */
        ParamGroupId: string;
        /**
         * 参数模版的创建时间。
         * @example `2023-04-18 16:32:45
        `
         */
        Created: string;
        /**
         * 产品类别，取值：
         * - **0**：社区版
         * - **1**：Tair（Redis企业版）
         * @example `0`
         */
        Category: number;
    }[];
}
