export interface ModifyDBResourceGroupRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-xxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 资源组详情。
     */
    "ResourceGroupItems": {
        /**
         * 资源组名称。
         * @example `testgroup`
         */
        ResourceGroupName: string;
        /**
         * 资源组配置。
         * > 1. CpuRateLimit：资源组可使用cpu资源百分比，单位：%
         * > 2. MemoryLimit：资源组可使用内存资源百分比，单位：%
         * > 3. MemorySharedQuota：提交到该资源组的事务之间共享的内存资源百分比，单位：%，默认值：80
         * > 4. MemorySpillRatio：内存密集型事务的内存使用阈值。当事务达到此阈值时，将溢出磁盘，单位：%，默认值：0
         * > 5. Concurrency：资源组允许的最大并发数，默认值：20
         * @example `{"CpuRateLimit":"10","MemoryLimit":"12","MemorySharedQuota":"20","MemorySpillRatio":"75","Concurrency":"3"}`
         */
        ResourceGroupConfig: string;
    }[];
}
