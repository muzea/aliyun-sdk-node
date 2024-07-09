export interface ListConsumerConnectionsResponse {
    /**
     * 请求ID
     * @example `A3620115-6F1F-5CFB-AA3F-BBD4853B2EC4`
     */
    requestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果
     */
    data: {
        /**
         * 区域ID
         * @example `cn-hangzhou`
         */
        regionId: string;
        /**
         * 实例ID
         * @example `rmq-cn-7e22ody****`
         */
        instanceId: string;
        /**
         * 主题名称
         * @example `CID-TEST`
         */
        consumerGroupId: string;
        /**
         * 客户端连接列表
         */
        connections: {
            /**
             * 客户端ID
             * @example `172.17.135.197@17392#1936705963#551717232#9873695589062458`
             */
            clientId: string;
            /**
             * 客户端IP
             * @example `vos`
             */
            hostname: string;
            /**
             * 宿主机IP/公网出网IP
             * @example `xx.xx.xx.xx`
             */
            egressIp: string;
            /**
             * 客户端语言
             * @example `java`
             */
            language: string;
            /**
             * 客户端版本
             * @example `1.0`
             */
            version: string;
            /**
             * 消费模式,ConsumptionModelEnum[BROADCASTING(广播模式),CLUSTERING(集群模式),code,desc]
             * @example `BROADCASTING`
             */
            messageModel: string;
        }[];
    };
    /**
     * 错误码
     * @example `MissingPageNumber`
     */
    code: string;
    /**
     * 错误信息
     * @example `The instance cannot be found.`
     */
    message: string;
    /**
     * HTTP状态码
     * @example `200`
     */
    httpStatusCode: number;
    /**
     * 动态错误码
     * @example `InstanceId`
     */
    dynamicCode: string;
    /**
     * 动态错误信息
     * @example `instanceId`
     */
    dynamicMessage: string;
}
