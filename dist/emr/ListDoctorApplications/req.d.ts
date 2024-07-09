export interface ListDoctorApplicationsRequest {
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
     * 其日期和时间信息以 ISO 8601 格式表示， 例如：2023年1月1日为 2023-01-01。
     * @example `2023-01-01`
     */
    "DateTime": string;
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
     * - ASC：升序排列。
     * - DESC：降序排列。
     * @example `ASC`
     */
    "OrderType"?: string;
    /**
     * 排序顺序。取值：
     * 1. startTime：任务启动时间。
     * 2. endTime：任务结束时间。
     * 3. vcoreUtilization：任务CPU使用率。
     * 4. memUtilization：任务内存使用率。
     * 5. vcoreSeconds：任务CPU使用量。
     * 6. memSeconds：任务内存使用量。
     * 7. score：任务评分。
     * @example `score`
     */
    "OrderBy"?: string;
}
