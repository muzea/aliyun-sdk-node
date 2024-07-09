export interface QueryTagsResponse {
    /**
     * 请求ID。
     * @example `D68AE5C6-8AAF-46C9-B627-3FDACD1A4168`
     */
    RequestId: string;
    TagInfos: {
        /**
         * Tag列表。
         */
        TagInfo: {
            /**
             * 绑定的Tag名称。
             * @example `test_tag2`
             */
            TagName: string;
        }[];
    };
}
