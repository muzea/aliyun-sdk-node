export interface CreateCustomizedStoryRequest {
    "domain_id": string;
    /**
     * 请求体
     */
    "body"?: {
        /**
         * 空间 id
         * @example `1`
         */
        drive_id: string;
        /**
         * 故事类型。由用户自定义。
         * @example `user_created`
         */
        story_type: string;
        /**
         * 故事子类型。由用户自定义。
         * @example `user_created`
         */
        story_sub_type: string;
        /**
         * 故事名称。
         * 长度不能超过 1024 字节。
         * @example `test_name`
         */
        story_name: string;
        /**
         * 故事封面。该封面必须在故事文件列表中。
         */
        story_cover: {
            /**
             * 文件 id
             * @example `63e5e4340f76cb3ead5f40f68163f0f967c1a7bf`
             */
            file_id: string;
            /**
             * 文件版本 id
             * @example `642a88d4aff041ee68fd4fc89beb80e1119da343`
             */
            revision_id: string;
        };
        /**
         * 故事文件列表
         */
        story_files: {
            /**
             * 文件 id
             * @example `63e5e4340f76cb3ead5f40f68163f0f967c1a7bf`
             */
            file_id: string;
            /**
             * 文件版本 id
             * @example `642a88d4aff041ee68fd4fc89beb80e1119da343`
             */
            revision_id: string;
        }[];
        /**
         * 自定义标签。
         * 标签数量不能超过 20 个。
         */
        custom_labels: any;
    };
}
