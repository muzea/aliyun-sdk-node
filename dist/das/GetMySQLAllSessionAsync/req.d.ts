export interface GetMySQLAllSessionAsyncRequest {
    /**
     * 实例ID。
     * >仅支持RDS MySQL、PolarDB MySQL版和PolarDB-X 2.0实例。
     * @example `rm-2ze8g2am97624****
    `
     */
    "InstanceId": string;
    /**
     * 节点ID。
     * > 对于PolarDB MySQL版实例，需要提供节点ID。不指定节点ID时，默认返回主节点的会话数据。
     * @example `pi-wz954ryd8f893****`
     */
    "NodeId"?: string;
    /**
     * 异步请求的ID。
     * > 异步调用方式不会立即返回完整结果，首先需要调用该接口获取**ResultId**，然后使用返回数据的**ResultId**，重新发起调用，直到**isFinish**取值为**true**时，返回完整结果。即获取一次完整数据，至少需要调用该接口两次。
     * @example `async__507044db6c4eadfa2dab9b084e80****`
     */
    "ResultId"?: string;
}
