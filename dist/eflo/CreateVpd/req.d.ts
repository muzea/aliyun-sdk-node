export interface CreateVpdRequest {
    /**
     * 地域
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 灵骏网段实例名称
     * @example `vpd-1`
     */
    "VpdName": string;
    /**
     * VPD的网段。
     * - 建议您使用RFC私网地址作为灵骏网段的网段如10.0.0.0/8，172.16.0.0/12，192.168.0.0/16，多灵骏网段互通场景或灵骏网段和VPC互通场景需确保地址规划不能冲突。
     * - 您也可以使用除 100.64.0.0/10、224.0.0.0/4、127.0.0.0/8 或 169.254.0.0/16 及其子网外的自定义地址段作为VPD的主IPv4网段。
     * @example `10.0.0.0/8`
     */
    "Cidr": string;
    /**
     * 灵骏子网信息列表
     */
    "Subnets"?: {
        /**
         * 灵骏子网实例名称
         * @example `subnet-1`
         */
        SubnetName: string;
        /**
         * 地域
         * @example `cn-wulanchabu`
         */
        RegionId: string;
        /**
         * 可用区
         * @example `cn-wulanchabu-b`
         */
        ZoneId: string;
        /**
         * Subnet的网段。
         * - 子网的网段必须是其所属灵骏网段的真子集且掩码需在16位到29位之间，可提供 8 ~ 65536 个地址。
         * 例如，灵骏网段的网段为192.168.0.0/16，该灵骏网段下的子网的网段为 192.168.0.0/17 ~ 192.168.0.0/29。
         * - 每个子网网段的第一个和最后三个IP地址为系统保留地址。
         * 例如，子网的网段为192.168.1.0/24，192.168.1.0、192.168.1.253、192.168.1.254和192.168.1.255这四个IP地址为系统保留地址。
         * @example `10.1.0.0/16`
         */
        Cidr: string;
        /**
         * 灵骏子网使用类型；非必选；可选值：
         * - **通用类型不填**；
         * - **OOB**：OOB类型
         * - **LB**： LB类型
         * @example `OOB`
         */
        Type: string;
    }[];
    /**
     * 资源组ID。
     * 关于资源组的更多信息，请参见[什么是资源组](https://help.aliyun.com/document_detail/94475.htm?spm=a2c4g.11186623.0.0.29e15d7akXhpuu)。
     * @example `rg-aek2l4sq6l7unhi`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 资源的标签键。
         * 一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以aliyun或者acs:开头，不能包含http://或者https://。
         * 一次最多支持输入20个标签的标签键。
         * @example `vpd-wulanchabu`
         */
        Key: string;
        /**
         * 资源的标签值。
         * 标签值可以为空或输入不超过128个字符的字符串，不能以aliyun或者acs:开头，不能包含http://或者https://。
         * 每一个标签键对应一个标签值，一次最多支持输入20个标签键对应的标签值
         * @example `wulanchabu-a`
         */
        Value: string;
    }[];
}
