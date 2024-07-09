export interface TagResourcesRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
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
     * 资源ID，最多 50个子项。
     */
    "ResourceId": string[];
    /**
     * 标签列表，最多包含20个子项。
     */
    "Tag": {
        /**
         * 为轻量资源指定的标签键。N 的取值范围：1~20。
         * 一旦传入该值，则不允许为空字符串。最多支持 64 个字符，不能以 aliyun 和 acs:开头，不能包含 http://或者 https://。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 为轻量资源指定的标签值。N 的取值范围：1~20。
         * 一旦传入该值，可以为空字符串。最多支持 64 个字符，不能包含 http://或者 https://。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
