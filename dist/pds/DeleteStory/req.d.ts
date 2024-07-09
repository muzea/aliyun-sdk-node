export interface DeleteStoryRequest {
    "domain_id": string;
    /**
     * 请求数据
     */
    "body"?: {
        /**
         * 空间 id
         * @example `1`
         */
        drive_id: string;
        /**
         * 故事 id
         * @example `9132e0d8-fe92-4e56-86c3-f5f112308003`
         */
        story_id: string;
    };
}
