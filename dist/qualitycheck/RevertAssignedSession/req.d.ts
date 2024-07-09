export interface RevertAssignedSessionRequest {
    /**
     * 入参JSON，具体参考请求参数补充说明。
     * @example `{"isSchemeData":1,"searchParam":{"schemeTaskConfigId":1,"sourceDataType":1,"startTime":"2022-09-20 00:00:00","endTime":"2022-09-26 23:59:59"}}`
     */
    "jsonStr"?: string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
