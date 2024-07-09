export interface ListListenerCertificatesRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 全球加速实例ID。
     * @example `ga-bp1odcab8tmno0hdq****`
     */
    "AcceleratorId": string;
    /**
     * 证书的角色。取值：
     * - **default**：默认证书。
     * - **additional**：扩展证书。
     * 不传入值时，默认证书和扩展证书都将返回在证书列表中。
     * @example `default`
     */
    "Role"?: string;
    /**
     * 监听ID。
     * @example `lsr-bp1bpn0kn908w4nbw****`
     */
    "ListenerId": string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 本次读取的最大数据记录数量。
     * 取值范围：**1**~**50**，默认值为**20**。
     * @example `50`
     */
    "MaxResults"?: number;
}
