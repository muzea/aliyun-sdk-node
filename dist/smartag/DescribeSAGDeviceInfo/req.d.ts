export interface DescribeSAGDeviceInfoRequest {
    /**
     * 智能接入网关实例所属地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-7f3d9b6jwnuqn6****`
     */
    "SmartAGId": string;
    /**
     * 绑定的智能接入网关设备序列号。
     * @example `sag32a30****`
     */
    "SmartAGSn": string;
}
