export interface DescribeInstanceStatusRequest {
    /**
     * 要查询的DDoS高防实例的ID。
     * > 您可以调用[DescribeInstanceIds](~~157459~~)查询所有DDoS高防（中国内地）或DDoS高防（非中国内地）实例的ID。
     * @example `ddoscoo-cn-6ja1y6p5****`
     */
    "InstanceId": string;
    /**
     * 要查询的DDoS高防实例的类型。取值：
     * - **1**：表示DDoS高防（中国内地）实例。
     * - **2**：表示DDoS高防（非中国内地）实例。
     * @example `1`
     */
    "ProductType": number;
}
