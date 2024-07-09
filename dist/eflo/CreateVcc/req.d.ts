export interface CreateVccRequest {
    /**
     * 地域ID
     * @example `cn-wulanchabu`
     */
    "RegionId"?: string;
    /**
     * 可用区
     * @example `cn-wulanchabu-a`
     */
    "ZoneId"?: string;
    /**
     * 灵骏连接名称
     * @example `test`
     */
    "VccName"?: string;
    /**
     * 灵骏网段实例ID
     * @example `vpd-t2jseldp`
     */
    "VpdId"?: string;
    /**
     * 云企业网实例ID
     * @example `cen-bkiw0x1347roekr7f2`
     */
    "CenId"?: string;
    /**
     * 描述
     * @example `描述`
     */
    "Description"?: string;
    /**
     * 带宽，单位Mbps。最小值为1000，代表1Gbps带宽；最大值为400000，代表400Gbps带宽。
     * > 1Gbps = 1000Mbps
     * @example `1000`
     */
    "Bandwidth"?: number;
    /**
     * 标签信息。
     * 一次最多支持输入20个标签信息。
     */
    "Tag"?: {
        /**
         * 资源的标签键。
         * 一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以aliyun或者acs:开头，不能包含http://或者https://。
         * 一次最多支持输入20个标签的标签键。
         * @example `tag-vcc`
         */
        Key: string;
        /**
         * 资源的标签值。
         * 标签值可以为空或输入不超过128个字符的字符串，不能以aliyun或者acs:开头，不能包含http://或者https://。
         * 每一个标签键对应一个标签值，一次最多支持输入20个标签键对应的标签值。
         * @example `vcc-group-1`
         */
        Value: string;
    }[];
    /**
     * 灵骏连接实例ID
     * @example `vcc-cn-zvp2w222001`
     */
    "VccId"?: string;
    /**
     * 专有网络ID；[什么是专有网络](https://help.aliyun.com/document_detail/34217.html)
     * 可调用[DescribeVpcs](https://help.aliyun.com/document_detail/35739.html#demo-0)接口查询指定VPC。
     * @example `vpc-uf6aa4ddo97frj22tgp52`
     */
    "VpcId"?: string;
    /**
     * 资源组ID。
     * 关于资源组的更多信息，请参见[什么是资源组](https://help.aliyun.com/document_detail/94475.htm?spm=a2c4g.11186623.0.0.29e15d7akXhpuu)。
     * @example `rg-aeky5f3qx6ceapq`
     */
    "ResourceGroupId"?: string;
    /**
     * 连接方式，可选值：
     * - **专有网络（VPC）**
     * - **云企业网（CENTR）**
     * @example `CENTR`
     */
    "ConnectionType"?: string;
    /**
     * 交换机实例ID。[专有网络交换机](https://help.aliyun.com/document_detail/100380.html)。
     * 你可以调用[DescribeVSwitches](https://help.aliyun.com/document_detail/35748.html)接口查询已创建的交换机。
     * @example `vsw-t4nahb0pxckgktx1kot8q`
     */
    "VSwitchId"?: string;
    /**
     * 互联网段，云上输入，云下默认
     * @example `10.0.0.0/24`
     */
    "BgpCidr"?: string;
    /**
     * 启动访问云服务，可选值：
     * - **true**  ：启用访问云服务
     * - **false** ：不启用访问云服务
     * @example `true`
     */
    "AccessCouldService"?: boolean;
    /**
     * cen所属账号
     * @example `1511928242963727`
     */
    "CenOwnerId"?: string;
}
