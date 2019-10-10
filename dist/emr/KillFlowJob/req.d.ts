interface KillFlowJobRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 项目ID。
    * @example `FP-3535FE0BE5224A47`
    */ "ProjectId": string;
    /**
    * 节点实例ID。
    * @example `FJI-9DDAAA3ADA5F6FA2`
    */ "JobInstanceId": string;
}
export { KillFlowJobRequest };