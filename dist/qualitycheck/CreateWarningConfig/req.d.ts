export interface CreateWarningConfigRequest {
    /**
     * 完整JSON字符串信息，具体内容参见以下详细信息。
     * @example `{"ridList":[15670],"configName":"投诉预警","channels":[{"type":1,"url":"https://xxx"}]}`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
