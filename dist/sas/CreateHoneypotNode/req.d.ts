export interface CreateHoneypotNodeRequest {
    /**
     * 管理节点名称。
     * @example `manageNode`
     */
    "NodeName": string;
    /**
     * 可用探针数量。
     * @example `20`
     */
    "AvailableProbeNum"?: number;
    /**
     * 是否允许蜜罐访问外网。取值：
     * - **true**：允许
     * - **false**：禁止
     * @example `true`
     */
    "AllowHoneypotAccessInternet"?: boolean;
    /**
     * 放行网段集合。
     */
    "SecurityGroupProbeIpList"?: string[];
}
