export interface SearchStoriesRequest {
    "domain_id": string;
    /**
     * 请求参数
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
         * 故事类型。由用户创建时指定。
         * @example `PeopleMemory`
         */
        story_type: string;
        /**
         * 故事名称。
         * 长度不超过 1024 字节。
         * @example `美食`
         */
        story_name: string;
        /**
         * 创建故事照片或视频的开始时间范围
         */
        story_start_time_range: {
            /**
             * 起始时间。时间格式为 RFC3339。
             * @example `2016-12-31T00:00:00+08:00`
             */
            start: string;
            /**
             * 结束时间。时间格式为 RFC3339。
             * @example `2022-12-31T00:00:00+08:00`
             */
            end: string;
        };
        /**
         * 创建故事照片或视频的结束时间范围
         */
        story_end_time_range: {
            /**
             * 起始时间。时间格式为 RFC3339。
             * @example `2016-12-31T00:00:00+08:00`
             */
            start: string;
            /**
             * 结束时间。时间格式为 RFC3339。
             * @example `2022-12-31T00:00:00+08:00`
             */
            end: string;
        };
        /**
         * 创建故事时间范围
         */
        create_time_range: {
            /**
             * 起始时间。时间格式为 RFC3339。
             * @example `2016-12-31T00:00:00+08:00`
             */
            start: string;
            /**
             * 结束时间。时间格式为 RFC3339。
             * @example `2022-12-31T00:00:00+08:00`
             */
            end: string;
        };
        /**
         * 人脸分组列表。
         * 查询人物故事时使用。
         */
        face_group_ids: string[];
        /**
         * 自定义标签。
         * 可查询多个字段，使用 "," 分隔。
         * @example `key1=value1,key2!=value2`
         */
        custom_labels: string;
        /**
         * 是否返回空故事。默认 false。
         * @example `false`
         */
        with_empty_stories: boolean;
        /**
         * 查询的起始位置。若为空则表示从头开始查询。
         * @example `NWQ1Yjk4YmI1ZDODBhNDQ2Nzhl***`
         */
        marker: string;
        /**
         * 限定此次返回资源的数量，取值范围\[1,100\]。
         * 默认 100。
         * 返回结果可以小于指定的数量，但不能多于指定的数量。
         * @example `100`
         */
        limit: number;
        /**
         * 排序字段
         * @example `CreateTime`
         */
        sort: string;
        /**
         * 排序方式
         * @example `desc`
         */
        order: string;
        /**
         * 图片封面缩略图控制参数
         * @example `image/resize,m_fill,h_128,w_128,limit_0/format,jpg`
         */
        cover_image_thumbnail_process: string;
        /**
         * 视频封面缩略图控制参数
         * @example `video/snapshot,t_1000,f_jpg,w_0,h_0,m_fast,ar_auto`
         */
        cover_video_thumbnail_process: string;
        /**
         * 缩略图过期时间。单位为秒，最短 10 秒，最长 86400 秒。
         * @example `900`
         */
        url_expire_sec: number;
    };
}
