export interface GetMqSofamqConsumerJStackResponse {
    /**
     * 结果描述
     * @example `OK`
     */
    ResultMessage: string;
    /**
     * 结果码
     * @example `OK`
     */
    ResultCode: string;
    /**
     * 请求ID
     * @example `861E6630-AEC0-4B2D-B214-6CB5E44B7F04`
     */
    RequestId: string;
    /**
     * 消费端 Jstack 堆栈信息
     */
    Data: {
        /**
         * 消费端 Client ID
         * @example `10.15.232.86@1129e#e4a224f4#2fa8320f33c4#eyIwIjoienRoIn0=`
         */
        ClientId: string;
        /**
         * Jstack 堆栈信息
         */
        Jstack: {
            /**
             * 线程名称
             * @example `ConsumeMessageThread_0	`
             */
            Thread: string;
            TrackList: string[];
        }[];
    };
}
