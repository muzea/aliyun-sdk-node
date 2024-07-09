export interface DescribeParameterGroupsResponse {
    /**
     * 目标地域是否有参数模板。取值：
     * * true：无参数模板
     * * false：有参数模板
     * ><warning>该参数已废弃，不建议使用。></warning>
     * @example `false`
     */
    SignalForOptimizeParams: boolean;
    /**
     * 请求ID。
     * @example `D4A23265-C5B6-42E1-98A0-EFA1EB42E723`
     */
    RequestId: string;
    ParameterGroups: {
        /**
         * 参数模板列表。
         */
        ParameterGroup: {
            /**
             * 最近一次参数模板更新时间。格式：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
             * @example `2019-11-21T02:21:35Z`
             */
            UpdateTime: string;
            /**
             * 参数模板类型。取值：
             * * 0：系统默认模板
             * * 1：用户自定义模板
             * * 2：系统自动备份模板（应用模板后系统会自动备份之前的参数设置为模板）
             * @example `1`
             */
            ParameterGroupDesc: string;
            /**
             * 参数模板创建时间。格式：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
             * @example `2019-11-21T01:48:39Z`
             */
            CreateTime: string;
            /**
             * 应用该参数模板是否需要重启实例。取值：
             * * 0：不需要重启
             * * 1：需要重启
             * @example `1`
             */
            ForceRestart: number;
            /**
             * 参数模板ID。
             * @example `rpg-****`
             */
            ParameterGroupId: string;
            /**
             * 参数模板名称。
             * @example `test1234`
             */
            ParameterGroupName: string;
            /**
             * 数据库引擎。
             * @example `mysql`
             */
            Engine: string;
            /**
             * 参数模板内的参数数量。
             * @example `2`
             */
            ParamCounts: number;
            /**
             * 数据库版本。
             * @example `5.7`
             */
            EngineVersion: string;
            /**
             * 参数模板类型。取值：
             * * 0：系统默认模板
             * * 1：用户自定义模板
             * * 2：系统自动备份模板（应用模板后系统会自动备份之前的参数设置为模板）
             * @example `1`
             */
            ParameterGroupType: number;
        }[];
    };
}
