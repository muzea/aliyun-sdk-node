export interface OnsTopicUpdateRequest {
    /**
     * 需配置的Topic名称。
     * @example `test`
     */
    "Topic": string;
    /**
     * 设置该Topic的读写模式。取值说明如下：
     * - **6**：同时支持读写
     * - **4**：禁写
     * - **2**：禁读
     * @example `6`
     */
    "Perm": number;
    /**
     * 需配置的Topic所对应的实例ID。
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId"?: string;
}
