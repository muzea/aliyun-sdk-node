export interface AssignReviewerBySessionGroupRequest {
    /**
     * 详细信息见请求参数补充说明。
     * @example `{"sessionGroupParam":{"isSchemeData":1,"callStartTime":"2022-09-17 00:00:00","callEndTime":"2022-09-23 23:59:59","schemeTaskConfigId":24},"assignments":[{"reviewer":63,"count":4}],"isSchemeData":1}`
     */
    "jsonStr"?: string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
