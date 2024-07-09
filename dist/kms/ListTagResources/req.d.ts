export interface ListTagResourcesRequest {
    /**
     * 资源所属的地域ID。
     * >您可以调用[DescribeRegions](~~601478~~)查看当前阿里云账号的可用地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 下一个查询开始的Token。
     * >如果一次调用只返回了部分被查询到的结果条目数（默认每次返回200行数据），则会同步返回NextToken参数值。您可以再次调用该接口，设置上次调用该接口返回的NextToken参数值，以实现分页查询。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 要查询标签的资源类型。取值：
     * - key：密钥
     * - secret：凭据
     * @example `key`
     */
    "ResourceType": string;
    /**
     * 要查询标签的资源ID列表，最多可以输入50个资源ID。
     * 输入多个资源ID时，格式为`["ResourceId.1","ResourceId.2",...]`。
     */
    "ResourceId"?: string[];
    /**
     * 要查询的标签列表。N的取值范围1~20。
     */
    "Tag"?: {
        /**
         * 标签键。每个标签由一个键值对（Key:Value）组成，包含标签键（Key）、标签值（Value）。
         * 最多可以输入20个标签。输入多个标签时，格式为`[{"Key":"key1","Value":"value1"},{"Key":"key2","Value":"value2"},...]`。
         * >标签键不能以aliyun和acs:开头。
         * @example `disk-encryption`
         */
        Key: string;
        /**
         * 标签值。每个标签由一个键值对（Key:Value）组成，包含标签键（Key）、标签值（Value）。
         * 最多可以输入20个标签。输入多个标签时，格式为`[{"Key":"key1","Value":"value1"},{"Key":"key2","Value":"value2"},...]`。
         * @example `true`
         */
        Value: string;
    }[];
}
