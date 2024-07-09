export interface UpdateCommandAttributeRequest {
    /**
     * 地域ID。您可以调用[ListRegions](~~189315~~)查询可用地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 命令ID。您可以通过接口[DescribeCommands](~~64843~~)查询所有可用的CommandId。
     * @example `c-sh02yh0932w****`
     */
    "CommandId": string;
    /**
     * 命令名称，支持全字符集。长度不得超过128个字符。
     * @example `testName`
     */
    "Name"?: string;
    /**
     * 命令描述，支持全字符集。长度不得超过512个字符。
     * @example `test`
     */
    "Description"?: string;
    /**
     * 执行路径。长度不得超过200个字符。
     * @example `/home/`
     */
    "WorkingDir"?: string;
    /**
     * 您创建的命令在ECS实例中执行时最大的超时时间，单位为秒。当因为某种原因无法运行您创建的命令时，会出现超时现象。超时后，会强制终止命令进程，即取消命令的PID。默认值：60。
     * @example `60`
     */
    "Timeout"?: number;
}
