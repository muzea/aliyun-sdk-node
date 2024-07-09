export interface GetLiveChannelStatResponse {
    /**
     * 保存GetLiveChannelStat返回结果的容器。
     */
    LiveChannelStat: {
        /**
         * LiveChannel当前的推流状态描述。有效值：Disabled、Live、Idle。
         * @example `Live`
         */
        Status: string;
        /**
         * 当Status为Live时，表示当前客户端开始推流的时间。此元素使用ISO8601格式表示。
         * @example `2016-08-25T06:25:15.000Z`
         */
        ConnectedTime: string;
        /**
         * 当Status为Live时，表示当前推流客户端的IP地址。
         * @example `10.1.2.3:47745`
         */
        RemoteAddr: string;
        /**
         * 当Status为Live时，保存视频流信息的容器。
         * >Video、Audio容器只有在Status为Live时才会返回，但Status为Live时不一定返回这两个容器。例如，客户端已经连接到LiveChannel，但尚未发送音视频数据，这种情况不会返回这两个容器。
         */
        Video: any;
        /**
         * 当Status为Live时，保存音频流信息的容器。
         * >Video、Audio容器只有在Status为Live时才会返回，但Status为Live时不一定返回这两个容器。例如，客户端已经连接到LiveChannel，但尚未发送音视频数据，这种情况不会返回这两个容器。
         */
        Audio: any;
    };
}
