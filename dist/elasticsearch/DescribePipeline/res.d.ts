export interface DescribePipelineResponse {
    /**
     * 请求ID。
     * @example `829F38F6-E2D6-4109-90A6-888160BD1***`
     */
    RequestId: string;
    /**
     * 返回的管道信息，更多详细信息请参见[logstash.yml](https://www.elastic.co/guide/en/logstash/6.7/logstash-settings-file.html)。
     */
    Result: {
        /**
         * 管道ID。
         * @example `pipeline_test`
         */
        pipelineId: string;
        /**
         * 管道更新时间。
         * @example `2020-06-20T07:26:47.000+0000`
         */
        gmtUpdateTime: string;
        /**
         * 队列类型。支持：
         * - MEMORY：基于内存的传统队列。
         * - PERSISTED：基于磁盘的ACKed队列（持久队列）。
         * @example `MEMORY`
         */
        queueType: string;
        /**
         * 队列检查点写入数。
         * @example `1024`
         */
        queueCheckPointWrites: number;
        /**
         * 队列的总容量（以字节数表示）。单位：MB。
         * @example `1024`
         */
        queueMaxBytes: number;
        /**
         * 管道具体配置。
         * @example `input {  }  filter {  }  output {  }`
         */
        config: string;
        /**
         * 管道批延迟。单位：毫秒。
         * @example `50`
         */
        batchDelay: number;
        /**
         * 管道工作线程数。
         * @example `2`
         */
        workers: number;
        /**
         * 管道描述。
         * @example `this is a test`
         */
        description: string;
        /**
         * 管道创建时间。
         * @example `2020-06-20T07:26:47.000+0000`
         */
        gmtCreatedTime: string;
        /**
         * 管道批大小。
         * @example `125`
         */
        batchSize: number;
        /**
         * 管道状态。支持：
         * - NOT_DEPLOYED：未部署
         * - RUNNING：运行中
         * - DELETED：已删除（控制台不展示此状态）
         * @example `RUNNING`
         */
        pipelineStatus: string;
    };
}
