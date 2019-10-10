interface RerunFlowRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 项目ID。
    * @example `FP-3535FE0BE5224A47`
    */ "ProjectId": string;
    /**
    * 工作流实例ID。
    * @example `FI-9DDAAA3ADA5F6FA2`
    */ "FlowInstanceId": string;
    /**
    * 是否只重跑失败节点。
    * @example `true`
    */ "ReRunFail"?: boolean;
}
export { RerunFlowRequest };