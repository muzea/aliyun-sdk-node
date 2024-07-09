export interface CreateDagComplementRequest {
    /**
     * 工作空间的环境，包括PROD和DEV。
     * @example `PROD`
     */
    "ProjectEnv": string;
    /**
     * 补数据的起始业务日期。
     * @example `2020-05-20 00:00:00`
     */
    "StartBizDate": string;
    /**
     * 工作流的名称。
     * @example `xm_test`
     */
    "Name": string;
    /**
     * 补数据的起始节点ID。
     * @example `1234`
     */
    "RootNodeId": number;
    /**
     * 包含的节点ID列表。如果只补一个节点的数据，该节点需要在includeNodeIds中。
     * @example `74324,74325`
     */
    "IncludeNodeIds": string;
    /**
     * 可选参数，排除无需补数据的节点ID列表。
     * @example ` 1234`
     */
    "ExcludeNodeIds"?: string;
    /**
     * 可选参数，任务的开始时间。小时调度任务需要设置该参数。
     * @example `00:00:00`
     */
    "BizBeginTime"?: string;
    /**
     * 可选参数，小时调度任务需要，任务的结束时间
     * @example `23:00:00`
     */
    "BizEndTime"?: string;
    /**
     * 是否可以并发执行。
     * @example `false`
     */
    "Parallelism": boolean;
    /**
     * 补数据的结束业务日期。
     * @example `2020-05-21 00:00:00`
     */
    "EndBizDate": string;
    /**
     * 传入一个 json 字符串，Key为节点 ID，Value为参数实际值
     * @example `{74324:"key1=val1 key2=val"}`
     */
    "NodeParams"?: string;
}
