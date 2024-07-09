export interface GetConnectTicketRequest {
    /**
     * 实例 id。
     * @example `i-xxx`
     */
    "InstanceId": string;
    /**
     * > `WorkMode` 为 `Desktop`（桌面模式）时，不要指定此参数。
     * > `WorkMode` 为 `Application`（应用模式）时，必需指定此参数
     * 应用名称。
     * @example `app-xxx`
     */
    "AppName"?: string;
    /**
     * > DescribeInstances 返回字段的 DomainName 非空，且调用者身份为该实例的已分配用户时，需要此参数
     * 域用户名。
     * @example `user01`
     */
    "UserName"?: string;
    /**
     * > DescribeInstances 返回字段的 DomainName 非空，且调用者身份为该实例的已分配用户时，需要此参数
     * 域用户名的密码。
     * @example `***`
     */
    "Password"?: string;
    /**
     * > 此值只在 `AsyncMode` 为 `true` 时有效
     * 非空时用来获得之前调用的执行状态。
     * @example `t-xxx`
     */
    "TaskId"?: string;
    /**
     * 异步模式调用。
     * * false（默认）：命令执行完成后，API才会返回。
     * * true：API **立即**返回。
     *     * 当 `TaskId` 为空：查询命令在后台异步执行。调用方需使用**返回值**中的TaskId，继续调用此API来获得查询命令的结果。
     *     * 当 `TaskId` 不为空：获得查询命令的结果。
     * @example `true`
     */
    "AsyncMode"?: boolean;
    /**
     * 使用内网IP连接云桌面：
     * * false（默认）：获取连接 token 时，优先级从高到低、按以下顺序选择连接云桌面的方式。
     *     * 实例的弹性IP
     *     * 实例的公网IP
     *     * 集群关联NAT时所使用的弹性公网IP
     *     * 实例的内网IP
     * * true：获取连接 token 时，以实例的内网IP来连接云桌面。
     * @example `true`
     */
    "UsePrivateIp"?: boolean;
}
