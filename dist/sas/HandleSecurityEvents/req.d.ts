export interface HandleSecurityEventsRequest {
    /**
     * 访问源的IP地址。
     * @example `1.2.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 告警事件的处理方式。取值：
     * - **block_ip**：阻断
     * - **advance\_mark\_mis_info**：加白名单
     * - **ignore**：忽略
     * - **manual_handled**：我已手工处理
     * - **kill_process**：结束进程
     * - **cleanup**：深度查杀
     * - **kill\_and_quara**：病毒查杀
     * - **disable\_malicious_defense**：关闭恶意行为防御
     * - **client\_problem_check**：问题排查
     * - **quara**：隔离
     * @example `block_ip`
     */
    "OperationCode": string;
    /**
     * 告警事件处理方式子操作的配置。
     * 当OperationCode取值 kill_and_quara，需要填写参数类型"subOperation":${code}
     * 可填code参数：
     * - 隔离文件：quaraFileByMd5andPath
     * - 通过进程id路径等查杀进程隔离文件：killAndQuaraFileByPidAndMd5andPath
     * - 只查杀进程：killByMd5andPath
     * - 查杀进程并隔离文件：killAndQuaraFileByMd5andPath
     * - 通过进程id和路径等查杀容器的进程：killProcessByPidandPathandCmdline
     * - 通过文件md5和路径查杀容器的进程：killContainerProcessByMd5AndPath
     * 当OperationCode取值 block_ip，参数：
     * - 过期时间：expireTime:${timestamp}
     * > 除了OperationCode值为`kill_and_quara`和`block_ip`此参数必填外，OperationCode为其他值的情况下，该参数值可为空。${timestamp}表示封禁此ip的截止日期时间戳。
     * @example `{\"expireTime\":1719588943551,\"subOperation\":\"killAndQuaraFileByMd5andPath\"}`
     */
    "OperationParams"?: string;
    /**
     * 设置加白名单的规则。该字段为JSON格式，包含字段如下：
     * - **field**：加白字段。
     * - **operate**：加白方式，取值：
     *     - **notContains**：不包含。
     *     - **contains**：包含。
     *     - **regex**：正则匹配。
     *     - **strEqual**：等于。
     *     - **strNotEqual**：不等于。
     * - **fieldValue**：匹配值。
     * - **uuid**：该加白规则作用范围，取值：
     *     - **part**：仅对当前资产。
     *     - **ALL**：对所有资产。
     * > 调用[DescribeSecurityEventOperations ](~~DescribeSecurityEventOperations~~)接口获取**field**加白字段。
     * @example `[{"uuid":"part","field":"gmtModified","operate":"contains","fieldValue":"asd"},{"uuid":"part","field":"loginUser","operate":"contains","fieldValue":"vff"}]`
     */
    "MarkMissParam"?: string;
    /**
     * 否是批量加白。
     * - **true**：是
     * - **false**：否
     * @example `true`
     */
    "MarkBatch"?: string;
    /**
     * 要处理的安全告警事件的ID集合。
     * @example `["909361"]`
     */
    "SecurityEventIds": string[];
    /**
     * 处理操作的备注信息。
     * @example `remark test.`
     */
    "Remark"?: string;
    /**
     * 资源目录成员账号ID（阿里云账号）。
     * >调用[DescribeMonitorAccounts](~~DescribeMonitorAccounts~~)接口可以获取该参数。
     * @example `127608589417****`
     */
    "ResourceDirectoryAccountId"?: number;
}
