export interface CreateManualDagRequest {
    /**
     * 调度运维中心的环境标识。PROD表示生产环境，DEV表示开发环境。
     * @example `PROD或者DEV`
     */
    "ProjectEnv": string;
    /**
     * 手动业务流程所属的工作空间英文名称。
     * @example `test_workspace`
     */
    "ProjectName": string;
    /**
     * 手动业务流程的名称。
     * @example `test_workflow`
     */
    "FlowName": string;
    /**
     * 业务日期的值为小于等于当前日期-1天。例如，今天是2020年11月11日，则业务日期需要是2020年11月10日的00:00:00或者该日期之前的日期。业务日期的时分秒信息均填写00。
     * @example `2020-11-11 00:00:00`
     */
    "BizDate": string;
    /**
     * 传递手动业务流程执行时的节点参数信息，一个JSON格式：
     * `
     * {
     *      "<手动业务流程内部的某个节点ID>": "节点的调度参数信息，和数据开发调度配置里面的参数格式保持一致",
     *      "<手动业务流程内部的某个节点ID>": "节点的调度参数信息，和数据开发调度配置里面的参数格式保持一致"
     * }
     * `
     * @example `{"20000123121": "key1=val2 key2=val2", "20000123124": "kkkk=vvvvv aaaa=bbbb"}`
     */
    "NodeParameters"?: string;
    /**
     * 业务流程参数，该参数会同步至本次Dag的所有实例中。如果内部节点的调度参数引用了DagParameters中的业务流程参数，则节点的对应参数值会被替换为DagParameter中的业务流程参数。
     * @example `{"kaaaa": "vaaaaa", "kbbbb": "vbbbbb"}`
     */
    "DagParameters"?: string;
    /**
     * 需要运行的节点ID列表。
     * @example `74324,74325`
     */
    "IncludeNodeIds"?: string;
    /**
     * 不需要运行的节点ID列表。
     * @example `123,456`
     */
    "ExcludeNodeIds"?: string;
}
