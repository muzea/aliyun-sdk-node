export interface DescribeDataPushResultResponse {
    /**
     * 分页查询的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    PushResults: {
        /**
         * 边缘节点的数据预推状态列表。
         */
        PushResult: {
            /**
             * 数据文件名。
             * @example `gcs-pre-websocket-eip-telecom`
             */
            Name: string;
            StatusStatS: {
                /**
                 * 预推状态统计列表
                 */
                StatusStat: {
                    /**
                     * 边缘节点总数
                     * @example `2`
                     */
                    RegionIdCount: number;
                    RegionIds: {
                        /**
                         * 边缘节点的数据预推状态列表
                         */
                        RegionId: {
                            /**
                             * 边缘节点ID
                             * @example `cn-wuxi-5`
                             */
                            RegionId: string;
                            /**
                             * 预推开始时间，UTC时间格式。
                             * @example `2021-12-28T16:00:00Z`
                             */
                            StartTime: string;
                            /**
                             * 状态描述。
                             * @example `Success`
                             */
                            StatusDescrip: string;
                            /**
                             * 状态的最新更新时间，utc时间。
                             * @example `2021-12-07T02:37:10Z`
                             */
                            UpdateTime: string;
                        }[];
                    };
                    /**
                     * 预推状态。枚举类型，取值：
                     * SUCCESS：已预推成功
                     * FAILED：预推失败
                     * PUSHING：数据预推中
                     * @example `FAILED`
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
     * 请求ID。
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BA984`
     */
    RequestId: string;
    /**
     * 总条数。
     * @example `6`
     */
    TotalCount: number;
}
