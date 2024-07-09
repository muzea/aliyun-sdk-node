export interface ListTagResourcesRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000	`
     */
    "ClientToken"?: string;
    /**
     * 下一个查询开始Token。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6nOc1nj4M9UaAZ/I8db***`
     */
    "NextToken"?: string;
    /**
     * 资源类型，取值范围：
     * - instance：实例。
     * - snapshot：快照。
     * - customimage：镜像。
     * - command：命令。
     * - firewallrule：防火墙规则。
     * - disk：磁盘。
     * @example `instance`
     */
    "ResourceType": string;
    /**
     * 资源ID,最多 50个子项。
     */
    "ResourceId"?: string[];
    /**
     * 标签列表，最多包含20个子项。
     */
    "Tag"?: {
        /**
         * 轻量资源的标签键。标签键长度的取值范围：1~64。N 的取值范围：1~20。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 轻量资源的标签值。标签值长度的取值范围：1~64。N 的取值范围：1~20。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
