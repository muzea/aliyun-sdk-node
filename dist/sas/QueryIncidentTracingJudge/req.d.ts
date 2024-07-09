export interface QueryIncidentTracingJudgeRequest {
    /**
     * 待查询的事件ID。
     * > 您可以调用[DescribeCloudSiemEvents](~~2621307~~)接口获取事件ID。
     * @example `d1d7a612-0dc2-413a-aa8e-9c7c88d8****`
     */
    "IncidentId": string;
}
