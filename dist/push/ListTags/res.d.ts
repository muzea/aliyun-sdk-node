export interface ListTagsResponse {
    /**
     * 请求ID。
     * @example `6EEF262B-EA7D-41DC-89B9-20F3D1E28194`
     */
    RequestId: string;
    TagInfos: {
        /**
         * Tag列表。
         */
        TagInfo: {
            /**
             * Tag名称。
             * @example `test_tag2`
             */
            TagName: string;
        }[];
    };
}
