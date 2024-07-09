export interface AddDeviceInternetPortRequest {
    /**
     * 实例ID，为板卡ID/容器ID。
     * @example `i-5saiou41t6ude2ia56ri902ke`
     */
    "InstanceId": string;
    /**
     * 内网IP地址。
     * @example `10.0.0.50`
     */
    "InternalIp": string;
    /**
     * ENS边缘节点ID。
     * @example `cn-wuxi-5`
     */
    "RegionId": string;
    /**
     * 内网端口。端口规范：起始端口/结束端口；多组用逗号分割。例：1026/2001,2005/2005。NatType=DNAT时为必填，NatType=SNAT时输入无效。
     * @example `12022/12022`
     */
    "InternalPort"?: string;
    /**
     * NAT类型。枚举类型，取值范围：
     * - SNAT
     * - DNAT
     * @example `DNAT`
     */
    "NatType": string;
    /**
     * 公网运营商。默认随机分配，取值范围包括：
     * - telecom：中国电信
     * - cmcc：中国移动
     * - unicom：中国联通
     * - cbn：广电
     * @example `telecom`
     */
    "ISP"?: string;
}
