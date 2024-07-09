export interface ListDynamicImageResponse {
    /**
     * 请求ID。
     * @example `570189B6-572E-4953-13B4278EE0D8****`
     */
    RequestId: string;
    /**
     * 动图结果。
     */
    DynamicImageList: {
        /**
         * 动图创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2020-07-28T02:01:06Z`
         */
        CreationTime: string;
        /**
         * 动图文件地址。
         * @example `https://example.aliyundoc.com/2e114f110059*****0c3193918fd449a/image/dynamic/2b4e51df60*****323ef43d6e336ecf.webp?auth_key=1597296785-0-0-4a48e85*****bd2bb358e0b3cade`
         */
        FileURL: string;
        /**
         * 视频ID。
         * @example `2e114f1100590c3193918fd449a****`
         */
        VideoId: string;
        /**
         * 动图宽。单位：px。
         * @example `640`
         */
        Width: string;
        /**
         * 动图作业ID。
         * @example `2bf4390af9e5491c09cc720ad****`
         */
        JobId: string;
        /**
         * 动图高。单位：px。
         * @example `360`
         */
        Height: string;
        /**
         * 动图帧率。单位：帧/每秒。
         * @example `10`
         */
        Fps: string;
        /**
         * 动图时长。单位：秒。
         * @example `2`
         */
        Duration: string;
        /**
         * 动图格式，取值：
         * - **gif**。
         * - **webp**。
         * @example `webp`
         */
        Format: string;
        /**
         * 动图ID。
         * @example `2b4e51df60323ef43d6e336ecf****`
         */
        DynamicImageId: string;
        /**
         * 动图文件大小。单位：Byte。
         * @example `119866`
         */
        FileSize: string;
    }[];
}
