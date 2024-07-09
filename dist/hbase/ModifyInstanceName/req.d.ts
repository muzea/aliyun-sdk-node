export interface ModifyInstanceNameRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 实例所属的地域ID，可调用[DescribeRegions](~~144489~~)接口获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可用区ID，可调用[DescribeRegions](~~144489~~)接口获取。
     * @example `cn-hangzhou-f`
     */
    "ZoneId"?: string;
    /**
     * 实例ID。
     * @example `ld-bp150tns0sjxs****`
     */
    "ClusterId": string;
    /**
     * 修改后的实例名称，可调用[DescribeInstance](~~144594~~)接口获取修改前的实例名称。
     * @example `testhbaseone`
     */
    "ClusterName": string;
}
