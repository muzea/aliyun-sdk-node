export interface DescribeCasterVideoResourcesResponse {
    /**
     * 请求ID。
     * @example `CF60DB6A-7FD6-426E-9288-122CC1A52FA7`
     */
    RequestId: string;
    /**
     * 总记录数。
     * @example `2`
     */
    Total: number;
    VideoResources: {
        /**
         * 资源列表。
         */
        VideoResource: {
            /**
             * 视频文件起始偏移值。仅对文件视频有效， 单位：毫秒。
             * **大于0**，表示从相对于首帧的偏差时间作为开始读取的位置。
             * @example `1000`
             */
            BeginOffset: number;
            /**
             * 视频文件结束偏移值。仅对文件视频有效，单位：毫秒。
             *
             * - 大于**0**：从相对于首帧的偏差时间为结束读取的位置。
             * - 小于**0**：从相对于最后一帧的偏差时间作为结束读取的位置。
             * @example `10000`
             */
            EndOffset: number;
            /**
             * 拉流地址。
             * @example `http://guide.aliyundoc.com/example.org`
             */
            FlvUrl: string;
            /**
             * 媒资库图片素材ID。
             * @example `a089175eb5f4427684fc0715159a****`
             */
            ImageId: string;
            /**
             * 图片素材URL。
             * @example `http://learn.aliyundoc.com/AppName/image.jpg`
             */
            ImageUrl: string;
            /**
             * 直播流地址。
             * @example `rtmp://abcLive/appName/b5447c21fcfe444c9e9b6f7ba208****`
             */
            LiveStreamUrl: string;
            /**
             * 视频源位置。
             * @example `RV01`
             */
            LocationId: string;
            /**
             * 素材ID。
             * @example `d2c429cd907742ee8f6e76465ad3****`
             */
            MaterialId: string;
            /**
             * 点播文件的回调间隔，等于0时为不回调。
             * @example `0`
             */
            PtsCallbackInterval: number;
            /**
             * 仅对文件视频有效，表示播放完后继续重复播放的次数。
             *
             * - **0**（默认值）：不重复播放。
             * - **-1**：一直循环重复播放。
             * @example `0`
             */
            RepeatNum: number;
            /**
             * 资源ID。
             * @example `b5f8c837-ceeb-424f-b30b-68e94e86****`
             */
            ResourceId: string;
            /**
             * 资源名称。
             * @example `resource-Name1`
             */
            ResourceName: string;
            /**
             * 点播文件地址。
             * 当且仅当资源为文件视频，且视频文件未导入素材库时使用，仅限MP4、FLV、TS格式。
             * @example `http://developer.aliyundoc.com/caster1.flv`
             */
            VodUrl: string;
        }[];
    };
}
