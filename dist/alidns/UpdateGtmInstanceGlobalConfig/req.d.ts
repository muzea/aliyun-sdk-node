export interface UpdateGtmInstanceGlobalConfigRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * GTM实例ID。
     * @example `gtm-cn-cs02xyk4a**`
     */
    "InstanceId": string;
    /**
     * 实例名称。
     * > 首次更新必填，再次更新则非必填。
     * @example `测试实例`
     */
    "InstanceName"?: string;
    /**
     * 全局TTL。
     * @example `60`
     */
    "Ttl"?: number;
    /**
     * 主域名。
     * > 首次更新必填，再次更新非必填。
     * @example `dns-example.top`
     */
    "UserDomainName"?: string;
    /**
     * 均衡策略。取值：
     * - **ALL_RR**: 负载均摊
     * - **RATIO**：加权轮询
     * > 首次更新必填，再次更新非必填。
     * @example `RATIO`
     */
    "LbaStrategy"?: string;
    /**
     * 报警组。目前仅支持一个报警组。
     * > 首次更新必填，再次更新非必填。
     * @example `[\"研发组\"]`
     */
    "AlertGroup"?: string;
    /**
     * 接入方式。取值：
     * - **SYSTEM_ASSIGN**：系统分配
     * - **CUSTOM**：自定义
     * @example `SYSTEM_ASSIGN`
     */
    "CnameMode"?: string;
    /**
     * **CnameMode**为**CUSTOM**接入时必传，必须是主域名。
     * @example `dns-example.top`
     */
    "CnameCustomDomainName"?: string;
}
