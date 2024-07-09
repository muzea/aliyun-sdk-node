export interface DescribeInstanceStatusResponse {
    /**
     * DDoS高防实例的状态。取值：
     * - **1**：表示正常。
     * - **2**：表示已过期。
     * - **3**：表示存在欠费。
     * - **4**：表示已释放。
     * @example `1`
     */
    InstanceStatus: number;
    /**
     * 本次请求的ID。
     * @example `112777CC-2AD6-46FC-A263-00B931406FCD`
     */
    RequestId: string;
    /**
     * DDoS高防实例的ID。
     * @example `ddoscoo-cn-6ja1y6p5****`
     */
    InstanceId: string;
}
