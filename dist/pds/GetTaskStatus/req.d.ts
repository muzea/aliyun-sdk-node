export interface GetTaskStatusRequest {
    "domain_id": string;
    /**
     * 请求体参数
     */
    "body"?: {
        /**
         * 空间 id
         * @example `1`
         */
        drive_id: string;
        /**
         * 任务 id
         * @example `i:SimilarImageClustering-b67d53e7-2fe8-460f-9b95-1e93636923eb`
         */
        task_id: string;
    };
}
