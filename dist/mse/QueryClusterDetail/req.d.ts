export interface QueryClusterDetailRequest {
    /**
     * 实例ID。
     * @example `mse-cn-st21ri2****`
     */
    "InstanceId"?: string;
    /**
     * 订单ID。
     * @example `20576750143****`
     */
    "OrderId"?: string;
    /**
     * 是否查询ACL。
     * @example `false`
     */
    "AclSwitch"?: boolean;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
