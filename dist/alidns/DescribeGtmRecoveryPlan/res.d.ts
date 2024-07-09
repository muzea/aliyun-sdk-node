export interface DescribeGtmRecoveryPlanResponse {
    /**
     * 预案状态
     * @example `UNEXECUTED`
     */
    Status: string;
    /**
     * 最近回滚时间
     * @example `2019-08-11T06:45Z`
     */
    LastRollbackTime: string;
    /**
     * 故障地址池个数
     * @example `2`
     */
    FaultAddrPoolNum: number;
    FaultAddrPools: {
        /**
         * 故障地址池列表
         */
        FaultAddrPool: {
            Addrs: {
                /**
                 * 地址列表
                 */
                Addr: {
                    /**
                     * 地址值
                     * @example `1.1.1.1`
                     */
                    Value: string;
                    /**
                     * 地址模式
                     * @example `OFFLINE`
                     */
                    Mode: string;
                    /**
                     * 地址ID
                     * @example `739`
                     */
                    Id: number;
                }[];
            };
            /**
             * 地址池ID
             * @example `hra0oq`
             */
            AddrPoolId: string;
            /**
             * 实例ID
             * @example `instance-zwy-38`
             */
            InstanceId: string;
            /**
             * 地址池名称
             * @example `压测-Failover-1`
             */
            AddrPoolName: string;
        }[];
    };
    /**
     * 最近执行时间
     * @example `2019-08-11T05:04Z`
     */
    LastExecuteTime: string;
    /**
     * 请求ID
     * @example `0A5F4315-D6E8-435E-82DF-24F4C97D6999`
     */
    RequestId: string;
    /**
     * 创建时间
     * @example `2019-08-11T05:04Z`
     */
    CreateTime: string;
    /**
     * 最近执行时间（时间戳）
     * @example `1565505898000`
     */
    LastExecuteTimestamp: number;
    /**
     * 备注
     * @example `remark-example`
     */
    Remark: string;
    /**
     * 容灾预案名称
     * @example `name-example`
     */
    Name: string;
    /**
     * 容灾预案ID
     * @example `55`
     */
    RecoveryPlanId: number;
    /**
     * 更新时间
     * @example `2019-08-11T06:45Z`
     */
    UpdateTime: string;
    /**
     * 更新时间（时间戳）
     * @example `1565499867000`
     */
    UpdateTimestamp: number;
    /**
     * 最近回滚时间（时间戳）
     * @example `1565505919000`
     */
    LastRollbackTimestamp: number;
    /**
     * 创建时间（时间戳）
     * @example `1565499867000`
     */
    CreateTimestamp: number;
}
