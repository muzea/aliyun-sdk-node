export interface AddPipelineResponse {
    /**
     * 请求ID。
     * @example `CFEA608A-5A1C-4C83-A54B-6197BC250D23`
     */
    RequestId: string;
    /**
     * 管道。
     */
    Pipeline: {
        /**
         * 管道类型。
         * @example `Standard`
         */
        Speed: string;
        /**
         * 管道状态。
         * - Active：表示管道内的作业会被媒体转码服务调度转码执行。
         * - Paused：表示管道暂停，作业不再会被媒体转码调度转码执行，管道内的所有作业状态维持在已提交状态，已经处于转码中的任务将继续转码，不受影响。
         * @example `Active`
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
             * 消息队列topic。
             * @example `example1`
             */
            MqTopic: string;
            /**
             * 队列名称。
             * @example `mts-queue-1`
             */
            QueueName: string;
            /**
             * 消息队列mq标签。
             * @example `mts-test`
             */
            MqTag: string;
            /**
             * 主题名称。
             * @example `mts-topic-1`
             */
            Topic: string;
        };
        /**
         * 角色。
         * @example `AliyunMTSDefaultRole`
         */
        Role: string;
        /**
         * 管道名称。
         * @example `视频DNA`
         */
        Name: string;
        /**
         * 管道ID。
         * @example `ed450ea0bfbd41e29f80a401fb4d****`
         */
        Id: string;
        /**
         * 管道配额分配。
         * @example `10`
         */
        QuotaAllocate: number;
    };
}
