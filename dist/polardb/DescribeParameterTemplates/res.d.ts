export interface DescribeParameterTemplatesResponse {
    /**
     * 参数数量。
     * @example `183`
     */
    ParameterCount: string;
    /**
     * 数据库引擎版本。
     * @example `5.7`
     */
    DBVersion: string;
    Parameters: {
        /**
         * 参数列表。
         */
        TemplateRecord: {
            /**
             * 参数取值范围。
             * @example `[ROW|STATEMENT|MIXED]`
             */
            CheckingCode: string;
            /**
             * 参数名称。
             * @example `binlog_format`
             */
            ParameterName: string;
            /**
             * 参数默认值。
             * @example `ROW`
             */
            ParameterValue: string;
            /**
             * 参数是否可修改，取值范围如下：
             * * **true**：可修改
             * * **false**：不可修改
             * @example `true`
             */
            ForceModify: string;
            /**
             * 参数修改后，是否需要重启新参数值才生效。取值范围如下：
             * * **true**：需要重启
             * * **false**：不需要重启
             * @example `false`
             */
            ForceRestart: string;
            /**
             * 参数描述。
             * @example `What form of binary logging the master will use.`
             */
            ParameterDescription: string;
            /**
             * 是否是全局参数。取值：
             * - **0**：是全局参数。修改后的参数值会默认同步到其他节点；
             * - **1**：不是全局参数。修改后的参数值可自定义需要同步的节点。
             * @example `1`
             */
            IsNodeAvailable: string;
            /**
             * 参数依赖。
             * @example `utf8`
             */
            ParamRelyRule: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `D963934D-8605-4473-8EAC-54C719******`
     */
    RequestId: string;
    /**
     * 数据库引擎类型。
     * @example `MySQL`
     */
    DBType: string;
    /**
     * 数据库引擎。
     * @example `POLARDB`
     */
    Engine: string;
}
