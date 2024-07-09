export interface ListTLSCipherPoliciesRequest {
    /**
     * 负载均衡实例地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * TLS策略ID。
     * @example `tls-bp17elso1h323r****`
     */
    "TLSCipherPolicyId"?: string;
    /**
     * TLS策略名称。长度为2~200个英文或中文字符，必须以大小写字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `TLSPolicy-test****`
     */
    "Name"?: string;
    /**
     * 是否返回关联的监听信息。取值：
     * - **true**：返回。
     * - **false**（默认）：不返回。
     * @example `false`
     */
    "IncludeListener"?: boolean;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 本次读取的最大TLS策略数，取值：**1**~**100**。设置为空时，默认值为**20**。
     * @example `20`
     */
    "MaxItems"?: number;
}
