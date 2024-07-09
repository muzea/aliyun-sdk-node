export interface CreateKillInstanceSessionTaskRequest {
    /**
     * 实例ID。
     * @example `rm-2ze8g2am97624****`
     */
    "InstanceId": string;
    /**
     * 节点ID。
     * > 对于PolarDB MySQL版实例，需要提供节点ID。如果没有提供节点ID，并且请求参数**KillAllSessions**配置为**true**（即结束全部会话），将会遍历PolarDB MySQL版实例所有节点，并结束每个节点上正在进行的会话。
     * @example `pi-bp1v203xzzh0a****`
     */
    "NodeId"?: string;
    /**
     * 具有结束会话权限的数据库账号。
     * @example `testUser`
     */
    "DbUser": string;
    /**
     * 数据库账号密码。
     * @example `testPassword`
     */
    "DbUserPassword": string;
    /**
     * 忽略账号列表，该列表中账号的会话不会被结束。
     * > 数据格式为JSONArray字符串，例如\['数据库账号1','数据库账号2'\]，数据库账号间用英文逗号（,）分隔。
     * @example `['db_user1','db_user2']`
     */
    "IgnoredUsers"?: string;
    /**
     * 是否结束全部会话。
     * - **true**：是。
     * - **false**：否。
     * > 该参数取值为**true**时，请求参数**IgnoredUsers**中账号的会话、阿里云内部运维账号的会话和**Binlog Dump**会话都不会被结束。
     * @example `true`
     */
    "KillAllSessions": boolean;
    /**
     * 需要被结束的会话ID列表。
     * > 数据格式为JSONArray，例如\[会话ID1,会话ID2\]，会话ID间用英文逗号（,）分隔。如果请求参数**KillAllSessions**取值为**true**（即结束全部会话），该列表会被忽略。
     * @example `[10805639,10805623,10805645,10805553,10805566,10805616]`
     */
    "SessionIds"?: string;
}
