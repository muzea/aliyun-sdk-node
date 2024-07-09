export interface DescribeInstanceSecurityConfigsRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 检测的唯一标识
     * @example `xxx`
     */
    "CheckId"?: string;
}
