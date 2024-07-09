export interface DescribeInstanceIdsRequest {
    /**
     * DDoS高防实例在资源管理服务中所属的资源组ID。
     * 不设置该参数表示默认资源组。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * 要查询的DDoS高防实例的类型。取值：
     * - **0**：表示DDoS高防（非中国内地）保险版。
     * - **1**：表示DDoS高防（非中国内地）无忧版。
     * - **2**：表示DDoS高防（非中国内地）加速线路。
     * - **3**：表示DDoS高防（非中国内地）安全加速线路。
     * - **9**：表示DDoS高防（中国内地）专业版。
     * @example `9`
     */
    "Edition"?: number;
    /**
     * 要查询的DDoS高防实例的ID列表。N的最大值：200。
     * @example `ddoscoo-cn-mp91j1ao****`
     */
    "InstanceIds"?: string[];
}
