export interface CreateApplicationMonitorRequest {
    /**
     * 全球加速实例所属的地域ID，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 需要探测的全球加速实例ID。
     * @example `ga-bp1odcab8tmno0hdq****`
     */
    "AcceleratorId": string;
    /**
     * 需要探测的监听实例ID。
     * @example `lsr-bp1bpn0kn908w4nbw****`
     */
    "ListenerId": string;
    /**
     * 源站探测的任务名称。
     * 名称长度为 1~128 个字符，以大小写字母或中文开头，可包含数字、半角句号（.）下划线（_）和短划线（-）。
     * @example `task1`
     */
    "TaskName": string;
    /**
     * 需要探测的URL或IP地址。
     * @example `https://www.aliyun.com`
     */
    "Address": string;
    /**
     * 源站探测任务对应监听协议类型的高级扩展选项。不同源站探测任务的监听协议类型对应不同的扩展选项。
     * @example `{ "http_method": "get","header": "key:asd","acceptable_response_code": "500","cert_verify": true }`
     */
    "OptionsJson"?: string;
    /**
     * 是否开启自动诊断功能。取值：
     * - **true**：是。
     * - **false**（默认值）：否。
     * @example `false`
     */
    "DetectEnable"?: boolean;
    /**
     * 设置自动诊断触发阈值。单位：%。
     * 取值范围：**0**~**100**。
     * 默认值：**0**，表示不触发自动诊断。
     * @example `0`
     */
    "DetectThreshold"?: number;
    /**
     * 触发自动诊断需要达到触发阈值的次数。
     * 取值范围：**1**~**20**。默认值：**1**。
     * @example `1`
     */
    "DetectTimes"?: number;
    /**
     * 自动诊断触发沉默时间。表示自动诊断触发后，未恢复到正常，间隔多久触发一次自动诊断。
     * 可用率连续多次（即设置的**DetectTimes**）低于自动诊断触发阈值时，触发自动诊断，如果可用率在自动诊断触发沉默时间内持续低于自动诊断触发阈值，在自动诊断触发沉默时间内不会重复出发自动诊断；如果可用率在自动诊断触发沉默时间后仍未恢复正常，则再次触发自动诊断。
     * 单位：秒。取值范围：**300**~**86400**。默认值：**300**。
     * @example `300`
     */
    "SilenceTime"?: number;
}
