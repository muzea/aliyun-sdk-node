export interface SearchPipelineResponse {
    /**
     * 总条数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 每页行数大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `338CA33A-AE83-5DF4-B6F2-C6D3ED8143F5`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
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
             * 管道状态。可取值：
             * - **Active**：管道开启。
             * - **Paused**：管道暂停。
             * @example `Paused`
             */
            State: string;
            /**
             * 管道级别。
             * @example `1`
             */
            SpeedLevel: number;
            /**
             * MNS通知配置。
             */
            NotifyConfig: {
                /**
                 * 接收到的消息队列。
                 * @example `example1,example2`
                 */
                MqTopic: string;
                /**
                 * 阿里云消息服务中创建的队列。
                 * @example `example-queue-****`
                 */
                QueueName: string;
                /**
                 * 标签。
                 * @example `mts-test`
                 */
                MqTag: string;
                /**
                 * 阿里云消息服务中创建的主题。
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
            /**
             * 管道创建时间。
             * @example ` 2021-03-04T06:44:43Z`
             */
            CreationTime: string;
        }[];
    };
}
