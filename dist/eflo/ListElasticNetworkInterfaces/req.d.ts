export interface ListElasticNetworkInterfacesRequest {
    /**
     * 地域ID
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 可用区ID
     * @example `cn-wulanchabu-b`
     */
    "ZoneId"?: string;
    /**
     * 类型
     * @example `DEFAULT`
     */
    "Type"?: string;
    /**
     * 网络类型
     * @example `tenant`
     */
    "NetworkType"?: string;
    /**
     * 灵骏弹性网卡ID
     * @example `leni-1234****`
     */
    "ElasticNetworkInterfaceId"?: string;
    /**
     * 节点ID
     * @example `e01-cn-lbj3aej****`
     */
    "NodeId"?: string;
    /**
     * 状态
     * @example `Available`
     */
    "Status"?: string;
    /**
     * IP地址
     * @example `10.0.0.1`
     */
    "Ip"?: string;
    /**
     * 专有网络ID
     * @example `vpc-uf6aa4ddo97fr****`
     */
    "VpcId"?: string;
    /**
     * 交换机ID
     * @example `vsw-uf6u8473r84e9****`
     */
    "VSwitchId"?: string;
    /**
     * 当前页码。起始值：1默认值：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的行数。默认值：20
     * @example `10`
     */
    "PageSize"?: number;
}
