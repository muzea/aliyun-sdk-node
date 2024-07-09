export interface ModifyBlackholeStatusRequest {
    /**
     * 设置黑洞状态。取值：**undo**，表示解除黑洞。
     * @example `undo`
     */
    "BlackholeStatus": string;
    /**
     * DDoS高防实例的ID。
     * > 您可以调用[DescribeInstanceIds](~~157459~~)查询所有DDoS高防实例的ID信息。
     * @example `ddoscoo-cn-mp91j1ao****`
     */
    "InstanceId": string;
}
