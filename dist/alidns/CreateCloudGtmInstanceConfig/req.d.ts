export interface CreateCloudGtmInstanceConfigRequest {
    /**
     * 返回值语言，取值：
     * - zh-CN：中文。
     * - en-US：英文。
     * @example `en-US`
     */
    "AcceptLanguage"?: string;
    /**
     * 用户生成的请求token。用于保证请求的幂等性。该参数值可自定义，但是要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `1ae05db4-10e7-11ef-b126-00163e24**22`
     */
    "ClientToken"?: string;
    /**
     * 全局流量管理3.0实例ID，唯一标识产品实例。
     * @example `gtm-cn-jmp3qnw**03`
     */
    "InstanceId"?: string;
    /**
     * 接入域名配置模式：
     * - sys_assign：系统分配（此模式已不支持）
     * - custom：自定义，用户需选择实例所在账号下的域名进行关联，并输入主机记录以生成接入域名
     * @example `custom`
     */
    "ScheduleZoneMode"?: string;
    /**
     * zone名称，即GTM接入域名的父Zone。一般为GTM实例所在账号下，在云解析DNS控制台的托管域名，支持主域和子域。
     * @example `example.com`
     */
    "ScheduleZoneName"?: string;
    /**
     * GTM接入域名的主机记录。
     * @example `www`
     */
    "ScheduleHostname"?: string;
    /**
     * 接入域名的解析记录类型：
     * - A：IPv4地址
     * - AAAA：IPv6地址
     * - CNAME：域名
     * @example `A`
     */
    "ScheduleRrType"?: string;
    /**
     * 全局TTL，单位是秒。接入域名解析到地址池中地址的TTL值，影响解析记录在运营商LocalDNS中的缓存时间，支持自定义TTL值。
     * @example `30`
     */
    "Ttl"?: number;
    /**
     * 备注。
     * @example `test`
     */
    "Remark"?: string;
    /**
     * 域名实例的启用状态：
     * - enable：启用状态，GTM实例智能调度策略生效；
     * - disable：禁用状态，GTM实例智能调度策略不可用；
     * @example `enable`
     */
    "EnableStatus"?: string;
}
