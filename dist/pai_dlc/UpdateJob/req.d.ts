export interface UpdateJobRequest {
    /**
     * 任务ID。如何获取任务ID，请参见[ListJobs](~~459676~~)。
     * @example `dlc*************`
     */
    "JobId"?: string;
    /**
     * 任务配置。
     */
    "body"?: {
        /**
         * 任务的优先级，值的范围是1~9：
         * - 1为最低优先级。
         * - 9为最高优先级。
         * @example `5`
         */
        Priority: number;
    };
}
