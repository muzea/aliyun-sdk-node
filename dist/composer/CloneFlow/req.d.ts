export interface CloneFlowRequest {
    /**
     * 需要克隆的工作流ID
     * @example `lc-uf6yrfwxpe6wkw`
     */
    "FlowId": string;
    /**
     * 需要克隆的版本，如果不指定，则默认克隆最新版本。
     * @example `ve-uf6bwdtvid7o25`
     */
    "VersionId"?: string;
}
