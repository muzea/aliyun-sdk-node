export interface UninstallApplicationResponse {
    /**
     * 请求ID。
     * @example `5D9157CC-96A5-519E-80C0-D7047FF939D3`
     */
    RequestId: string;
    TaskId: {
        /**
         * 任务ID。
         */
        TaskId: string[];
    };
}
