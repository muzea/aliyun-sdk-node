export interface UpdateCloudGtmAddressRequest {
    /**
     * 返回结果显示的语言。取值：
     * - zh-CN：中文
     * - en-US：英文
     * @example `en-US`
     */
    "AcceptLanguage"?: string;
    /**
     * 用户生成的请求token。用于保证请求的幂等性。该参数值可自定义，但是要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `1ae05db4-10e7-11ef-b126-00163e24**22`
     */
    "ClientToken"?: string;
    /**
     * 地址的ID，地址唯一标识码。
     * @example `addr-89518218114368**92`
     */
    "AddressId": string;
    /**
     * 地址名称。
     * @example `Address-1`
     */
    "Name"?: string;
    /**
     * IP地址或者域名。
     * @example `223.5.XX.XX`
     */
    "Address"?: string;
    /**
     * 地址归属信息。
     * @example `当前版本不支持此参数，不需要传入此参数。`
     */
    "AttributeInfo"?: string;
    /**
     * 地址健康状态判定条件（HealthTasks 不为空时必填）：
     * - 所有探测模板至少一个探测正常（any_ok）
     * - 所有探测模板至少30%探测正常（p30_ok）
     * - 所有探测模板至少50%探测正常（p50_ok）
     * - 所有探测模板至少70%探测正常（p70_ok）
     * - 所有探测模板全部探测正常（all_ok）
     * @example `p50_ok`
     */
    "HealthJudgement"?: string;
    /**
     * 健康探测任务列表。
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
