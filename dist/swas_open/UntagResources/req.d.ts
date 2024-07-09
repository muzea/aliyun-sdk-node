export interface UntagResourcesRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 资源类型，取值范围：
     * - instance：实例。
     * - snapshot：快照。
     * - customimage：自定义镜像。
     * - command：命令。
     * - firewallrule：防火墙规则。
     * - disk：磁盘。
     * @example `instance`
     */
    "ResourceType": string;
    /**
     * 是否全部删除，只针对TagKey.N为空时有效。 取值范围： true，false，默认是 false。
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 资源ID，最多50个子项。
     */
    "ResourceId": string[];
    /**
     * 标签键，最多20个子项。
     */
    "TagKey"?: string[];
}
