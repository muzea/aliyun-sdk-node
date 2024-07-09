export interface DeleteSagExpressConnectInterfaceRequest {
    /**
     * 智能接入网关实例地域ID。
     * 您可以调用[DescribeRegions](~~69813~~)接口查询智能接入网关支持的地域以及对应的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-whfn****`
     */
    "SmartAGId": string;
    /**
     * 绑定的智能接入网关设备序列号。
     * @example `sag32a30****`
     */
    "SmartAGSn": string;
    /**
     * 专线端口名称。
     * @example `5`
     */
    "PortName": string;
    /**
     * 专线子接口所属VLAN编码。
     * 取值范围：**0~4094**。
     * > - VLAN编码为0时，代表此端口为物理端口，不使用VLAN子接口模式。
     * - VLAN编码为1~4094时，代表此端口使用基于VLAN的三层子接口。
     * @example `10`
     */
    "Vlan"?: string;
}
