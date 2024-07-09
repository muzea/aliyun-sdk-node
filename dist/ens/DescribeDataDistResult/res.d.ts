export interface DescribeDataDistResultResponse {
    DistResults: {
        /**
         * 边缘资源实例的数据分发状态列表。
         */
        DistResult: {
            /**
             * 数据文件名。
             * @example `gcs-prod-websocket-eip-unicom`
             */
            Name: string;
            StatusStats: {
                /**
                 * 分发状态统计列表。
                 */
                StatusStat: {
                    /**
                     * 关联的边缘资源实例数量。
                     * @example `10`
                     */
                    InstanceCount: string;
                    Instances: {
                        /**
                         * 边缘资源实例的分发状态列表。
                         */
                        Instance: {
                            /**
                             * 实例ID。
                             * @example `i-5qzje8f5un1wmi341m2yetaxv`
                             */
                            InstanceId: string;
                            /**
                             * 分发开始时间，UTC时间格式。
                             * @example `2021-11-19T07:24:52Z`
                             */
                            StartTime: string;
                            /**
                             * 状态描述。
                             * @example `成功`
                             */
                            StatusDescrip: string;
                            /**
                             * 状态的最新更新时间，utc时间。
                             * @example `2021-10-11T02:38:19Z`
                             */
                            UpdateTime: string;
                        }[];
                    };
                    /**
                     * 分发状态。枚举类型，取值：
                     * - SUCCESS：已分发成功
                     * - FAILED：分发失败
                     * - DISTING：数据分发中
                     * - POD_RESTARTING: 重启空闲POD中
                     * - DELETED: 数据已清理/下架
                     * @example `SUCCESS`
                     */
                    Status: string;
                }[];
            };
            /**
             * 数据文件版本号。
             * @example `standard`
             */
            Version: string;
        }[];
    };
    /**
     * 分页查询时的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `50373E71-7710-4620-8AAB-133CCE49451C`
     */
    RequestId: string;
    /**
     * 数据集总条数。
     * @example `49`
     */
    TotalCount: number;
}
