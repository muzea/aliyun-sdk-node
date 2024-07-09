export interface DescribeParameterTemplatesResponse {
    /**
     * 请求ID。
     * @example `0F9B7410-EC73-510C-B385-8339455C12C6`
     */
    RequestId: string;
    /**
     * 数据库类型。
     * @example `mysql`
     */
    Engine: string;
    /**
     * 参数个数。
     * @example `2`
     */
    ParameterCount: string;
    /**
     * 数据库版本号。
     * @example `8.0`
     */
    EngineVersion: string;
    Parameters: {
        /**
         * 参数列表。
         */
        TemplateRecord: {
            /**
             * 参数取值范围。
             * @example `[0-1024]`
             */
            CheckingCode: string;
            /**
             * 参数名。
             * @example `loose_multi_blocks_ddl_count`
             */
            ParameterName: string;
            /**
             * 参数默认值。
             * @example `0`
             */
            ParameterValue: string;
            /**
             * 参数是否可修改，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            ForceModify: string;
            /**
             * 是否重启才生效，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `false`
             */
            ForceRestart: string;
            /**
             * 参数描述。
             * @example `Page numbers of multi blocks reading once in some ddl query.`
             */
            ParameterDescription: string;
        }[];
    };
}
