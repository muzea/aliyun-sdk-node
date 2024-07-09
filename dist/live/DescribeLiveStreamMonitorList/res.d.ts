export interface DescribeLiveStreamMonitorListResponse {
    /**
     * 数量。
     * @example `1`
     */
    Total: number;
    /**
     * 请求ID。
     * @example `2234baba-a586-46ea-8bd4-c8f7891abcdef`
     */
    RequestId: string;
    /**
     * 监播室列表。
     */
    LiveStreamMonitorList: {
        /**
         * 监播告警阈值设置。参数字段如下：
         * - fpsLowThres：视频帧率告警阈值，Float类型。
         * - brHighThres：音视频码率告警阈值，Float类型。
         * - eofDurationThresSec：断流时长检测阈值，Float类型。
         * @example `"{\"fpsLowThres\": 0.6,\"brLowThres\": 1.1,\"eofDurationThresSec\": 10}"`
         */
        MonitorConfig: string;
        /**
         * 监播室内状态。取值：
         * - 1：监播中。
         * - 0：未监播。
         * @example `1`
         */
        Status: number;
        /**
         * 监播室ID。
         * @example `445409ec-7eaa-461d-8f29-4bec2eb9****`
         */
        MonitorId: string;
        /**
         * 监播输出域名。
         * @example `demo.aliyundoc.com`
         */
        Domain: string;
        /**
         * 监播告警通知回调地址。
         * @example `http://guide.aliyundoc.com/notify`
         */
        CallbackUrl: string;
        /**
         * 布局声音来源。
         * @example `1`
         */
        AudioFrom: number;
        /**
         * 钉群机器人URL。
         * @example `https://oapi.dingtalk.com/robot/send?access_token=7a7d404056eee1f2fd944ace9bcfc361dc6448583e1d3d3baa****`
         */
        DingTalkWebHookUrl: string;
        /**
         * 监播室名称。
         * @example `liveMonito****`
         */
        MonitorName: string;
        /**
         * 停止监播时间，UTC格式。
         * @example `2017-01-11T12:00:00Z`
         */
        StopTime: string;
        /**
         * 开始监播时间，UTC格式。
         * @example `2017-01-11T12:00:00Z`
         */
        StartTime: string;
        /**
         * 监播输出分辨率模板。类型取值：
         * - **lp_ld**：流畅。
         * - **lp_sd**：标清。
         * - **lp_hd**：高清。
         * - **lp_ud**：超清。
         * @example `lp_ud`
         */
        OutputTemplate: string;
        /**
         * 地区。取值：
         * - cn-shanghai：上海。
         * - cn-beijing：北京。
         * - ap-southeast-1：新加坡。
         * @example `cn-shanghai`
         */
        Region: string;
        /**
         * 监控流输入列表。
         */
        InputList: {
            /**
             * 索引，前端使用。
             * @example `1`
             */
            Index: number;
            /**
             * 输入流地址。
             * @example `demo.aliyundoc.com`
             */
            InputUrl: string;
            /**
             * 布局ID，必须从1开始。
             * @example `1`
             */
            LayoutId: number;
            /**
             * 监播流的显示名称。
             * @example `monitorStream****`
             */
            StreamName: string;
            /**
             * 布局信息。
             */
            LayoutConfig: {
                /**
                 * 填充类型，前端填none即可。
                 * @example `none`
                 */
                FillMode: string;
                /**
                 * 设置元素的position参考坐标值，取值：
                 * - topLeft
                 * - topRight
                 * - bottomLeft
                 * - bottomRight
                 * @example `topLeft`
                 */
                PositionRefer: string;
                PositionNormalized: number[];
                SizeNormalized: number[];
            };
            /**
             * 播放配置。
             */
            PlayConfig: {
                /**
                 * 音量。取值0~1之间，精确小数点后2位。
                 * @example `0.50`
                 */
                VolumeRate: number;
            };
        }[];
        /**
         * 监播输出地址。
         */
        OutputUrls: {
            /**
             * FLV输出地址。
             * @example `http://demo.aliyundoc.com/monitor/445409ec-7eaa-461d-8f29-4bec2eb9****.flv`
             */
            FlvUrl: string;
            /**
             * RTMP输出地址。
             * @example `rtmp://demo.aliyundoc.com/monitor/445409ec-7eaa-461d-8f29-4bec2eb9****`
             */
            RtmpUrl: string;
        };
    }[];
}
