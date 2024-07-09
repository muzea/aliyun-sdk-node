export interface UpdateMediaResponse {
    /**
     * 请求ID。
     * @example `6A88246F-C91F-42BD-BABE-DB0DF993F960`
     */
    RequestId: string;
    /**
     * 媒体信息。
     */
    Media: {
        /**
         * 创建时间。
         * @example `2016-09-14T08:30:33Z`
         */
        CreationTime: string;
        /**
         * 类目ID。
         * @example `1`
         */
        CateId: number;
        /**
         * 媒体文件高。
         * @example `1080`
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
             * 标签信息。
             */
            Tag: string[];
        };
        /**
         * 码率。
         * @example `2659.326`
         */
        Bitrate: string;
        /**
         * 媒体ID。
         * @example `3e1cd21131a94525be55acf65888****`
         */
        MediaId: string;
        /**
         * 原文件。
         */
        File: {
            /**
             * 文件状态。取值范围：
             * - **Normal**：正常。
             * - **Deleted**：已删除。
             * @example `Normal`
             */
            State: string;
            /**
             * 输入文件的OSS Bucket。
             * @example `http://example-bucket-****.oss-cn-hangzhou.aliyuncs.com//example-****.mp4`
             */
            URL: string;
        };
        /**
         * 媒体发布状态，表示是否对外发布媒体。取值：
         * - **Initiated**：初始。
         * - **UnPublish**：未发布，OSS播放文件权限为Private。
         * - **Published**：已发布，OSS播放文件权限为Default。
         * - **Deleted**：已删除。
         * @example `Published`
         */
        PublishState: string;
        /**
         * 媒体文件描述。
         * @example `example description`
         */
        Description: string;
        /**
         * 媒体文件宽。
         * @example `1920`
         */
        Width: string;
        /**
         * 媒体文件大小。
         * @example `2647692`
         */
        Size: string;
        /**
         * 封面URL。
         * @example `http://example-bucket-****.oss-cn-shanghai.aliyuncs.com/example-****.jpg`
         */
        CoverURL: string;
        RunIdList: {
            /**
             * 媒体工作流执行实例ID列表。
             */
            RunId: string[];
        };
        /**
         * 时长。
         * @example `7.965000`
         */
        Duration: string;
        /**
         * 帧率。
         * @example `25.0`
         */
        Fps: string;
        /**
         * 标题。
         * @example `hello`
         */
        Title: string;
        /**
         * 格式。支持mov，mp4，m4a，3gp，3g2，mj2。
         * @example `mov`
         */
        Format: string;
    };
}
