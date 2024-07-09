export interface DescribeDBNodesParametersResponse {
    /**
     * MySQL版本号。取值范围：
     * - **5.6**
     * - **5.7**
     * - **8.0**
     * @example `5.6`
     */
    DBVersion: string;
    /**
     * 请求ID。
     * @example `9B7BFB11-C077-4FE3-B051-F69CEB******`
     */
    RequestId: string;
    /**
     * 数据库类型。取值固定为**MySQL**。
     * @example `MySQL`
     */
    DBType: string;
    /**
     * 集群引擎。
     * @example `POLARDB`
     */
    Engine: string;
    /**
     * 节点ID列表。
     */
    DBNodeIds: {
        /**
         * 节点ID。
         * @example `pi-bp1r4qe3s534*****`
         */
        DBNodeId: string;
        /**
         * 当前节点运行的参数列表。
         */
        RunningParameters: {
            /**
             * 目标参数的取值范围。
             * @example `[utf8|latin1|gbk|utf8mb4]`
             */
            CheckingCode: string;
            /**
             * 参数值类型。取值范围：
             * - **INT**：整数类型
             * - **STRING**：字符串类型
             * - **B**：字节类型
             * @example `INT`
             */
            DataType: string;
            /**
             * 参数默认值。
             * @example `utf8`
             */
            DefaultParameterValue: string;
            /**
             * 是否需要重启生效。取值范围：
             * - **false**：否
             * - **true**：是
             * @example `true`
             */
            ForceRestart: boolean;
            /**
             * 是否可修改。取值范围：
             * - **false**：不可修改
             * - **true**：可修改
             * @example `true`
             */
            IsModifiable: boolean;
            /**
             * 参数描述。
             * @example `The server's default character set.`
             */
            ParameterDescription: string;
            /**
             * 参数名称。
             * @example `character_set_server`
             */
            ParameterName: string;
            /**
             * 参数状态。取值范围：
             * - **normal**：正常
             *
             * - **modifying**：修改中
             * @example `normal`
             */
            ParameterStatus: string;
            /**
             * 参数值。
             * @example `utf8`
             */
            ParameterValue: string;
            /**
             * 是否是全局参数。取值范围：
             * - **0**：是全局参数。参数修改会默认应用到其他节点，且不可取消；
             * - **1**：不是全局参数。参数修改可自定义应用到其他节点。
             * @example `1`
             */
            IsNodeAvailable: string;
            /**
             * 参数依赖。
             * @example `utf8`
             */
            ParamRelyRule: string;
            /**
             * 整除因子。对于整数和字节类型的参数，参数值除了必须满足参数的可选范围，还须是Factor（不等于0）的倍数。
             * @example `20`
             */
            Factor: string;
        }[];
    }[];
}
