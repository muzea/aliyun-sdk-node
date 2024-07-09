export interface ModifySagWanSnatRequest {
    /**
     * 智能接入网关实例地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-whfn****`
     */
    "SmartAGId": string;
    /**
     * 绑定的智能接入网关设备序列号。
     * @example `sag32a30****`
     */
    "SmartAGSn": string;
    /**
     * 是否打开SNAT功能。取值：
     * - **ENABLE**：开启SNAT功能。
     * - **DISABLE**：关闭SNAT功能。
     * @example `ENABLE`
     */
    "Snat": string;
}
