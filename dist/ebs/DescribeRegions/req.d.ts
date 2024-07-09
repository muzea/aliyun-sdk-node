export interface DescribeRegionsRequest {
    /**
     * 资源类型。取值范围：
     * - ear：异步复制。
     * - lens：数据洞察。
     * - dbsc: 专属块存储集群。
     * 未指定资源类型时，将会返回所有资源类型支持的地域信息。
     * @example `ear`
     */
    "ResourceType"?: string;
    /**
     * 地域和可用区名称的语言类型。对应返回参数中`LocalName`的返回值。取值范围：
     * - zh-CN：中文。
     * - en-US：英文。
     * - ja：日文。
     * 默认值：zh-CN。
     * @example `zh-CN`
     */
    "AcceptLanguage"?: string;
    /**
     * 用户访问端的地域ID。
     * @example `cn-beijing`
     */
    "RegionId"?: string;
}
