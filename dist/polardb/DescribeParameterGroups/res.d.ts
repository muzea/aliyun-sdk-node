export interface DescribeParameterGroupsResponse {
    /**
     * 请求ID。
     * @example `944CED46-A6F7-40C6-B6DC-C6E5CC******`
     */
    RequestId: string;
    /**
     * 参数模板列表。
     */
    ParameterGroups: {
        /**
         * 数据库引擎类型。
         * @example `MySQL`
         */
        DBType: string;
        /**
         * 数据库引擎版本号。
         * @example `8.0`
         */
        DBVersion: string;
        /**
         * 参数模板名称。
         * @example `test`
         */
        ParameterGroupName: string;
        /**
         * 应用该参数模板是否需要重启集群，取直范围如下：
         * * **0**：不需要重启
         * * **1**：需要重启
         * @example `1`
         */
        ForceRestart: string;
        /**
         * 参数模板类型，取值范围如下：
         * * **0**：系统默认模板
         * * **1**：用户自定义模板
         * * **2**：系统自动备份模板（应用模板后系统会自动备份之前的参数设置为模板）
         * @example `1`
         */
        ParameterGroupType: string;
        /**
         * 参数模板内的参数数量。
         * @example `2`
         */
        ParameterCounts: number;
        /**
         * 参数模板描述。
         * @example `testgroup`
         */
        ParameterGroupDesc: string;
        /**
         * 参数模板创建时间，格式为`yyyy-MM-ddTHH:mm:ssZ`（UTC时间）。
         * @example `2023-03-10T08:40:39Z`
         */
        CreateTime: string;
        /**
         * 参数模板ID。
         * @example `pcpg-**************`
         */
        ParameterGroupId: string;
    }[];
}
