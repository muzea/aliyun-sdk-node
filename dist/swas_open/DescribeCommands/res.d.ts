export interface DescribeCommandsResponse {
    /**
     * 请求ID。
     * @example `20758A-585D-4A41-A9B2-28DA8F4F****`
     */
    RequestId: string;
    /**
     * 命令总条数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 命令列表页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 命令列表。
     */
    Commands: {
        /**
         * 命令ID。
         * @example `c-gov1k1tqwi9****`
         */
        CommandId: string;
        /**
         * 命令的标签列表。
         */
        Tags: {
            /**
             * 命令的标签键。
             * @example `TestKey`
             */
            Key: string;
            /**
             * 命令的标签值。
             * @example `TestValue`
             */
            Value: string;
        }[];
        /**
         * 命令创建时间。
         * @example `2023-01-05T06:38:53Z`
         */
        CreationTime: string;
        /**
         * 命令名称。
         * @example `testName`
         */
        Name: string;
        /**
         * 命令的提供者。
         * @example `User`
         */
        Provider: string;
        /**
         * 命令类型。
         * @example `RunShellScript`
         */
        Type: string;
        /**
         * 超时时间。
         * @example `60`
         */
        Timeout: number;
        /**
         * 命令描述。
         * @example `testDescription`
         */
        Description: string;
        /**
         * 执行路径。
         * @example `/home`
         */
        WorkingDir: string;
        /**
         * 命令内容。
         * @example `cat /etc/ssh/sshd_config`
         */
        CommandContent: string;
        /**
         * 该命令是否启用自定义参数。
         * @example `false`
         */
        EnableParameter: boolean;
        /**
         * 通过创建命令时的CommandContent解析出的自定义参数名列表，以列表（List）的形式返回。如未使用自定义参数功能，则返回空值列表。
         */
        ParameterNames: string[];
        /**
         * 自定义参数详细信息列表。
         */
        ParameterDefinitions: {
            /**
             * 该自定义参数是否必填。
             * - true：是。
             * - false：否。
             * 默认值：false。
             * @example `false`
             */
            Required: boolean;
            /**
             * 自定义参数描述。
             * @example `命令助手Agent安装包路径`
             */
            Description: string;
            /**
             * 自定义参数的默认值。
             * @example `https://aliyun-client-assist.oss-accelerate.aliyuncs.com/linux/aliyun_assist_latest.rpm`
             */
            DefaultValue: string;
            /**
             * 自定义参数名称。
             * @example `DownloadUrl`
             */
            ParameterName: string;
            /**
             * 枚举类型自定义参数的可选值。
             */
            PossibleValues: string[];
        }[];
        /**
         * 资源组ID。
         * @example `rg-aek2bti7cf7****`
         */
        ResourceGroupId: string;
    }[];
}
