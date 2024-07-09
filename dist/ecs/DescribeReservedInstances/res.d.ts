export interface DescribeReservedInstancesResponse {
    /**
     * 输入时设置的每页行数。
     * @example `1`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `E572643C-6A29-49D6-9D4E-6CFA4E063A3E`
     */
    RequestId: string;
    /**
     * 预留实例券列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 预留实例券的总数。
     * @example `1`
     */
    TotalCount: number;
    ReservedInstances: {
        /**
         * 由ReservedInstance组成的数组格式，返回预留实例券的详细信息。
         */
        ReservedInstance: {
            /**
             * 状态。
             * @example `Active`
             */
            Status: string;
            /**
             * 创建时间。
             * @example `2018-12-10T12:07Z`
             */
            CreationTime: string;
            /**
             * 名称。
             * @example `riZbpzhex2ulpzf53****`
             */
            ReservedInstanceName: string;
            /**
             * 预留实例券ID。
             * @example `ri-bpzhex2ulpzf53****`
             */
            ReservedInstanceId: string;
            /**
             * 匹配的按量付费实例的规格。
             * @example `ecs.g5.large`
             */
            InstanceType: string;
            /**
             * 可以匹配同规格按量付费实例的数量。
             * @example `10`
             */
            InstanceAmount: number;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 付款类型。
             * @example `All Upfront`
             */
            OfferingType: string;
            /**
             * 生效时间。
             * @example `2018-12-10T12:00Z`
             */
            StartTime: string;
            /**
             * 描述。
             * @example `testDescription`
             */
            Description: string;
            /**
             * 当AllocationType值为Shared时，该参数表示预留实例券的分配状态。可能值：
             * - allocated：已分配给其他用户的预留实例券。
             * - beAllocated：被其他用户分配的预留实例券。
             * @example `allocated`
             */
            AllocationStatus: string;
            /**
             * 到期时间。
             * @example `2019-12-10T12:07Z`
             */
            ExpiredTime: string;
            /**
             * 资源组。
             * @example `EcsDocTest`
             */
            ResourceGroupId: string;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-z`
             */
            ZoneId: string;
            /**
             * 实例使用的镜像的操作系统类型。可能值：
             * - Windows：Windows Server类型的操作系统。
             * - Linux：Linux及类Unix类型的操作系统。
             * @example `Linux`
             */
            Platform: string;
            /**
             * 范围。
             * @example `region`
             */
            Scope: string;
            OperationLocks: {
                /**
                 * 是否被锁定。
                 */
                OperationLock: {
                    /**
                     * 锁定原因。
                     * @example `security`
                     */
                    LockReason: string;
                }[];
            };
            Tags: {
                /**
                 * 预留实例券的标签对信息。
                 */
                Tag: {
                    /**
                     * 预留实例券的标签值。
                     * @example `TestValue`
                     */
                    TagValue: string;
                    /**
                     * 预留实例券的标签键。
                     * @example `TestKey`
                     */
                    TagKey: string;
                }[];
            };
        }[];
    };
}
