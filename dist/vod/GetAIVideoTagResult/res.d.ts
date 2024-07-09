export interface GetAIVideoTagResultResponse {
    /**
     * 请求ID。
     * @example `8829B4DB-AFD9-4FF6-12965DBFFA14****`
     */
    RequestId: string;
    /**
     * 结果数据。
     */
    VideoTagResult: {
        /**
         * 视频分类的集合。
         */
        Category: {
            /**
             * 标签。
             * @example `美容`
             */
            Tag: string;
        }[];
        /**
         * 人物标签的集合。
         */
        Person: {
            /**
             * 人脸URL。
             * > 只有人物标签结果会返回该字段。
             * @example `http://example.com/aivideotag/8829B4DB-AFD9-4F*****F6-12965DBFFA14/Index_****.jpg`
             */
            FaceUrl: string;
            /**
             * 标签。
             * @example `小王`
             */
            Tag: string;
            /**
             * 时间点的集合。单位：毫秒。
             */
            Times: string[];
        }[];
        /**
         * 时间标签的集合。
         */
        Time: {
            /**
             * 标签。
             * @example `毫秒`
             */
            Tag: string;
            /**
             * 时间点的集合。单位：毫秒。
             */
            Times: string[];
        }[];
        /**
         * 地点标签的集合。
         */
        Location: {
            /**
             * 标签。
             * @example `亚洲`
             */
            Tag: string;
            /**
             * 时间点的集合。单位：毫秒。
             */
            Times: string[];
        }[];
        /**
         * 关键词标签的集合。
         */
        Keyword: {
            /**
             * 标签。
             * @example `气垫`
             */
            Tag: string;
            /**
             * 时间点的集合。单位：毫秒。
             */
            Times: string[];
        }[];
    };
}
