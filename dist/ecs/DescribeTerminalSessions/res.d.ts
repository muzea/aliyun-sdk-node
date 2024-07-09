export interface DescribeTerminalSessionsResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 本次调用返回的查询凭证值。
     * @example `AAAAAdDWBF2****`
     */
    NextToken: string;
    Sessions: {
        /**
         * 会话列表。
         */
        Session: {
            /**
             * 会话的创建时间。
             * @example `2024-01-19T09:15:46Z`
             */
            CreationTime: string;
            /**
             * 通过实例访问VPC内的目标服务地址。
             * @example `192.168.0.246`
             */
            TargetServer: string;
            /**
             * ECS实例的端口号，用于数据转发。若未设置数据转发的端口号，则该值为空。
             * @example `22`
             */
            PortNumber: number;
            /**
             * 身份标识。按照身份类型`IdentityType`，取值如下：
             * - 当前调用者是阿里云账号：返回阿里云账号ID。
             * - 当前调用者是RAM用户：返回RAM用户ID。
             * - 当前调用者是角色扮演：返回角色扮演实际委托人ID。
             * @example `123456xxxx`
             */
            PrincipalId: string;
            /**
             * 连接时的用户名。
             * @example `root`
             */
            Username: string;
            /**
             * 远程连接的客户IP。
             * @example `192.168.1.1`
             */
            ClientIP: string;
            /**
             * 身份类型。当前支持的身份类型包括：
             * - Account：阿里云账号（主账号）。
             * - RAMUser：RAM用户。
             * - AssumedRoleUser：RAM角色。
             * @example `RAMUser`
             */
            IdentityType: string;
            /**
             * 会话ID。
             * @example `s-hz023od0x9****`
             */
            SessionId: string;
            Connections: {
                /**
                 * 连接信息列表。
                 */
                Connection: {
                    /**
                     * 连接结束原因。
                     * 仅在状态（`Status`）为`Disconnected`、`Terminated`、`Failed`时返回该参数。可能值：
                     * - InstanceNotExists：指定的实例不存在或已释放。
                     * - InstanceNotRunning：该实例不在运行中。
                     * - DeliveryTimeout：连接超时。
                     * - AgentNeedUpgrade：云助手 Agent 需要升级。
                     * - AgentNotOnline：云助手Agent未连接到服务器。
                     * - MessageFormatInvalid：消息格式不合法。
                     * - AgentSocketClosed：连接正常关闭。
                     * - ClientClosed：会话管理客户端关闭了连接。
                     * @example `AgentNeedUpgrade`
                     */
                    ClosedReason: string;
                    /**
                     * 连接结束时间。
                     * @example `2024-01-19T09:16:46Z`
                     */
                    EndTime: string;
                    /**
                     * 会话状态，可能值：
                     * - Connecting：连接中。
                     * - Connected：已连接。
                     * - Disconnected：连接断开。
                     * - Terminating：会话终止中。
                     * - Terminated：会话已终止。
                     * - Failed：连接失败。
                     * @example `Connecting`
                     */
                    Status: string;
                    /**
                     * 连接开始时间。
                     * @example `2024-01-19T09:16:40Z`
                     */
                    StartTime: string;
                    /**
                     * 实例ID。
                     * @example `i-bp1i7gg30r52z2em****`
                     */
                    InstanceId: string;
                }[];
            };
        }[];
    };
}
