export interface QueryMqSofamqConsumerConnectionResponse {
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
     * 指定 Group ID 的连接信息
     */
    Data: {
        /**
         * 指定 Group ID 的连接信息
         */
        ConnectionList: {
            /**
             * 宿主机 IP 或公网 IP
             * @example `42.120.74.**`
             */
            RemoteIp: string;
            /**
             * 该消费实例的地址和端口
             * @example `30.5.121.**`
             */
            ClientAddr: string;
            /**
             * 消费端版本
             * @example `V4_3_6_SNAPSHOT`
             */
            Version: string;
            /**
             * 消费端语言
             * @example `JAVA`
             */
            Language: string;
            /**
             * 消费实例的 ID
             * @example `30.5.121.**@25560#-1999745829#-1737591554#458773089270275`
             */
            ClientId: string;
        }[];
    };
}
