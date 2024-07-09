export interface DisableSmartAGDpiMonitorRequest {
    /**
     * 智能接入网关实例所属地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-vwmylqc9521p5l****`
     */
    "SmartAGId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `02fb3da4-130****`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：表示只预检此次请求合法性，不会开启或关闭智能接入网关实例的DPI功能。检查项包括是否填写了必需参数、请求格式、实例状态等。如果检查不通过，则返回对应错误；如果检查通过，则返回对应请求ID。
     * - **false**（默认）：表示发送正常请求，通过检查后直接关闭智能接入网关实例的DPI监控功能。
     * @example `false`
     */
    "DryRun"?: boolean;
}
