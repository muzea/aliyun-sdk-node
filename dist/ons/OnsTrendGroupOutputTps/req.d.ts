export interface OnsTrendGroupOutputTpsRequest {
    /**
     * 需要查询的Group ID。
     * @example `GID_test`
     */
    "GroupId": string;
    /**
     * 需要查询的Topic名称。
     * @example `test`
     */
    "Topic": string;
    /**
     * 查询区间的起始时间戳，单位：毫秒。
     * @example `1570852800000`
     */
    "BeginTime": number;
    /**
     * 查询区间的终止时间戳，单位：毫秒。
     * @example `1570868400000`
     */
    "EndTime": number;
    /**
     * 查询的类型。取值说明如下：
     * - **0**：查询消费消息总量的统计曲线。
     * - **1**：查询消费消息TPS的统计曲线。
     * @example `0`
     */
    "Type": number;
    /**
     * 需统计数据的Group ID所对应的实例ID。
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId"?: string;
    /**
     * 采样周期，单位：分钟，取值可为 1、5、10。
     * @example `10`
     */
    "Period"?: number;
}
