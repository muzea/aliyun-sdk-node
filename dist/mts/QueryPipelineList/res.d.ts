export interface QueryPipelineListResponse {
    /**
     * 请求ID。
     * @example `1C538EAA-ACAF-5AD8-B091-A72C63007149`
     */
    RequestId: string;
    PipelineList: {
        /**
         * 管道列表。
         */
        Pipeline: {
            /**
             * 管道类型。默认值：**Standard**（标准管道）。可取值：
             * - **Boost**：倍速转码管道。
             * - **Standard**：标准管道。
             * - **NarrowBandHDV2**：窄带高清2.0管道。
             * - **AIVideoCover**：智能截图管道。
             * - **AIVideoFPShot**：视频DNA管道。
             * - **AIVideoCensor**：智能审核管道。
             * - **AIVideoMCU**：智能标签管道。
             * - **AIVideoSummary**：视频摘要管道。
             * - **AIVideoPorn**：视频鉴黄管道。
             * - **AIAudioKWS**：音频关键字识别管道。
             * - **AIAudioASR**：语音转文字管道。
             * @example `Standard`
             */
            Speed: string;
            /**
             * 管道状态。
             * - **Active**：管道开启。
             * - **Paused**：管道暂停。
             * @example `Paused`
             */
            State: string;
            /**
             * 管道级别。
             * @example `2`
             */
            SpeedLevel: number;
            /**
             * 阿里云MNS通知配置。
             */
            NotifyConfig: {
                /**
                 * 接收到的消息队列。
                 * @example `example1,example2`
                 */
                MqTopic: string;
                /**
                 * 阿里云消息服务中创建的队列名称。
                 * @example `example-queue-****`
                 */
                QueueName: string;
                /**
                 * 标签。
                 * @example `mts-test`
                 */
                MqTag: string;
                /**
                 * 阿里云消息服务中创建的主题名称。
                 * @example `example-topic-****`
                 */
                Topic: string;
            };
            /**
             * 当前RAM用户关联的角色。
             * @example `AliyunMTSDefaultRole`
             */
            Role: string;
            /**
             * 管道名称。
             * @example `example-pipeline-****`
             */
            Name: string;
            /**
             * 管道ID。
             * @example `d1ce4d3efcb549419193f50f1fcd****`
             */
            Id: string;
            /**
             * 管道配额分配。
             * @example `10`
             */
            QuotaAllocate: number;
            ExtendConfig: {
                IsBoostNew: boolean;
                MaxMultiSpeed: number;
                MultiSpeedDowngradePolicy: string;
            };
        }[];
    };
    NonExistPids: {
        /**
         * 不存在的管道ID列表。
         */
        String: string[];
    };
}
