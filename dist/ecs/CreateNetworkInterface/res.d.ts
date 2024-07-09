export interface CreateNetworkInterfaceResponse {
    /**
     * 弹性网卡的状态。
     * @example `Available`
     */
    Status: string;
    /**
     * 弹性网卡的类型。
     * @example `Secondary`
     */
    Type: string;
    /**
     * 网卡所属的专有网络VPC ID。
     * @example `vpc-bp1j7w3gc1cexjqd****`
     */
    VpcId: string;
    /**
     * 弹性网卡的名称。
     * @example `my-eni-name`
     */
    NetworkInterfaceName: string;
    /**
     * 弹性网卡的MAC地址。
     * @example `00:16:3e:12:**:**`
     */
    MacAddress: string;
    /**
     * 弹性网卡ID。
     * @example `eni-bp14v2sdd3v8htln****`
     */
    NetworkInterfaceId: string;
    /**
     * 弹性网卡对应的虚商ID。
     * @example `12345678910`
     */
    ServiceID: number;
    /**
     * 弹性网卡的所属账号ID。
     * @example `123456****`
     */
    OwnerId: string;
    /**
     * 该弹性网卡的使用者是否为云产品或虚商。
     * @example `true`
     */
    ServiceManaged: boolean;
    /**
     * VPC的交换机ID。
     * @example `vsw-bp16usj2p27htro3****`
     */
    VSwitchId: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 弹性网卡的描述信息。
     * @example `testDescription`
     */
    Description: string;
    /**
     * 资源组ID。
     * @example `rg-2ze88m67qx5z****`
     */
    ResourceGroupId: string;
    /**
     * 可用区ID。
     * @example `cn-hangzhou-e`
     */
    ZoneId: string;
    /**
     * 弹性网卡的私网IP地址。
     * @example `172.17.**.**`
     */
    PrivateIpAddress: string;
    SecurityGroupIds: {
        /**
         * 所属的安全组集合。
         */
        SecurityGroupId: string[];
    };
    PrivateIpSets: {
        /**
         * PrivateIpSet组成的集合。
         */
        PrivateIpSet: {
            /**
             * 实例的私网IP地址。
             * @example `172.17.**.**`
             */
            PrivateIpAddress: string;
            /**
             * 是否是主私网IP地址。
             * @example `true`
             */
            Primary: boolean;
        }[];
    };
    Tags: {
        /**
         * 标签。
         */
        Tag: {
            /**
             * 标签值。
             * @example `TestValue`
             */
            TagValue: string;
            /**
             * 标签键。
             * @example `TestKey`
             */
            TagKey: string;
        }[];
    };
    Ipv6Sets: {
        /**
         * 弹性网卡已分配的IPv6地址。
         */
        Ipv6Set: {
            /**
             * IPv6地址。
             * @example `2001:db8:1234:1a00::****`
             */
            Ipv6Address: string;
        }[];
    };
    Ipv4PrefixSets: {
        /**
         * 弹性网卡已分配的IPv4前缀集合。
         */
        Ipv4PrefixSet: {
            /**
             * IPv4前缀。
             * @example `192.168.**.**​/28`
             */
            Ipv4Prefix: string;
        }[];
    };
    Ipv6PrefixSets: {
        /**
         * 弹性网卡已分配的IPv6前缀集合。
         */
        Ipv6PrefixSet: {
            /**
             * IPv6前缀。
             * @example `2001:db8:1234:1a00:****::/80`
             */
            Ipv6Prefix: string;
        }[];
    };
}
