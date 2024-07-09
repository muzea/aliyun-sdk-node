export interface DescribeParameterTemplatesResponse {
    /**
     * 请求ID。
     * @example `9DA28D8E-514D-4F12-ADED-70A9C818****`
     */
    RequestId: string;
    /**
     * 数据库类型，返回值固定为**Redis**。
     * @example `redis`
     */
    Engine: string;
    /**
     * Redis实例的大版本。
     * @example `5.0`
     */
    EngineVersion: string;
    /**
     * 参数个数。
     * @example `24`
     */
    ParameterCount: string;
    Parameters: {
        /**
         * 参数的详细信息列表。
         */
        TemplateRecord: {
            /**
             * 参数值的可选范围。
             * @example `[yes|no]`
             */
            CheckingCode: string;
            /**
             * 参数名，更多关于参数作用的介绍和设置说明，请参见[参数说明](~~259681~~)。
             * @example `appendonly`
             */
            ParameterName: string;
            /**
             * 参数默认值。
             * @example `yes`
             */
            ParameterValue: string;
            /**
             * 参数是否可修改，返回值：
             * * **true**：可修改。
             * * **false**：不可修改。
             * @example `true`
             */
            ForceModify: boolean;
            /**
             * 参数修改后，是否需要重启生效，返回值：
             * * **true**：需要重启生效。
             * * **false**：修改后立即生效，无需重启。
             * @example `true`
             */
            ForceRestart: boolean;
            /**
             * 参数描述。
             * @example `开启aof持久化模式`
             */
            ParameterDescription: string;
        }[];
    };
}
