export interface DescribeKeyPairsRequest {
    /**
     * 密钥对所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 密钥对名称。支持正则表达式模糊搜索，使用*匹配子表达式，示例：
     * - `*SshKey`：查询以SshKey结尾的密钥对名称，包括SshKey。
     * - `SshKey*`：查询以SshKey开头的密钥对名称，包括SshKey。
     * - `*SshKey*`：查询名称中间有SshKey的密钥对，包括SshKey。
     * - `SshKey`：精确匹配SshKey。
     * @example `*SshKey*`
     */
    "KeyPairName"?: string;
    /**
     * 密钥对的指纹。根据RFC 4716定义的公钥指纹格式，采用MD5信息摘要算法。更多详情，请参见[RFC 4716](https://tools.ietf.org/html/rfc4716)。
     * @example `ABC1234567`
     */
    "KeyPairFingerPrint"?: string;
    /**
     * 密钥对列表的页码。起始值：1。
     * 默认值：1 。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。最大值：50。
     * 默认值：10 。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 是否在返回结果中包含PublicKey。
     * 默认值：false。
     * @example `false`
     */
    "IncludePublicKey"?: boolean;
    /**
     * 密钥对所在的企业资源组ID。使用该参数过滤资源时，资源数量不能超过1000个。
     * >不支持默认资源组过滤。
     * @example `rg-amnhr7u7c7hj****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 密钥对的标签键。N的取值范围：1~20。
         * 使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，请使用[ListTagResources](~~110425~~)接口进行查询。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 密钥对的标签值。N的取值范围：1~20。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
