export interface SendFileResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    TaskId: {
        /**
         * 任务ID列表。N的取值范围：1~100
         */
        TaskId: string[];
    };
}
