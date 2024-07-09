export interface AddMediaResponse {
    /**
     * 请求ID。
     * @example `05F8B913-E9F3-4A6F-9922-48CADA0FFAAD`
     */
    RequestId: string;
    /**
     * 媒体信息。
     */
    Media: {
        /**
         * 创建时间。
         * @example `2016-09-20T03:02:40Z`
         */
        CreationTime: string;
        /**
         * 类目ID。
         * @example `1`
         */
        CateId: number;
        /**
         * 媒体文件高度。
         * @example `1280`
         */
        Height: string;
        /**
         * 视频审核状态。取值：
         * - **Initiated**：初始（上传成功审核未完成）。
         * - **Pass**：通过（上传成功审核已通过）。
         * @example `Initiated`
         */
        CensorState: string;
        Tags: {
            /**
             * 标签。
             */
            Tag: string[];
        };
        /**
         * 码率。
         * @example `1148.77`
         */
        Bitrate: string;
        /**
         * 媒体ID。
         * @example `3e6149d5a8c944c09b1a8d2dc3e4****`
         */
        MediaId: string;
        /**
         * 原文件。
         */
        File: {
            /**
             * 文件状态。此处默认为**Normal**（正常）。
             * @example `Normal`
             */
            State: string;
            /**
             * 文件URL。
             * @example `http://bucket.oss-cn-hangzhou.aliyuncs.com/A/B/C/test.mp4`
             */
            URL: string;
        };
        /**
         * 媒体发布状态，表示是否对外发布媒体。取值：
         * - **Initiated**：初始。
         * - **UnPublish**：未发布，OSS播放文件权限为Private。
         * - **Published**：已发布，OSS播放文件权限为Default。
         * @example `Published`
         */
        PublishState: string;
        /**
         * 描述。长度不超过1024个字节。
         * @example `A test video`
         */
        Description: string;
        /**
         * 媒体文件宽度。
         * @example `1280`
         */
        Width: string;
        /**
         * 媒体文件大小。
         * @example `379860`
         */
        Size: string;
        /**
         * 封面URL。
         * @example `http://bucket.oss-cn-hangzhou.aliyuncs.com/example/1.png`
         */
        CoverURL: string;
        RunIdList: {
            /**
             * 媒体工作流执行实例ID列表。
             */
            RunId: string[];
        };
        /**
         * 媒体文件时长。
         * @example `2.645333`
         */
        Duration: string;
        /**
         * 媒体文件帧率。
         * @example `25.0`
         */
        Fps: string;
        /**
         * 媒体标题。长度不超过128个字节。
         * @example `mytest.mp4`
         */
        Title: string;
        /**
         * 格式。支持mov，mp4，m4a，3gp，3g2，mj2。
         * @example `mp4`
         */
        Format: string;
    };
}
