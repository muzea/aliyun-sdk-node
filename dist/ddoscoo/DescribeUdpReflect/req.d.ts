export interface DescribeUdpReflectRequest {
    /**
     * 要查询的DDoS高防实例的ID。
     * > 您可以调用[DescribeInstanceIds](~~157459~~)查询所有DDoS高防实例的ID。
     * @example `ddoscoo-cn-i7m25564****`
     */
    "InstanceId": string;
    /**
     * DDoS高防实例所属地域ID。取值：
     * - **cn-hangzhou**（默认）：表示中国内地，对应DDoS高防（中国内地）实例。
     * - **ap-southeast-1**：表示非中国内地，对应DDoS高防（非中国内地）实例。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
