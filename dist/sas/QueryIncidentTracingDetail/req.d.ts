export interface QueryIncidentTracingDetailRequest {
    /**
     * 待查询的事件ID。
     * > 您可以调用[DescribeCloudSiemEvents](~~2621307~~)接口获取事件ID。
     * @example `184892fc5245b3ce8c3316434c94****`
     */
    "IncidentId": string;
}
