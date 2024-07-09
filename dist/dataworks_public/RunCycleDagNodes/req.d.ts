export interface RunCycleDagNodesRequest {
    /**
     * 工作空间的环境，PROD表示生产环境，DEV表示开发环境。
     * @example `PROD`
     */
    "ProjectEnv": string;
    /**
     * 补数据的起始业务日期。格式为yyyy-MM-dd 00:00:00。
     * @example `2020-05-20 00:00:00`
     */
    "StartBizDate": string;
    /**
     * 工作流的名称。
     * @example `xm_test`
     */
    "Name": string;
    /**
     * 补数据的起始节点ID。您可以通过调用[ListNodes](~~173979~~)接口获取节点ID。
     * @example `1234`
     */
    "RootNodeId": number;
    /**
     * 无需补数据的节点ID列表，在这个列表中的节点会生成空跑实例，空跑实例被调度后会直接运行成功，不会执行脚本内容。
     * @example `1234,123465`
     */
    "ExcludeNodeIds"?: string;
    /**
     * 任务的开始时间。仅小时调度任务需要设置该参数，格式为HH:mm:ss，取值范围为 00:00:00~23:59:59。
     * @example `00:00:00`
     */
    "BizBeginTime"?: string;
    /**
     * 任务的结束时间。仅小时调度任务需要设置该参数，格式为HH:mm:ss，取值范围为 00:00:00~23:59:59。
     * @example `01:00:00`
     */
    "BizEndTime"?: string;
    /**
     * 是否可以同时对多个节点进行补数据操作。
     * @example `false`
     */
    "Parallelism": boolean;
    /**
     * 补数据的结束业务日期。格式为yyyy-MM-dd 00:00:00。
     * @example `2020-05-21 00:00:00`
     */
    "EndBizDate": string;
    /**
     * 配置为一个JSON字符串，Key为节点ID，Value为参数的实际取值。
     * @example `{"74324":"a=123 b=456"}`
     */
    "NodeParams"?: string;
    /**
     * 补数据的节点ID。对多个节点补数据时，多个节点ID使用逗号（,）分隔。您可以通过调用[ListNodes](~~173979~~)接口获取节点ID。
     * @example `74324,74325`
     */
    "IncludeNodeIds": string;
    /**
     * 是否立刻运行未来调度时间的实例，如果设置为true，则大于当前时间的实例会立刻运行，否则会等待调度时间
     * @example `false`
     */
    "StartFutureInstanceImmediately"?: boolean;
    /**
     * 任务并行数。取值范围2~10。
     * @example `5`
     */
    "ConcurrentRuns"?: number;
    /**
     * 告警类型。取值范围：
     * - SUCCESS：成功告警。
     * - FAILURE：失败告警。
     * - SUCCESS_FAILURE：成功或失败皆告警。
     * @example `FAILURE`
     */
    "AlertType"?: string;
    /**
     * 告警通知方式。取值范围：
     * - SMS：短信。
     * - MAIL：邮件。
     * - SMS_MAIL：短信与邮件。
     * @example `SMS`
     */
    "AlertNoticeType"?: string;
}
