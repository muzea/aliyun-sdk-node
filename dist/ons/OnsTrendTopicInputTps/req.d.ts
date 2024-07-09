export interface OnsTrendTopicInputTpsRequest {
    /**
     * 需查询的Topic名称。
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
     * - **0**：查询指定时间段内Topic的写入量。
     * - **1**：查询指定时间段内Topic的TPS曲线数据。
     * @example `0`
     */
    "Type": number;
    /**
     * 指定的Topic所对应的实例ID。
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId"?: string;
    /**
     * 采样周期，单位：分钟，取值可为1、5、10。
     * @example `10`
     */
    "Period"?: number;
}
