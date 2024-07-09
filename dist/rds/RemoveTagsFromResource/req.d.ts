export interface RemoveTagsFromResourceRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 代理模式ID。
     * @example `API`
     */
    "proxyId"?: string;
    /**
     * 地域ID，可以通过接口DescribeRegions查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 需要解绑的一组标签，包括TagKey和TagValue。格式：{"key1":"value1"}。
     * >TagKey不能为空，TagValue可以为空。
     * @example `{"key1":"value1"}`
     */
    "Tags"?: string;
    /**
     * 要解绑的第一组标签的Tagkey。需要解绑的标签，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
     * @example `key1`
     */
    "Tag.1.key"?: string;
    /**
     * 要解绑的第二组标签的Tagkey。需要解绑的标签，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
     * @example `key2`
     */
    "Tag.2.key"?: string;
    /**
     * 要解绑的第三组标签的Tagkey。需要解绑的标签，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
     * @example `key3`
     */
    "Tag.3.key"?: string;
    /**
     * 要解绑的第四组标签的Tagkey。需要解绑的标签，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
     * @example `key4`
     */
    "Tag.4.key"?: string;
    /**
     * 要解绑的第五组标签的Tagkey。需要解绑的标签，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
     * @example `key5`
     */
    "Tag.5.key"?: string;
    /**
     * 要解绑的第一组标签的TagValue。需要解绑的标签，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
     * @example `value1`
     */
    "Tag.1.value"?: string;
    /**
     * 要解绑的第二组标签的TagValue。需要解绑的标签，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
     * @example `value2`
     */
    "Tag.2.value"?: string;
    /**
     * 要解绑的第三组标签的TagValue。需要解绑的标签，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
     * @example `value4`
     */
    "Tag.3.value"?: string;
    /**
     * 要解绑的第四组标签的TagValue。需要解绑的标签，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
     * @example `value4`
     */
    "Tag.4.value"?: string;
    /**
     * 要解绑的第五组标签的TagValue。需要解绑的标签，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
     * @example `value5`
     */
    "Tag.5.value"?: string;
    /**
     * 资源组ID。可调用ListResourceGroups获取。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
