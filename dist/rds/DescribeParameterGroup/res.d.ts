export interface DescribeParameterGroupResponse {
    /**
     * 请求ID。
     * @example `498AE8CA-8C81-4A01-AF37-2B902014ED30`
     */
    RequestId: string;
    ParamGroup: {
        /**
         * 参数模板信息列表。
         */
        ParameterGroup: {
            /**
             * 最近一次参数模板更新时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2019-10-22T06:07:54Z`
             */
            UpdateTime: string;
            /**
             * 参数模板描述。
             * @example `testGroup1`
             */
            ParameterGroupDesc: string;
            /**
             * 参数模板创建时间。
             * @example `2019-10-22T06:02:53Z`
             */
            CreateTime: string;
            /**
             * 应用该参数模板是否需要重启实例。取值：
             * * **0**：不需要重启
             * * **1**：需要重启
             * @example `1`
             */
            ForceRestart: number;
            /**
             * 参数模板ID。
             * @example `rpg-dp****`
             */
            ParameterGroupId: string;
            /**
             * 参数模板名称。
             * @example `test123456`
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
             * @example `5.6`
             */
            EngineVersion: string;
            /**
             * 参数模板类型。取值：
             * * **0**：系统默认模板
             * * **1**：用户自定义模板
             * * **2**：系统自动备份模板（应用模板后系统会自动备份之前的参数设置为模板）
             * @example `1`
             */
            ParameterGroupType: number;
            ParamDetail: {
                /**
                 * 参数列表。
                 */
                ParameterDetail: {
                    /**
                     * 参数名称。
                     * @example `back_log`
                     */
                    ParamName: string;
                    /**
                     * 参数值。
                     * @example `2000`
                     */
                    ParamValue: string;
                }[];
            };
        }[];
    };
    RelatedCustinsInfo: {
        /**
         * 关联实例信息列表。
         * > 仅PostgreSQL模板适用。
         */
        RelatedCustinsInfo: {
            /**
             * 实例ID。
             * @example `rm-bp170****`
             */
            DBInstanceName: string;
            /**
             * 应用参数模板的时间。
             * @example `2022-10-17T03:19:02Z`
             */
            AppliedTime: string;
        }[];
    };
}
