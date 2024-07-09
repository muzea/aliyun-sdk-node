export interface QueryTicketsResponse {
    /**
     * 状态码。返回200表示请求成功。
     * @example `200`
     */
    Code: string;
    /**
     * 状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 工单信息。
     * @example `{ "totalResults":1 "previousPage":1 "data":[ 0:{ "serviceType":1 "lastUrgeTime":0 "queueId":0 "sopCateId":252011 "totalUrgeMemo":"" "taskGmtModified":0 "departmentId":10 "groupId":0 "channelType":1 "questionInfo":"" "templateId":0 "deadLine":0 "srType":30701 "caseId":2000000001165962}`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 接口调用是否成功。
     * @example `true`
     */
    Success: boolean;
}
