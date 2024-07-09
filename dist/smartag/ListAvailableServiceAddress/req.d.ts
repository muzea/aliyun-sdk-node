export interface ListAvailableServiceAddressRequest {
    /**
     * 智能接入网关实例所属地域ID。
     * 您可以通过调用[DescribeRegions](~~69813~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例服务地址类型，当前支持的取值：
     * - **ProbeTask**：拨测源IP。
     * - **RemoteWeb**：远程登录IP。
     * > 若不传值则查询所有的服务地址。
     * @example `ProbeTask`
     */
    "AddressType"?: string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-****`
     */
    "SagId": string;
    /**
     * 智能接入网关设备序列号。
     * @example `sag****`
     */
    "Sn": string;
}
