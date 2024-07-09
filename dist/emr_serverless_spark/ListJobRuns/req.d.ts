export interface ListJobRunsRequest {
    /**
     * 标记当前开始读取的位置。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C89568980`
     */
    "nextToken"?: string;
    /**
     * 一次获取的最大记录数。
     * @example `20`
     */
    "maxResults"?: number;
    /**
     * 工作空间ID。
     * @example `w-d2d82aa09155****`
     */
    "workspaceId": string;
    /**
     * 任务名称。
     * @example `emr-spark-demo-job`
     */
    "name"?: string;
    /**
     * 创建用户UID。
     * @example `150978934701****`
     */
    "creator"?: string;
    /**
     * 任务ID。
     * @example `j-xxx`
     */
    "jobRunId"?: string;
    /**
     * 标签列表。
     */
    "tags"?: {
        /**
         * 标签键。
         * @example `tag_key`
         */
        key: string;
        /**
         * 标签值。
         * @example `value`
         */
        value: string;
    }[];
    /**
     * 任务状态。
     * @example `["Running","Submitted"]`
     */
    "states"?: string[];
    /**
     * 任务开始时间范围。
     */
    "startTime"?: {
        /**
         * 任务开始时间范围的起点。
         * @example `1709740800000`
         */
        startTime: number;
        /**
         * 任务开始时间范围的终点。
         * @example `1710432000000`
         */
        endTime: number;
    };
    /**
     * 任务结束时间范围。
     */
    "endTime"?: {
        /**
         * 任务结束时间范围的起点。
         * @example `1709740800000`
         */
        startTime: number;
        /**
         * 任务结束时间范围的终点。
         * @example `1710432000000`
         */
        endTime: number;
    };
    /**
     * Spark任务运行的资源队列名称。
     * @example `dev_queue`
     */
    "resourceQueueId"?: string;
    "jobRunDeploymentId"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "regionId"?: string;
}
