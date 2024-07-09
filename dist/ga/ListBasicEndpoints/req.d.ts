export interface ListBasicEndpointsRequest {
    /**
     * 全球加速所在的地域ID，仅取值**cn-hangzhou**。
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
     * 待查询的基础型全球加速实例终端节点所属的终端节点组ID。
     * @example `epg-bp1dmlohjjz4kqaun****`
     */
    "EndpointGroupId": string;
    /**
     * 待查询的基础型全球加速实例终端节点类型。取值：
     * - **ENI**：阿里云弹性网卡。
     * - **SLB**：阿里云CLB实例。
     * - **ECS**：阿里云ECS实例。
     * - **NLB**：阿里云NLB实例。
     * @example `ENI`
     */
    "EndpointType"?: string;
    /**
     * 待查询的基础型全球加速实例终端节点ID。
     * @example `ep-bp14sz7ftcwwjgrdm****`
     */
    "EndpointId"?: string;
    /**
     * 待查询的基础型全球加速实例终端节点的名称。
     * 名称长度为1~128个字符，以大小写字母或中文开头，可包含数字、半角句号（.）下划线（_）和短划线（-）。
     * @example `ep01`
     */
    "Name"?: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**50**。默认值：**10**。
     * @example `10`
     */
    "MaxResults"?: number;
}
