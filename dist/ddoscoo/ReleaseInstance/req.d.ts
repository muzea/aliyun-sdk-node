export interface ReleaseInstanceRequest {
    /**
     * 要释放的实例ID。
     * > 只允许释放已到期的实例。您可以调用[DescribeInstances](~~91478~~)查询所有DDoS高防实例的ID和到期状态信息。
     * @example `ddoscoo-cn-mp91j1ao****`
     */
    "InstanceId": string;
}
