export interface UpdateDnsGtmInstanceGlobalConfigRequest {
    /**
     * 部分返回参数语言。默认值：en。取值范围：en、zh、ja。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * GTM实例ID。
     * @example `gtm-cn-wwo3a3hbz**`
     */
    "InstanceId": string;
    /**
     * 实例名称：首次更新必填，再次更新则非必填。
     * @example `test-1`
     */
    "InstanceName"?: string;
    /**
     * 全局TTL。
     * @example `60`
     */
    "Ttl"?: number;
    /**
     * 公网域名接入方式：
     * - SYSTEM_ASSIGN:系统分配（此选项功能关闭）
     * - CUSTOM:自定义
     * @example `CUSTOM`
     */
    "PublicCnameMode"?: string;
    /**
     * 业务域名（公网）。
     * @example `example.com`
     */
    "PublicUserDomainName"?: string;
    /**
     * CNAME接入域名（公网）：主域名，且当为自定义接入时为必填。
     * > 此处应填入主域名，不包含PublicRr参数内容
     * @example `gtm-003.com`
     */
    "PublicZoneName"?: string;
    /**
     * 报警组(List<String>的JSON格式)。
     * @example `["test1","test2"]`
     */
    "AlertGroup"?: string;
    /**
     * CNAME接入域名类型：
     * - PUBLIC: 公网型
     * @example `PUBLIC`
     */
    "CnameType"?: string;
    /**
     * 报警配置列表。
     */
    "AlertConfig"?: {
        /**
         * 是否配置短信通知：
         * - true：已配置
         * - false｜null : 未配置
         * @example `true`
         */
        SmsNotice: boolean;
        /**
         * 报警事件类型：
         * - ADDR_ALERT：地址不可用
         * - ADDR_RESUME：地址恢复可用
         * - ADDR_POOL_GROUP_UNAVAILABLE：地址池集合不可用
         * - ADDR_POOL_GROUP_AVAILABLE：地址池集合恢复可用
         * - ACCESS_STRATEGY_POOL_GROUP_SWITCH：主备地址池切换
         * - MONITOR_NODE_IP_CHANGE：监控节点IP地址变更
         * @example `ADDR_ALERT`
         */
        NoticeType: string;
        /**
         * 是否配置邮件通知：
         * - true：已配置
         * - false｜null : 未配置
         * @example `true`
         */
        EmailNotice: boolean;
        /**
         * 是否需要钉钉报警：
         * - true-需要
         * - false-不需要
         * @example `true`
         */
        DingtalkNotice: boolean;
    }[];
    /**
     * CNAME接入域名（公网）：主机名
     * @example `test.rr`
     */
    "PublicRr"?: string;
    /**
     * 是否强制更新。
     * - true-强制更新，不进行冲突提示。
     * - false|null-不强制更新，若遇冲突则提示。
     * @example `true`
     */
    "ForceUpdate"?: boolean;
}
