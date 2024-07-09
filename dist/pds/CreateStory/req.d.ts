export interface CreateStoryRequest {
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
         * 故事 id。由用户指定。
         * @example `9132e0d8-fe92-4e56-86c3-f5f112308003`
         */
        story_id: string;
        /**
         * 故事类型
         * @example `TagMemory`
         */
        story_type: string;
        /**
         * 故事子类型。其值取决于故事类型，详情可见请求参数补充说明。
         * @example `Food`
         */
        story_sub_type: string;
        /**
         * 故事名称。
         * 长度不超过 1024 个字节。
         * @example `美食`
         */
        story_name: string;
        /**
         * 创建故事照片或视频的开始时间。RFC3339。
         * @example `2016-12-30T16:00:00Z`
         */
        story_start_time: string;
        /**
         * 创建故事照片或视频的结束时间。RFC3339。
         * @example `2022-12-30T16:00:00Z`
         */
        story_end_time: string;
        /**
         * 创建故事照片或视频文件最小个数。
         * 须大于 0，小于等于 max\_image\_count，空值默认为 1。
         * @example `1`
         */
        min_image_count: number;
        /**
         * 创建故事照片或视频文件最大个数。
         * 须小于等于 100，大于等于 min\_image\_count，空值默认 30。
         * @example `30`
         */
        max_image_count: number;
        /**
         * 自定义标签。
         * 标签数量不能超过 20 个。
         */
        custom_labels: any;
        /**
         * 地址信息
         */
        address: any;
    };
}
