export interface CreateSimilarImageClusterTaskRequest {
    "domain_id": string;
    /**
     * 请求体
     */
    "body"?: {
        /**
         * 空间 id
         * @example `123`
         */
        drive_id: string;
    };
}
