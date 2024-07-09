export interface SubmitSnapshotJobRequest {
    /**
     * 任务名称。
     * @example `SampleJob`
     */
    "Name"?: string;
    /**
     * 截图输入。
     */
    "Input": {
        /**
         * 输入类型，取值：
         * 1. OSS：oss文件地址
         * 2. Media：媒资ID
         * @example `Media`
         */
        Type: string;
        /**
         * 输入媒体。当Type为OSS时填入OSS地址，Type为Media时填入媒资ID。
         * OSS地址规则为：
         * 1. oss://bucket/object
         * 2. http(s)://bucket.oss-[RegionId].aliyuncs.com/object
         * 其中bucket为和当前项目处于同一区域的oss bucket名称，object为文件路径。
         * > URL中的 OSS bucket 需要先添加到IMS[存储管理](~~440592~~)后再使用。
         * @example `oss://bucket/object.mp4`
         */
        Media: string;
    };
    /**
     * 截图输出。
     */
    "Output": {
        /**
         * 输出类型，取值：
         * 1. OSS：oss文件地址
         * 2. Media：媒资ID
         * @example `OSS`
         */
        Type: string;
        /**
         * 输出媒体。当Type为OSS时填入OSS地址，Type为Media时填入媒资ID。
         * OSS地址规则为：
         * 1. oss://bucket/object
         * 2. http(s)://bucket.oss-[RegionId].aliyuncs.com/object
         * 其中bucket为和当前项目处于同一区域的oss bucket名称，object为文件路径。
         * 截取多张静态截图时，object必须要带有”{Count}“占位符；截取雪碧图时，object必须要带有“{TileCount}”占位符。WebVTT截图object的后缀必须是“.vtt”。
         * > URL中的 OSS bucket 需要先添加到IMS[存储管理](~~440592~~)后再使用。
         * @example `oss://test-bucket/output-{Count}.jpg`
         */
        Media: string;
    };
    /**
     * 截图模板配置。
     */
    "TemplateConfig": {
        /**
         * 模板ID。
         * @example `****96e8864746a0b6f3****
        `
         */
        TemplateId: string;
        /**
         * 覆盖参数。
         */
        OverwriteParams: {
            /**
             * 截图类型。
             * @example `Sprite`
             */
            Type: string;
            /**
             * 帧类型。
             * @example `intra`
             */
            FrameType: string;
            /**
             * 截图数量。
             * @example `5`
             */
            Count: number;
            /**
             * 截图间隔时间。
             * @example `10`
             */
            Interval: number;
            /**
             * 截图开始时间。
             * @example `1000`
             */
            Time: number;
            /**
             * 输出图片宽度。
             * @example `720`
             */
            Width: number;
            /**
             * 输出图片高度。
             * @example `480`
             */
            Height: number;
            /**
             * 多帧截图针对首帧过滤黑屏图片判定阈值。
             * @example `30`
             */
            BlackLevel: number;
            /**
             * 判断像素点是否为黑色点的阈值。
             * @example `70`
             */
            PixelBlackThreshold: number;
            /**
             * 雪碧图配置。
             */
            SpriteSnapshotConfig: {
                /**
                 * 单图片宽度。默认截图输出分辨率宽度。
                 * @example `720`
                 */
                CellWidth: number;
                /**
                 * 单图片高度。默认截图输出分辨率高度。
                 * @example `480`
                 */
                CellHeight: number;
                /**
                 * 图片间距，默认0，单位px
                 * @example `20`
                 */
                Padding: number;
                /**
                 * 外框宽度，默认0，单位px
                 * @example `20`
                 */
                Margin: number;
                /**
                 * 图片拼合列数。
                 * @example `20`
                 */
                Columns: number;
                /**
                 * 图片拼合行数。
                 * @example `20`
                 */
                Lines: number;
                /**
                 * 背景颜色。
                 * @example `#000000`
                 */
                Color: string;
            };
            /**
             * Webvtt截图配置：是否拼合输出
             * @example `true`
             */
            IsSptFrag: boolean;
        };
    };
    /**
     * 调度配置
     */
    "ScheduleConfig"?: {
        /**
         * 管道ID。
         * @example `****96e8864746a0b6f3****
        `
         */
        PipelineId: string;
    };
    /**
     * 用户自定义数据。
     * @example `{"test parameter": "test value"}`
     */
    "UserData"?: string;
}
