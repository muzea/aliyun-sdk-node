export interface UpdateCloudGtmInstanceConfigBasicRequest {
    /**
     * 返回值语言，取值：
     *
     * - **zh-CN**：中文。
     * - **en-US**：英文。
     * @example `en-US`
     */
    "AcceptLanguage"?: string;
    /**
     * 用户生成的请求token。用于保证请求的幂等性。注意  由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `1ae05db4-10e7-11ef-b126-00163e24**22`
     */
    "ClientToken"?: string;
    /**
     * 本次操作需要修改的全局流量管理3.0实例id。
     * @example `gtm-cn-wwo3a3hbz**`
     */
    "InstanceId"?: string;
    /**
     * 域名实例配置id，相同接入域名、相同的GTM实例可以同时配置A和AAAA记录，此情况下相同的GTM实例会出现2个域名实例配置，ConfigId可以唯一标识域名实例配置。标识本次修改的配置对象。
     * @example `Config-000**11`
     */
    "ConfigId"?: string;
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
     * 调度实例的TTL。
     * @example `全局TTL（单位：秒），接入域名解析到地址池中地址的TTL值，影响解析记录在运营商LocalDNS中的缓存时间，支持自定义TTL值。`
     */
    "Ttl"?: number;
}
