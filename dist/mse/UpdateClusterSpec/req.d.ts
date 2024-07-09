export interface UpdateClusterSpecRequest {
    /**
     * 集群ID。
     * @example `mse-09k1q11****`
     */
    "ClusterId"?: string;
    /**
     * 实例ID。
     * @example `mse-cn-st21ri2****`
     */
    "InstanceId": string;
    /**
     * 目标节点数量。
     * @example `3`
     */
    "InstanceCount"?: number;
    /**
     * 目标引擎规格。
     * @example `MSE_SC_2_4_200_c`
     */
    "ClusterSpecification"?: string;
    /**
     * MSE版本。
     * @example `mse_pro
    `
     */
    "MseVersion"?: string;
    /**
     * 公网带宽
     */
    "PubNetworkFlow"?: number;
    /**
     * 是否下单之后自动支付，如果此值为false，此接口将会返回订单支付url，可手动确认支付
     */
    "AutoPay"?: boolean;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
