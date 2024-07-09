export interface DescribeDBClusterParametersResponse {
    RunningParameters: {
        /**
         * PolarDB集群中当前运行的参数列表。
         */
        Parameter: {
            /**
             * 目标参数的取值范围。
             * @example `[utf8|latin1|gbk|utf8mb4]`
             */
            CheckingCode: string;
            /**
             * 参数值类型。取值范围如下：
             * - **INT**：整数类型。
             * - **STRING**：字符串类型。
             * - **B**：字节类型。
             * @example `INT`
             */
            DataType: string;
            /**
             * 参数名。
             * @example `character_set_server`
             */
            ParameterName: string;
            /**
             * 参数值。
             * @example `utf8`
             */
            ParameterValue: string;
            /**
             * 是否需要重启生效。取值范围如下：
             * - **false**：否。
             * - **true**：是。
             * @example `true`
             */
            ForceRestart: boolean;
            /**
             * 参数描述。
             * @example `The server's default character set.`
             */
            ParameterDescription: string;
            /**
             * 参数状态。取值范围如下：
             * - **Normal**：正常。
             * - **Modifying**：修改中。
             * @example `Normal`
             */
            ParameterStatus: string;
            /**
             * 参数默认值。
             * @example `utf8`
             */
            DefaultParameterValue: string;
            /**
             * 是否可修改。取值范围如下：
             * - **false**：不可修改。
             * - **true**：可修改。
             * @example `true`
             */
            IsModifiable: boolean;
            /**
             * 是否是全局参数。取值范围如下：
             * - **0**：是全局参数。修改后的参数值会默认同步到其它节点；
             * - **1**：不是全局参数。修改后的参数值可自定义需要同步的节点。
             * @example `0`
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
    };
    /**
     * 数据库引擎版本号。
     * MySQL版本号取值范围如下：
     * * **5.6**
     * * **5.7**
     * * **8.0**
     * PostgreSQL版本号取值范围如下：
     * * **11**
     * * **14**
     * Oracle版本号取值范围如下：
     * * **11**
     * * **14**
     * @example `5.6`
     */
    DBVersion: string;
    /**
     * 请求ID。
     * @example `EBEAA83D-1734-42E3-85E3-E25F6E******`
     */
    RequestId: string;
    /**
     * 数据库类型，取值范围如下：
     * - **MySQL**。
     * - **PostgreSQL**。
     * - **Oracle**。
     * @example `MySQL`
     */
    DBType: string;
    /**
     * 引擎。
     * @example `POLARDB`
     */
    Engine: string;
    /**
     * 集群ID。
     * @example `pc-bp1s826a1up******
    `
     */
    DBClusterId: string;
    /**
     * 参数个数。
     * @example `1`
     */
    ParameterNumbers: string;
    Parameters: {
        /**
         * RDS实例迁移PolarDB集群中当前运行的参数比对列表。
         */
        Parameters: {
            /**
             * 源实例参数名称。
             * @example `character_set_server`
             */
            rdsParameterName: string;
            /**
             * 源实例参数值。
             * @example `utf8`
             */
            rdsParameterValue: string;
            /**
             * 源实例参数取值范围。
             * @example `- utf8
            - gbk`
             */
            rdsParameterOptional: string;
            /**
             * 集群参数名称。
             * @example `character_set_server`
             */
            distParameterName: string;
            /**
             * 集群参数值。
             * @example `utf8`
             */
            distParameterValue: string;
            /**
             * 集群参数取值范围。
             * @example `- utf8
            - gbk`
             */
            distParameterOptional: string;
            /**
             * 参数取值是否相同
             * @example `true`
             */
            IsEqual: string;
            /**
             * 集群参数说明。
             * @example `The server's default character set.`
             */
            distParameterDescription: string;
            /**
             * 源实例参数说明。
             * @example `The server's default character set.`
             */
            rdsParameterDescription: string;
            /**
             * 是否是主要的源实例参数。取值范围如下：
             * - **1**：是主要的源实例参数。
             * - **0**：不是主要的源实例参数。
             * @example `1`
             */
            IsRdsKey: string;
            /**
             * 是否是主要的目标实例参数。
             * - **1**：是主要的目标实例参数。
             * - **0**：不是主要的目标实例参数。
             * @example `0`
             */
            IsPolarDBKey: string;
            /**
             * 是否是主要的目标实例参数。
             * - **1**：是主要的目标实例参数。
             * - **0**：不是主要的目标实例参数。
             * @example `1`
             */
            IsInstancePolarDBKey: string;
            /**
             * 是否是主要的源实例参数。
             * - **1**：是主要的源实例参数。
             * - **0**：不是主要的源实例参数。
             * @example `0`
             */
            IsInstanceRdsKey: string;
        }[];
    };
}
