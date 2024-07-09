export interface SearchCloudGtmInstanceConfigsRequest {
    /**
     * 返回结果显示的语言。取值：
     * - zh-CN：中文
     * - en-US：英文
     * @example `zh-CN`
     */
    "AcceptLanguage"?: string;
    /**
     * 用户生成的请求token。用于保证请求的幂等性。该参数值可自定义，但是要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `1ae05db4-10e7-11ef-b126-00163e24**22`
     */
    "ClientToken"?: string;
    /**
     * 当前页数，起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值**100**，默认为**20**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 调度实例id。
     * @example `gtm-cn-wwo3a3hbz**`
     */
    "InstanceId"?: string;
    /**
     * zone名称，即GTM接入域名的父Zone。一般为GTM实例所在账号下，在云解析DNS控制台的托管域名，支持主域和子域。
     * @example `example.com`
     */
    "ScheduleZoneName"?: string;
    /**
     * GTM接入域名，ScheduleHostname+ScheduleZoneName。
     * @example `www.example.com`
     */
    "ScheduleDomainName"?: string;
    /**
     * 域名实例的启用状态：
     * - enable：启用状态，GTM实例智能调度策略生效；
     * - disable：禁用状态，GTM实例智能调度策略不可用；
     * @example `enable`
     */
    "EnableStatus"?: string;
    /**
     * 域名实例的备注。
     * @example `test`
     */
    "Remark"?: string;
    /**
     * 域名实例健康状态：
     * - ok：正常，接入域名引用的所有地址池全部可用。
     * - ok_alert：警告，接入域名引用的所有地址池部分不可用。警告状态下，可用的地址池正常解析，不可用的地址池停止解析
     * - exceptional：异常，接入域名引用的所有地址池全部不可用。此时，使用实例所引用的顺序号较小的非空地址池中的地址进行兜底解析，尽可能帮助客户端获得解析结果。
     * @example `ok`
     */
    "HealthStatus"?: string;
    /**
     * 域名实例服务可用状态：
     * - available：可用，域名“启用”且健康状态为“正常”，接入域名的服务可用状态为“可用”；
     * - unavailable：不可用，域名“禁用”或健康状态为“异常”，接入域名的服务可用状态为“不可用”；
     * @example `available`
     */
    "AvailableStatus"?: string;
}
