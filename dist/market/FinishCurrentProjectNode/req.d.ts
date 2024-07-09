export interface FinishCurrentProjectNodeRequest {
    /**
     * 云市场订单实例ID
     * @example `4****89`
     */
    "InstanceId": string;
    /**
     * 当前流程节点ID
     * @example `1924`
     */
    "NodeId": number;
    /**
     * 提交表单内容，格式为JSON。
     * 示例代码如下：
     * ```
     * {
     *     "TFD0": "Mr.Go",
     *     "TFD1": "1330010xxxx",
     *     "TFD2": "北京市朝阳区望京街道X区Y号"
     * }
     * ```
     * @example `{"TFD0": "Mr.Go","TFD1": "1330010xxxx","TFD2": "北京市朝阳区望京街道X区Y号" }`
     */
    "TemplateForm"?: string;
    /**
     * 备注信息
     * @example `收货地址已提交，请尽快安排发货。`
     */
    "Remark"?: string;
}
