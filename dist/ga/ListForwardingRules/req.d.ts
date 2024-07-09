export interface ListForwardingRulesRequest {
    /**
     * 全球加速实例所属的地域ID，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `02fb3da4****`
     */
    "ClientToken"?: string;
    /**
     * 监听实例ID。
     * @example `lsr-bp1s0vzbi5bxlx5pw****`
     */
    "ListenerId": string;
    /**
     * 全球加速实例ID。
     * @example `ga-bp17frjjh0udz4qzk****`
     */
    "AcceleratorId": string;
    /**
     * 转发策略ID。
     * @example `frule-bp19a3t3yzr21q3****`
     */
    "ForwardingRuleId"?: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**。默认值：**20**。
     * @example `20`
     */
    "MaxResults": number;
}
