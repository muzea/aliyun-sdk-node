interface DeleteFlowLogRequest {
    /**
    * 流日志的地域ID。
    * @example `cn-shanghai`
    */ "RegionId": string;
    /**
    * 流日志实例ID。
    * @example `fl-7a56mar1kfw9vj****`
    */ "FlowLogId": string;
    "OwnerId"?: number;
}
export { DeleteFlowLogRequest };