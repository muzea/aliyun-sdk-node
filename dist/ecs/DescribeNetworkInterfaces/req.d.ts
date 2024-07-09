export interface DescribeNetworkInterfacesRequest {
    /**
     * 所在地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 标签列表
     */
    "Tag"?: {
        /**
         * 弹性网卡的标签键。N的取值范围：1~20
         * @example `TestKey`
         */
        Key: string;
        /**
         * 弹性网卡的标签值。N的取值范围：1~20
         * 使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，请使用[ListTagResources](~~110425~~)接口进行查询。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 资源组ID。使用该参数过滤资源时，资源数量不能超过1000个。
     * >不支持默认资源组过滤。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 弹性网卡所属的交换机ID。
     * @example `vsw-bp16usj2p27htro3****`
     */
    "VSwitchId"?: string;
    /**
     * 弹性网卡所属的专有网络VPC ID。
     * @example `vpc-bp1j7w3gc1cexjqd****`
     */
    "VpcId"?: string;
    /**
     * 弹性网卡主私网IPv4地址。
     * @example `192.168.**.**`
     */
    "PrimaryIpAddress"?: string;
    /**
     * 辅助网卡对应的安全组ID。
     * - 如果您需要通过安全组ID查询辅助网卡的信息，请指定该参数。
     * - 如果您需要通过安全组ID查询主网卡信息，请调用[DescribeInstances](~~25506~~)指定`SecurityGroupId`参数进行查询。
     * @example `sg-bp144yr32sx6ndw****`
     */
    "SecurityGroupId"?: string;
    /**
     * 弹性网卡的名称。
     * @example `test-eni-name`
     */
    "NetworkInterfaceName"?: string;
    /**
     * 弹性网卡类型。取值范围：
     * - Primary：主网卡。
     * - Secondary：辅助网卡。
     * 默认值：空，表示查询所有类型。
     * @example `Secondary`
     */
    "Type"?: string;
    /**
     * 弹性网卡当前附加的实例ID。
     * @example `i-bp1e2l6djkndyuli****`
     */
    "InstanceId"?: string;
    /**
     * 该弹性网卡的使用者是否为云产品或虚商。
     * @example `true`
     */
    "ServiceManaged"?: boolean;
    /**
     * 弹性网卡的状态。取值范围：
     * * Available：可用。
     * * Attaching：附加中。
     * * InUse：已附加。
     * * Detaching：分离中。
     * * Deleting：删除中。
     * 默认值：空，表示查询所有状态。
     * @example `Available`
     */
    "Status"?: string;
    /**
     * 查询结果的页码。
     * 起始值：1。
     * 默认值：1。
     * > 该参数即将下线，推荐您使用NextToken与MaxResults完成分页查询操作。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 查询结果的分页大小。
     * 最大值：1000。
     * 默认值：10。
     * > 该参数即将下线，推荐您使用NextToken与MaxResults完成分页查询操作。
     * @example `100`
     */
    "PageSize"?: number;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的`NextToken`参数值。
     * @example `AAAAAdDWBF2****`
     */
    "NextToken"?: string;
    /**
     * 分页查询时每页的最大条目数。取值范围：10~500。
     * 默认值：
     * - 当不设置值或设置的值小于10时，默认值为10。
     * - 当设置的值大于500时，默认值为500。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 弹性网卡的辅助私网IPv4地址。N的取值范围：1~100。
     * @example `192.168.**.**`
     */
    "PrivateIpAddress"?: string[];
    /**
     * 弹性网卡ID。N的取值范围：1~100。
     * @example `eni-bp125p95hhdhn3ot****`
     */
    "NetworkInterfaceId"?: string[];
    /**
     * 弹性网卡的IPv6地址。N表示可以设置多个IPv6地址，N的取值范围：1~100。
     * @example `2408:4321:180:1701:94c7:bc38:3bfa:****`
     */
    "Ipv6Address"?: string[];
}
