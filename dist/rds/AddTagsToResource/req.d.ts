export interface AddTagsToResourceRequest {
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
     * @example `cn-hagnzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * >支持传入最多30个实例ID进行批量操作，用英文逗号（,）隔开。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 需要绑定的Tag列表，包括TagKey和TagValue。单次最多支持传入5组值，格式：{"key1":"value1","key2":"value2"...}。
     * >TagKey不能为空，TagValue可以为空。
     * @example `{"key1":"value1","key2":""}`
     */
    "Tags"?: string;
    /**
     * 当前第一组key。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
     * @example `key1`
     */
    "Tag.1.key"?: string;
    /**
     * 当前第二组key。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
     * @example `key2`
     */
    "Tag.2.key"?: string;
    /**
     * 当前第三组key。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
     * @example `key3`
     */
    "Tag.3.key"?: string;
    /**
     * 当前第四组key。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
     * @example `key4`
     */
    "Tag.4.key"?: string;
    /**
     * 当前第五组key。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
     * @example `key5`
     */
    "Tag.5.key"?: string;
    /**
     * 当前第一组value。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
     * @example `value1`
     */
    "Tag.1.value"?: string;
    /**
     * 当前第二组value。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
     * @example `value2`
     */
    "Tag.2.value"?: string;
    /**
     * 当前第三组value。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
     * @example `value3`
     */
    "Tag.3.value"?: string;
    /**
     * 当前第四组value。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
     * @example `value4`
     */
    "Tag.4.value"?: string;
    /**
     * 当前第五组value。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
     * @example `value5`
     */
    "Tag.5.value"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmy*****`
     */
    "ResourceGroupId"?: string;
}
