export interface ResumeProjectRequest {
    /**
     * 云市场订单实例ID
     * @example `4****89`
     */
    "InstanceId": string;
    /**
     * 操作流程节点ID
     * @example `1922`
     */
    "NodeId": number;
    /**
     * 备注原因
     * @example `仓库库存已补充，可安排发货。`
     */
    "Remark"?: string;
}
