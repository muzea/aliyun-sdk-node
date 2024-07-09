export interface CreateSchemeTaskConfigRequest {
    /**
     * 入参JSON，具体参考请求参数补充说明。
     * @example `{"manualReview":0,"name":"检测任务 2022-09-21 16:59:50","asrTaskPriority":2,"modeCustomizationId":"englishxxx","vocabId":"xxxx5b98d98f8405xxxxxe5dbb383ca1df","dataConfig":{"assignConfigs":[{"assignConfigContests":[{"name":"fileName","symbol":1,"value":["1"],"dataType":2}]}]},"schemeIdList":[187],"sourceDataType":1}`
     */
    "jsonStr"?: string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
