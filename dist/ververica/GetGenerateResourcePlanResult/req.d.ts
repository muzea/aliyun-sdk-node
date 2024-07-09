export interface GetGenerateResourcePlanResultRequest {
    /**
     * 工作空间ID。
     * @example `a14bd5d90a****`
     */
    "workspace": string;
    /**
     * 项目空间名称。
     * @example `default-namespace`
     */
    "namespace": string;
    /**
     * 异步工单ID，可以通过提交异步操作获取。
     * @example `88a8fc49-e090-430a-85d8-3ee8c79c****`
     */
    "ticketId": string;
}
