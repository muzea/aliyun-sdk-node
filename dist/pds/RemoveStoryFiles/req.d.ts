export interface RemoveStoryFilesRequest {
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
         * 故事 id
         * @example `9132e0d8-fe92-4e56-86c3-f5f112308003`
         */
        story_id: string;
        /**
         * 文件列表
         */
        files: {
            /**
             * 文件 id
             * @example `63e5e4340f76cb3ead5f40f68163f0f967c1a7bf`
             */
            file_id: string;
            /**
             * 版本 id
             * @example `642a88dd06e49d9c0a14411ebae606f70edd9a59`
             */
            revision_id: string;
        }[];
    };
}
