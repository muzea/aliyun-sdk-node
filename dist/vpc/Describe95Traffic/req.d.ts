export interface Describe95TrafficRequest {
    /**
     * 资源所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型，仅支持**cbwp**，表示共享带宽。
     * @example `cbwp`
     */
    "ResourceType": string;
    /**
     * 资源ID。
     * @example `cbwp-wz9j19xrwf78fvz7*****`
     */
    "InstanceId": string;
    /**
     * 指定待查询日期，使用北京时间，格式：年-月-日。
     * > 查询日期至少须为2天前。
     * @example `2022-10-22`
     */
    "Day": string;
}
