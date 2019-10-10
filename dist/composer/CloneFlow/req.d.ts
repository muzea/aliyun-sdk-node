interface CloneFlowRequest {
    "RegionId"?: string;
    /**
    * 需要克隆的工作流编排实例的 ID
    * @example `lc-abcdefg`
    */ "FlowId": string;
    /**
    * 需要克隆的版本，如果不指定，则默认克隆最新版本
    * @example `10`
    */ "VersionId"?: number;
}
export { CloneFlowRequest };