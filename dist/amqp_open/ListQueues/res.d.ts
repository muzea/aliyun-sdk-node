export interface ListQueuesResponse {
    /**
     * 请求ID。
     * @example `CE811989-9F02-42CE-97A6-2239CB5C2***`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 最大结果集。
         * @example `1`
         */
        MaxResults: number;
        /**
         * 表示当前调用返回读取到的位置，空代表数据已经读取完毕。
         * @example `caebacccb2be03f84eb48b699f0a****`
         */
        NextToken: string;
        /**
         * Queue。
         */
        Queues: {
            /**
             * 是否是排他性队列。
             * @example `false`
             */
            ExclusiveState: boolean;
            /**
             * 自动删除状态。
             * @example `false`
             */
            AutoDeleteState: boolean;
            /**
             * 创建时间。
             * @example `1580887085240`
             */
            CreateTime: number;
            /**
             * 属性。
             * @example `test`
             */
            Attributes: any;
            /**
             * Vhost名称。
             * @example `test`
             */
            VHostName: string;
            /**
             * Queue名称。
             * @example `QueueTest`
             */
            Name: string;
            /**
             * Queue所属的实例ID。
             * @example `amqp-cn-5yd3aw******`
             */
            OwnerId: string;
            /**
             * 上一次消费时间。
             * @example `1680887085240`
             */
            LastConsumeTime: number;
        }[];
    };
}
