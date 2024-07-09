export interface RollbackCurrentProjectNodeRequest {
    /**
     * 云市场订单实例ID
     * @example `4****89`
     */
    "InstanceId": string;
    /**
     * 当前操作流程节点ID
     * @example `1925`
     */
    "NodeId": number;
    /**
     * 打回原因备注
     * @example `尊敬的顾客您好，您提交的收货地址存在多个匹配结果，请您核对后再重新提交。`
     */
    "Remark"?: string;
}
