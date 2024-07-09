export interface UpdateNodeRunModeRequest {
    /**
     * 运行的环境，包括开发环境（DEV）和生产环境（PRD）。
     * @example `PROD`
     */
    "ProjectEnv": string;
    /**
     * 节点的ID，您可以调用[ListNodes](~~173979~~)接口获取节点ID。
     * @example `1234`
     */
    "NodeId": number;
    /**
     * 需要对目标节点执行的操作。取值如下：
     * - 0：表示解冻目标节点。
     * - 2：表示冻结目标节点。
     * @example `0`
     */
    "SchedulerType": number;
}
