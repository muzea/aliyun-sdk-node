export interface DescribeStorageCapacityUnitsResponse {
    /**
     * 分页查询时的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * SCU列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * SCU总数。
     * @example `1`
     */
    TotalCount: number;
    StorageCapacityUnits: {
        /**
         * 由StorageCapacityUnits组成的数组格式，返回SCU的详细信息。
         */
        StorageCapacityUnit: {
            /**
             * SCU的创建时间。
             * @example `2021-08-17T02:55Z`
             */
            CreationTime: string;
            /**
             * SCU的状态。
             * @example `Active`
             */
            Status: string;
            /**
             * SCU的开始生效时间。
             * @example `2021-08-17T02:55Z`
             */
            StartTime: string;
            /**
             * SCU的容量。
             * @example `20`
             */
            Capacity: number;
            /**
             * SCU的描述信息。
             * @example `testScuDescription`
             */
            Description: string;
            /**
             * 当AllocationType值为Shared时，该参数表示SCU的分配状态。可能值：
             * - allocated：已分配给其他用户的SCU。
             * - beAllocated：被其他用户分配的SCU。
             * @example `allocated`
             */
            AllocationStatus: string;
            /**
             * SCU的到期时间。
             * @example `2021-09-17T16:00Z`
             */
            ExpiredTime: string;
            /**
             * SCU的ID。
             * @example `scu-bp67acfmxazb4p****`
             */
            StorageCapacityUnitId: string;
            /**
             * SCU的名称。
             * @example `testScuName`
             */
            Name: string;
            /**
             * SCU的所属地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            Tags: {
                /**
                 * SCU标签键值对。
                 */
                Tag: {
                    /**
                     * SCU的标签值。
                     * @example `TestKey`
                     */
                    TagValue: string;
                    /**
                     * SCU的标签键。
                     * @example `TestValue`
                     */
                    TagKey: string;
                }[];
            };
        }[];
    };
}
