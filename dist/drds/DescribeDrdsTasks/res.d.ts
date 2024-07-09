export interface DescribeDrdsTasksResponse {
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `CD412DF7-F21D-44CE-88FF-ED24917174A8`
     */
    RequestId: string;
    Tasks: {
        /**
         * 任务列表。
         */
        Task: {
            /**
             * 任务状态。
             * @example `FAILED`
             */
            State: string;
            /**
             * 任务内容。
             * @example `upgrade_instance`
             */
            Content: string;
            /**
             * 任务ID。
             * @example `64148`
             */
            Id: number;
        }[];
    };
}
