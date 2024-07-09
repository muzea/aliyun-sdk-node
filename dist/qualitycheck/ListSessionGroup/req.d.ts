export interface ListSessionGroupRequest {
    /**
     * 详细信息见请求参数补充说明。
     * @example `{"isSchemeData":1,"pageNumber":1,"pageSize":10,"callStartTime":"2022-09-17 00:00:00","callEndTime":"2022-09-23 23:59:59","schemeTaskConfigId":368}`
     */
    "jsonStr"?: string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
