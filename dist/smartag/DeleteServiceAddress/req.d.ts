export interface DeleteServiceAddressRequest {
    /**
     * 智能接入网关实例所属地域ID。
     * 您可以通过调用[DescribeRegions](~~69813~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例服务地址类型。仅取值：**ProbeTask**。
     * @example `ProbeTask`
     */
    "AddressType": string;
    /**
     * 智能接入网关实例服务地址。取值如：**192.168.1.1**。
     * @example `192.168.1.1`
     */
    "Address": string;
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
