export interface PauseProjectRequest {
    /**
     * 云市场订单实例ID
     * @example `4****89`
     */
    "InstanceId": string;
    /**
     * 当前操作流程节点ID
     * @example `1922`
     */
    "NodeId": number;
    /**
     * 备注原因
     * @example `等待与仓库确认库存，目前库存显示异常。`
     */
    "Remark"?: string;
}
