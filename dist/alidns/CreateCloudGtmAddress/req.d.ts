export interface CreateCloudGtmAddressRequest {
    /**
     * 返回值语言，取值：
     * - zh-CN：中文。
     * - en-US：英文。
     * @example `zh-CN`
     */
    "AcceptLanguage"?: string;
    /**
     * 用户生成的请求token。用于保证请求的幂等性。注意  由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `1ae05db4-10e7-11ef-b126-00163e24**22`
     */
    "ClientToken"?: string;
    /**
     * 地址名称。
     * @example `Address-1`
     */
    "Name": string;
    /**
     * 地址类型：
     * - IPv4
     * - IPv6
     * - domain
     * @example `IPv4`
     */
    "Type": string;
    /**
     * IP地址或者域名。
     * @example `223.5.XX.XX`
     */
    "Address": string;
    /**
     * 地址归属信息。
     * @example `当前版本不支持传入此参数，请不要传入参数。`
     */
    "AttributeInfo"?: string;
    /**
     * 备注。
     * @example `test`
     */
    "Remark"?: string;
    /**
     * 表示该地址当前启用状态：
     * - enable：启用状态
     * - disable：禁用状态
     * @example `enable`
     */
    "EnableStatus": string;
    /**
     * 地址探测异常切换方式：
     * - auto：自动模式（根据健康检查探测结果确定，探测异常停止解析，探测正常恢复解析）
     * - manual：手动模式（异常状态下停止解析，健康检查正常也不会恢复解析；正常状态下恢复解析，健康检查异常也只是告警，但不会停止解析。）
     * @example `auto`
     */
    "AvailableMode": string;
    /**
     * 当地址探测异常切换模式为**manual**时，地址设置的可用状态：
     * - available：正常，此状态下该地址正常解析，健康检查异常也只是告警，但不会停止解析；
     * - unavailable：异常，此状态下停止解析，健康检查正常也不会恢复解析；
     * @example `available`
     */
    "ManualAvailableStatus"?: string;
    /**
     * 地址健康状态判定条件（HealthTasks 不为空时必填）：
     * - any_ok：所有探测模板至少一个探测正常
     * - p30_ok：所有探测模板至少30%探测正常
     * - p50_ok：所有探测模板至少50%探测正常
     * - p70_ok：所有探测模板至少70%探测正常
     * - all_ok：所有探测模板全部探测正常
     * @example `p50_ok`
     */
    "HealthJudgement": string;
    /**
     * 地址关联的健康探测任务列表。
     */
    "HealthTasks"?: {
        /**
         * 健康检查探测的目标地址服务端口，当健康检查选择Ping协议时，不支持服务端口的配置。
         * @example `80`
         */
        Port: number;
        /**
         * 地址关联的健康探测模板ID。
         * @example `mtp-89518052425100**80`
         */
        TemplateId: string;
    }[];
}
