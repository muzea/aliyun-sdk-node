export interface ListExecutionsRequest {
    /**
     * 流程名称。该名称在同一地域内唯一，创建后不可修改。取值说明如下：
     * - 支持英文字符（a~z）或（A~Z）、数字（0~9）、下划线（_）和短划线（-）。
     * - 首字母必须为英文字母（a~z）、（A~Z）或下划线（_）。
     * - 区分大小写。
     * - 长度为1~128个字符。
     * @example `my_flow_name`
     */
    "FlowName": string;
    /**
     * 执行查询开始名称，根据本接口返回获取。首次查询非必填。
     * @example `flow_xxx`
     */
    "NextToken"?: string;
    /**
     * 查询数量。取值范围\[1,100]，默认值为60。
     * @example `1`
     */
    "Limit"?: number;
    /**
     * 需要过滤的执行状态。取值说明如下：
     * - **Starting**
     * - **Running**
     * - **Stopped**
     * - **Succeeded**
     * - **Failed**
     * - **TimedOut**
     * @example `Succeeded`
     */
    "Status"?: string;
    /**
     * 筛选某个执行的起始时间后的所有执行，格式为UTC RFC3339。
     * @example `2020-12-02T02:39:20.402Z`
     */
    "StartedTimeBegin"?: string;
    /**
     * 筛选某个执行的起始时间前的所有执行，格式为UTC RFC3339。
     * @example `2020-12-02T02:23:54.817Z`
     */
    "StartedTimeEnd"?: string;
    /**
     * 执行的名称前缀。
     * @example `run`
     */
    "ExecutionNamePrefix"?: string;
}
