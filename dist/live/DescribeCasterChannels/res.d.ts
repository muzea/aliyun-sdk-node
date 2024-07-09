export interface DescribeCasterChannelsResponse {
    Channels: {
        /**
         * 通道列表。
         */
        Channel: {
            /**
             * 通道位置ID。
             * 布局应用通道ID，每个位置至多设置一个视频源，格式需符合“RV01~RV12”。
             * @example `RV01`
             */
            ChannelId: string;
            /**
             * 人脸美颜。具体包括：0（whole）、1（磨皮）、2（美白）、3（去除黑眼圈）、4（法令纹）。
             * @example `0`
             */
            FaceBeauty: string;
            /**
             * 视频源Id。
             * @example `87642866-281E-4AEA-9582-B124879****`
             */
            ResourceId: string;
            /**
             * rtmp地址。
             * @example `rtmp://demo.aliyundoc.com/caster/rtmperf?auth_key=****`
             */
            RtmpUrl: string;
            /**
             * 通道输出地址。
             * @example `http://demo.aliyundoc.com/caster/streamwsx.flv?auth_key=YYYYY`
             */
            StreamUrl: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `83C52866-281E-4AEA-9582-B1245406349D`
     */
    RequestId: string;
    /**
     * 总数量。
     * @example `1`
     */
    Total: number;
}
