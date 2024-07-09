export interface DescribeParameterTemplatesResponse {
    /**
     * 参数个数。
     * @example `10`
     */
    ParameterCount: string;
    /**
     * 数据库版本号。
     * @example `5.0`
     */
    EngineVersion: string;
    Parameters: {
        /**
         * 参数模板列表。
         */
        TemplateRecord: {
            /**
             * 可修改参数的值。
             * @example `[0-65536]`
             */
            CheckingCode: string;
            /**
             * 参数名称。
             * 详情请参见[MongoDB官方文档](https://www.mongodb.com/docs/manual/tutorial/manage-the-database-profiler/)
             * @example `net.compression.compressors`
             */
            ParameterName: string;
            /**
             * 参数默认值。
             * @example `100`
             */
            ParameterValue: string;
            /**
             * 参数是否处于可修改的状态。
             * - **false**：不可修改。
             * - **true**：可修改。
             * @example `true`
             */
            ForceModify: boolean;
            /**
             * 修改参数后是否需要重启生效。
             * - **false**：无需重启，提交后即生效。
             * - **true**：需要重启生效。
             * @example `false`
             */
            ForceRestart: boolean;
            /**
             * 参数描述。
             * @example `The threshold in milliseconds at which the database profiler considers a query slow, default is 100.`
             */
            ParameterDescription: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `BDA54203-9D61-54A3-A568-D281F785****`
     */
    RequestId: string;
    /**
     * 数据库引擎。
     * @example `mongodb`
     */
    Engine: string;
}
