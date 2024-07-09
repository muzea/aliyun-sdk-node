export interface RebootMachineRequest {
    /**
     * 指定需要重启的服务器UUID。
     * >调用[DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~)接口获取该参数。
     * @example `7151f27e-1d51-4e98-a540-8936a****`
     */
    "Uuid": string;
}
