export interface ModifyCommandRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 命令ID。您可以通过接口[DescribeCommands](~~64843~~)查询所有可用的CommandId。
     * @example `c-hz01272yr52****`
     */
    "CommandId": string;
    /**
     * 命令名称。支持全字符集，长度不得超过128个字符。
     * @example `test-CommandName`
     */
    "Name"?: string;
    /**
     * 命令描述。支持全字符集，长度不得超过512个字符。
     * @example `This is description.`
     */
    "Description"?: string;
    /**
     * > 该参数已废弃，传入该参数不会生效。
     * @example `echo`
     */
    "CommandContent"?: string;
    /**
     * 执行路径。长度不得超过200个字符。
     * @example `/home/`
     */
    "WorkingDir"?: string;
    /**
     * 您创建的命令在ECS实例中执行时最大的超时时间，单位为秒。当无法在配置的时间内运行并完成您创建的命令时，会出现超时现象。超时后，会强制终止命令进程，即取消命令的PID。
     * @example `120`
     */
    "Timeout"?: number;
}
