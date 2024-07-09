export interface InstallApplicationResponse {
    /**
     * 请求ID。
     * @example `55C15B1C-D507-45F0-B490-69D6E0F113C6`
     */
    RequestId: string;
    TaskId: {
        /**
         * 任务ID。
         */
        TaskId: string[];
    };
}
