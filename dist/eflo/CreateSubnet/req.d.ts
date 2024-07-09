export interface CreateSubnetRequest {
    /**
     * 灵骏子网实例名称
     * @example `subnet-1`
     */
    "SubnetName": string;
    /**
     * 地域ID
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 可用区ID
     * @example `cn-wulanchabu-b`
     */
    "ZoneId": string;
    /**
     * 所属灵骏网段实例ID
     * @example `vpd-xcuhjyrj`
     */
    "VpdId": string;
    /**
     * Subnet的网段。
     * - 子网的网段必须是其所属灵骏网段的真子集且掩码需在16位到29位之间，可提供 8 ~ 65536 个地址。 例如，灵骏网段的网段为192.168.0.0/16，该灵骏网段下的子网的网段为 192.168.0.0/17 ~ 192.168.0.0/29。
     * - 每个子网网段的第一个和最后三个IP地址为系统保留地址。 例如，子网的网段为192.168.1.0/24，192.168.1.0、192.168.1.253、192.168.1.254和192.168.1.255这四个IP地址为系统保留地址。
     * @example `10.0.0.0/16`
     */
    "Cidr": string;
    /**
     * 灵骏子网使用类型；非必选；可选值：
     * - **通用类型不填**
     * - **OOB**：OOB类型
     * - **LB**： LB类型
     * @example `OOB`
     */
    "Type"?: string;
    /**
     * 标签信息。
     * 一次最多支持输入20个标签信息。
     */
    "Tag"?: {
        /**
         * 资源的标签键。
         * 一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以aliyun或者acs:开头，不能包含http://或者https://。
         * 一次最多支持输入20个标签的标签键。
         * @example `tag-subnet`
         */
        Key: string;
        /**
         * 资源的标签值。
         * 标签值可以为空或输入不超过128个字符的字符串，不能以aliyun或者acs:开头，不能包含http://或者https://。
         * 每一个标签键对应一个标签值，一次最多支持输入20个标签键对应的标签值。
         * @example `subnet-tag-1`
         */
        Value: string;
    }[];
}
