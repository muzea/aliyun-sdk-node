export interface StartTerminalSessionRequest {
    /**
     * 实例所在地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID列表。
     */
    "InstanceId": string[];
    /**
     * 指定ECS实例的端口号，用于数据转发。一旦设置该参数，云助手Agent的数据转发会传到指定的端口号，用于端口转发。例如，SSH使用22端口。
     * 默认值为空，表示不设置数据转发的端口号。
     * @example `22`
     */
    "PortNumber"?: number;
    /**
     * 发起会话后，指定执行的命令内容。长度不能超过512个字符。
     * > 指定了`CommandLine`后，不能再指定`PortNumber`和`TargetServer`。
     * @example `ssh root@192.168.0.246`
     */
    "CommandLine"?: string;
    /**
     * 指定通过实例访问VPC内目标服务地址。
     * >当该参数不为空时，`PortNumber`表示通过托管实例访问VPC内目标服务的端口号。
     * @example `192.168.0.246`
     */
    "TargetServer"?: string;
    /**
     * 指定连接时的用户名称。
     * @example `testUser`
     */
    "Username"?: string;
}
