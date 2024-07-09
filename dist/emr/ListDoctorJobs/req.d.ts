export interface ListDoctorJobsRequest {
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
         * @example `1683340662016`
         */
        StartTime: number;
        /**
         * 任务提交时间结束范围，Unix时间戳，单位毫秒。
         * @example `1683340662020`
         */
        EndTime: number;
    };
    /**
     * 结束时间范围，过滤出结束时间在一个时间范围内的任务。
     */
    "EndRange"?: {
        /**
         * 任务结束时间起始范围，Unix时间戳，单位毫秒。
         * @example `1679135111960`
         */
        StartTime: number;
        /**
         * 任务结束时间结束范围，Unix时间戳，单位毫秒。
         * @example `1666865137099`
         */
        EndTime: number;
    };
    /**
     * 任务提交到YARN的IDs，用于过滤任务列表。
     * @example `null`
     */
    "AppIds"?: string[];
    /**
     * 任务提交的用户列表，用于过滤任务列表。
     * @example `null`
     */
    "Users"?: string[];
    /**
     * 任务提交到YARN的队列列表，用于过滤任务列表。
     * @example `null`
     */
    "Queues"?: string[];
    /**
     * 任务提交到YARN的引擎列表，用于过滤任务列表。
     * @example `null`
     */
    "Types"?: string[];
    /**
     * 排序方向。取值：
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
