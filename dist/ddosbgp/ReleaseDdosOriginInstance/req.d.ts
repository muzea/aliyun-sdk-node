export interface ReleaseDdosOriginInstanceRequest {
    /**
     * 要释放的DDoS原生防护实例的ID。
     * > 您可以调用[DescribeInstanceList](~~118698~~)查询所有DDoS原生防护实例的ID。
     * @example `ddosorigin_cn-pe335v7gs01`
     */
    "InstanceId": string;
}
