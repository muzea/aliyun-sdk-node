export interface DescribeDBInstanceConfigResponse {
    /**
     * 请求ID。
     * @example `C458B1E8-1683-3645-B154-6BA32080EEA`
     */
    RequestId: string;
    /**
     * 数据结构体。
     */
    Data: {
        /**
         * 配置Key。
         * @example `htap`
         */
        ConfigName: string;
        /**
         * 实例ID。
         * @example `pxc-sprcym7g7w****`
         */
        DbInstanceName: string;
        /**
         * 配置项，说明如下：
         * - attendHtapList：开启Htap的实例列表。
         * - autoAttendHtap：是否自动把新建的只读实例加入到HTAP列表里。
         * - delayExecutionStrategy：当只读延迟到达storageDelayThreshold设定的值时，将只读流量切回主实例。默认值为1，取值为0或1。
         * - enableConsistentReplicaRead：是否开启一致性读。
         * - storageDelayThreshold：只读实例延迟阈值，默认3s，范围为：0~3600*24。
         * - enableHtap：是否开始Htap。
         * - masterReadWeight：主节点读权重，设置100表示100%的流量打到主节点，范围为：0~100。
         * @example `{\"attendHtapList\":[\"pxc-hzruyzes08****\"],\"autoAttendHtap\":\"true\",\"delayExecutionStrategy\":1,\"enableConsistentReplicaRead\":true,\"enableHtap\":\"true\",\"masterReadWeight\":100,\"storageDelayThreshold\":3}`
         */
        ConfigValue: string;
    };
}
