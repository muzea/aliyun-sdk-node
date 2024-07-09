export interface DescribeDnsGtmInstanceResponse {
    /**
     * 实例到期时间（时间戳）。
     * @example `1602656937000`
     */
    ExpireTimestamp: number;
    /**
     * 唯一请求识别码。
     * @example `84314904-D047-4176-A0EC-256D7F68C7F5`
     */
    RequestId: string;
    /**
     * 资源组id。
     * @example `resourcegroupid1`
     */
    ResourceGroupId: string;
    /**
     * 实例id。
     * @example `gtm-cn-wwo3a3hbz**`
     */
    InstanceId: string;
    /**
     * 探测任务总数。
     * @example `100`
     */
    TaskQuota: number;
    /**
     * 实例配置信息。
     */
    Config: {
        /**
         * 全局TTL。
         * @example `60`
         */
        Ttl: number;
        /**
         * 报警组(List<String>的JSON格式)。
         * @example `["test1","test2"]`
         */
        AlertGroup: string;
        /**
         * cname接入域名类型：
         * - PUBLIC: 公网型
         * @example `PUBLIC`
         */
        CnameType: string;
        /**
         * 访问策略模式：
         * - LATENCY：基于延时
         * - GEO：基于地理位置
         * @example `GEO`
         */
        StrategyMode: string;
        /**
         * 实例名称。
         * @example `test`
         */
        InstanceName: string;
        /**
         * 公网cname接入方式：
         * - CUSTOM: 自定义
         * - SYSTEM_ASSIGN: 系统分配（此功能已关闭）
         * @example `CUSTOM`
         */
        PublicCnameMode: string;
        AlertConfig: {
            /**
             * 报警通知方式。
             */
            AlertConfig: {
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
                 * 是否配置钉钉通知：
                 * - true：已配置
                 * - false｜null ：未配置
                 * @example `true`
                 */
                DingtalkNotice: boolean;
            }[];
        };
        /**
         * 公网用户业务域名。
         * @example `example.com`
         */
        PublicUserDomainName: string;
        /**
         * 公网接入域名。
         * @example `
        gtm-cn-wwo3a3hbz**.example.com`
         */
        PubicZoneName: string;
        /**
         * 公网接入主机名
         * @example `test.rr`
         */
        PublicRr: string;
    };
    /**
     * 实例创建时间。
     * @example `2020-10-14T06:58Z`
     */
    CreateTime: string;
    /**
     * 短信通知总数。
     * @example `100`
     */
    SmsQuota: number;
    /**
     * 实例版本。
     * @example `standard`
     */
    VersionCode: string;
    /**
     * 付费类型
     * - Subscription：预付费
     * @example `Subscription`
     */
    PaymentType: string;
    /**
     * 到期日。
     * @example `2020-10-14T06:58Z`
     */
    ExpireTime: string;
    /**
     * 实例创建时间（时间戳）。
     * @example `1602656937000`
     */
    CreateTimestamp: number;
    /**
     * 已使用的配额。
     */
    UsedQuota: {
        /**
         * 已发送邮件总数。
         * @example `123`
         */
        EmailUsedCount: number;
        /**
         * 已创建探测任务数。
         * @example `123`
         */
        TaskUsedCount: number;
        /**
         * 已发送短信总数。
         * @example `123`
         */
        SmsUsedCount: number;
        /**
         * 已发送钉钉总数。
         * @example `123`
         */
        DingtalkUsedCount: number;
    };
}
