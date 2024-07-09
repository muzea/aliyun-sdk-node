export interface DescribeParametersResponse {
    /**
     * 请求ID。
     * @example `9C1338BE-8DE8-4890-A900-E1BC06BF****`
     */
    RequestId: string;
    /**
     * 数据库类型。
     * @example `redis`
     */
    Engine: string;
    /**
     * 数据库版本号。
     * @example `4.0`
     */
    EngineVersion: string;
    ConfigParameters: {
        /**
         * 未生效的配置参数列表。
         */
        Parameter: {
            /**
             * 校验代码，参数的可选范围。
             * @example `[0|1]`
             */
            CheckingCode: string;
            /**
             * 参数名。
             * @example `script_check_enable`
             */
            ParameterName: string;
            /**
             * 参数的值。
             * @example `1`
             */
            ParameterValue: string;
            /**
             * 是否需要重启生效，返回值：
             * * **True**：重启生效。
             * * **False**：无需重启，提交后即生效。
             * @example `true`
             */
            ForceRestart: boolean;
            /**
             * 参数的描述。
             * @example `Check all keys passed in the KEYS array map to the same slot.`
             */
            ParameterDescription: string;
            /**
             * 参数是否可修改，返回值：
             * * **False**：不可修改。
             * * **True**：可修改。
             * @example `true`
             */
            ModifiableStatus: boolean;
        }[];
    };
    RunningParameters: {
        /**
         * 运行参数列表。
         */
        Parameter: {
            /**
             * 参数的可选范围。
             * @example `[0|1]`
             */
            CheckingCode: string;
            /**
             * 参数名。
             * @example `#no_loose_disabled-commands`
             */
            ParameterName: string;
            /**
             * 参数的值。
             * @example `keys,flushall,flushdb`
             */
            ParameterValue: string;
            /**
             * 是否需要重启生效，返回值：
             * * **True**：重启生效。
             * * **False**：无需重启，提交后即生效。
             * @example `true`
             */
            ForceRestart: string;
            /**
             * 参数的描述。
             * @example `You can disable some dangerous commands, for example \"keys,flushdb,flushall\", the commands must be in [flushall,flushdb,keys,hgetall,eval,evalsha,script].`
             */
            ParameterDescription: string;
            /**
             * 参数是否可修改，返回值：
             * * **False**：不可修改。
             * * **True**：可修改。
             * @example `true`
             */
            ModifiableStatus: string;
        }[];
    };
}
