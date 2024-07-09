export interface DescribeParametersResponse {
    RunningParameters: {
        /**
         * 当前运行的参数配置信息列表。
         */
        Parameter: {
            /**
             * 参数取值范围。
             * @example `[33554432-268435456]`
             */
            CheckingCode: string;
            /**
             * 参数名。
             * @example `setParameter.internalQueryExecMaxBlockingSortBytes`
             */
            ParameterName: string;
            /**
             * 参数值。
             * @example `33554432`
             */
            ParameterValue: string;
            /**
             * 修改参数后是否需要重启生效。
             * - **false**：无需重启，提交后即生效。
             * - **true**：需要重启生效。
             * @example `false`
             */
            ForceRestart: string;
            /**
             * 参数描述。
             * @example `The maximum memory bytes that sort stage may use, default is 33554432(i.e. 32MB)`
             */
            ParameterDescription: string;
            /**
             * 参数是否处于可修改的状态。
             * - **false**：不可修改。
             * - **true**：可修改。
             * @example `true`
             */
            ModifiableStatus: string;
            /**
             * 实例的角色类型，取值说明：
             * - **db**：shard角色。
             * - **cs**：config server角色。
             * - **mongos**：mongos角色。
             * @example `db`
             */
            CharacterType: string;
        }[];
    };
    /**
     * 数据库版本号。
     * @example `4.0`
     */
    EngineVersion: string;
    /**
     * 请求ID。
     * @example `3ADD0C7D-2D2A-4F15-88FF-E7AC9B9FDCC8`
     */
    RequestId: string;
    ConfigParameters: {
        /**
         * 配置中的参数配置信息列表。
         */
        Parameter: {
            /**
             * 参数取值范围。
             * @example `[0-65536]`
             */
            CheckingCode: string;
            /**
             * 参数名。
             * @example `operationProfiling.slowOpThresholdMs`
             */
            ParameterName: string;
            /**
             * 参数值。
             * @example `200`
             */
            ParameterValue: string;
            /**
             * 修改参数后是否需要重启生效。
             * - **false**：无需重启，提交后即生效。
             * - **true**：需要重启生效。
             * @example `true`
             */
            ForceRestart: boolean;
            /**
             * 参数描述。
             * @example `The threshold in milliseconds at which the database profiler considers a query slow, default is 100.`
             */
            ParameterDescription: string;
            /**
             * 参数是否处于可修改的状态。
             * - **false**：不可修改。
             * - **true**：可修改。
             * @example `true`
             */
            ModifiableStatus: boolean;
        }[];
    };
    /**
     * 数据库引擎，默认返回**mongodb**。
     * @example `mongodb`
     */
    Engine: string;
}
