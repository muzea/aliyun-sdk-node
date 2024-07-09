export interface ListDoctorJobsStatsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * @example `c-b933c5aac8fe****`
     */
    "ClusterId": string;
    /**
     * 标记当前开始读取的位置。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C89568980`
     */
    "NextToken"?: string;
    /**
     * 一次获取的最大记录数。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 开始时间范围，过滤开始时间在一个时间范围内的任务。
     */
    "StartRange"?: {
        /**
         * 任务提交时间起始范围，Unix时间戳，单位毫秒。
         * @example `1679036826987`
         */
        StartTime: number;
        /**
         * 任务提交时间结束范围，Unix时间戳，单位毫秒。
         * @example `1666406820000`
         */
        EndTime: number;
    };
    /**
     * 结束时间范围，过滤出结束时间在一个时间范围内的任务。
     */
    "EndRange"?: {
        /**
         * 任务结束时间起始范围，Unix时间戳，单位毫秒。
         * @example `1675180800000`
         */
        StartTime: number;
        /**
         * 任务结束时间结束范围，Unix时间戳，单位毫秒。
         * @example `1680019200000`
         */
        EndTime: number;
    };
    /**
     * 分组字段列表。
     * 目前只取第一个值，后续会放开多种分组交叉。
     * @example `null`
     */
    "GroupBy"?: string[];
    /**
     * 排序方向，取值：
     * - ASC： 升序排列。
     * - DESC：降序排列。
     * @example `ASC`
     */
    "OrderType"?: string;
    /**
     * 排序字段。取值：
     * - vcoreSeconds：任务CPU使用量。
     * - memSeconds：任务内存使用量。
     * @example `vcoreSeconds`
     */
    "OrderBy"?: string;
}
