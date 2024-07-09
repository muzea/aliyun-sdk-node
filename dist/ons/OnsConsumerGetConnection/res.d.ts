export interface OnsConsumerGetConnectionResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `DE4140C7-F42D-473D-A5FF-B1E31692****`
     */
    RequestId: string;
    /**
     * 返回参数数据结构。
     */
    Data: {
        ConnectionList: {
            /**
             * 指定Group ID的连接信息。
             */
            ConnectionDo: {
                /**
                 * 消费端版本。
                 * @example `V4_3_6`
                 */
                Version: string;
                /**
                 * 该消费者实例的地址和端口。
                 * @example `30.5.121.**`
                 */
                ClientAddr: string;
                /**
                 * 消费者应用的开发语言。
                 * @example `JAVA`
                 */
                Language: string;
                /**
                 * 消费者实例的ID。
                 * @example `30.5.121.**@24813#-1999745829#-1737591554#453111174894656`
                 */
                ClientId: string;
            }[];
        };
    };
}
