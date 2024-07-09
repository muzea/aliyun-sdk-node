export interface CreateVpconnFromVbrRequest {
    /**
     * 共享专线的付费方式。取值：
     * - **PayByPhysicalConnectionOwner**：表示共享专线关联的物理专线的拥有者付费。
     * - **PayByVirtualPhysicalConnectionOwner**：表示共享专线的拥有者付费。
     * @example `PayByVirtualPhysicalConnectionOwner`
     */
    "OrderMode"?: string;
    /**
     * 跨账号的VBR实例ID。
     * @example `vbr-bp136flp1mf8mlq6r****`
     */
    "VbrId": string;
    /**
     * 客户端Token用于保证请求的幂等性。
     * 要保证Client Token在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `CBCE910E-D396-4944-8****`
     */
    "Token"?: string;
    /**
     * 是否只预检此次请求。取值范围：
     * - **true**：发送检查请求，不会转换共享专线形式。检查项包括是否填写了必需参数、请求格式、实例状态。如果检查不通过，则返回对应错误。如果检查通过，则返回对应请求ID。
     * - **false**（默认值）：发送正常请求，通过检查后直接转换共享专线形式。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 共享专线所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
