export interface CreatePipelinesRequest {
    /**
     * Logstash实例ID。
     * @example `ls-cn-oew1qbgl****`
     */
    "InstanceId": string;
    /**
     * 是否保存并部署管道。可选值：
     * - true：保存并部署
     * - false（默认）：仅保存
     * @example `false`
     */
    "trigger"?: boolean;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF****`
     */
    "ClientToken"?: string;
    /**
     * 请求体参数，用来指定管道信息，更多详细信息请参见[logstash.yml](https://www.elastic.co/guide/en/logstash/6.7/logstash-settings-file.html)。
     */
    "body"?: {
        /**
         * 管道ID。
         * @example `pipeline-test`
         */
        pipelineId: string;
        /**
         * 管道描述。
         * @example `this is a test`
         */
        description: string;
        /**
         * 管道具体配置。
         * @example `input { } filter { } output { }`
         */
        config: string;
        /**
         * 管道工作线程数。默认值：实例的CPU核数。
         * @example `2`
         */
        workers: number;
        /**
         * 管道批大小。默认值：125。
         * @example `125`
         */
        batchSize: number;
        /**
         * 管道批延迟。单位：毫秒，默认值：50。
         * @example `50`
         */
        batchDelay: number;
        /**
         * 队列类型。可选值：
         * - MEMORY：基于内存的传统队列。
         * - PERSISTED：基于磁盘的ACKed队列（持久队列）。
         * @example `MEMORY`
         */
        queueType: string;
        /**
         * 队列的总容量（以字节数表示）。单位：MB，默认值：1024。
         * @example `1024`
         */
        queueMaxBytes: number;
        /**
         * 队列检查点写入数。默认值：1024。
         * @example `1024`
         */
        queueCheckPointWrites: number;
    }[];
}
