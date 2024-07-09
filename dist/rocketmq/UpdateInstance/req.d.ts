export interface UpdateInstanceRequest {
    /**
     * 待更新实例的ID。
     * @example `rmq-cn-7e22ody****`
     */
    "instanceId": string;
    /**
     * 请求体结构。
     */
    "body"?: {
        /**
         * 更新后的实例名称。
         * @example `test_instance`
         */
        instanceName: string;
        /**
         * 更新后的实例备注信息。
         * @example `This is the remark for test.`
         */
        remark: string;
        /**
         * 更新后的实例网络信息。
         */
        networkInfo: {
            /**
             * 公网信息，仅当实例开通公网访问功能时，该参数有效。
             */
            internetInfo: {
                /**
                 * 公网访问IP白名单列表。
                 * - 若不配置IP白名单，则默认放通所有IP地址段通过公网访问云消息队列 RocketMQ 版服务端。
                 * - 若配置IP白名单，则仅允许白名单内的IP地址通过公网访问云消息队列 RocketMQ 版服务端。
                 */
                ipWhitelist: string[];
            };
        };
        /**
         * 实例的扩展配置。
         */
        productInfo: {
            /**
             * 消息发送和接收的比例。
             * 取值范围：[0.25，1]
             * @example `0.5`
             */
            sendReceiveRatio: number;
            /**
             * 是否开启规格外突发弹性能力。
             * 参数取值如下：
             * - true：开启弹性
             * - false：关闭弹性
             * 开启弹性突发能力后，云消息队列 RocketMQ 版允许该实例在一定范围内超过基础规格限制的TPS，且超过基础规格外的部分，需要收取额外的弹性规格费用。具体计费信息，请参见[计算能力费用](~~427237~~)。
             * > 仅部分规格的实例支持开启弹性突发规格能力，具体支持的实例，请参见[实例规格](~~444715~~)。
             * @example `true`
             */
            autoScaling: boolean;
            /**
             * 消息保存时长。单位：小时。
             * 取值范围，请参见[使用限制](~~440347~~)>资源配额>消息保存时长的限制值。
             * 云消息队列 RocketMQ 版的消息存储完全实现Serverless弹性，按照实际存储空间收取费用，您可以通过调整消息保存时长来控制消息的存储容量。更多信息，请参见[存储费用](~~427238~~)。
             * @example `72`
             */
            messageRetentionTime: number;
            /**
             * 是否开启消息轨迹功能。
             * - true：开启消息轨迹功能
             * - false：关闭消息轨迹功能
             * <props="intl">该参数暂不生效，不管参数是否开启，实例都默认支持轨迹功能。</props>
             * <props="china">该参数仅对Serverless类型的实例生效，若开启消息轨迹功能，会产生相关的消息轨迹费用，具体计费信息，请参见[Serverless计费说明](~~2586280~~)。</props>
             * <props="china">对于按量付费和包年包月实例，该参数不生效，即不管参数是否开启，都默认支持消息轨迹功能。</props>
             * @example `true`
             */
            traceOn: boolean;
        };
        /**
         * 访问控制信息。
         */
        aclInfo: {
            /**
             * 实例的鉴权类型。
             */
            aclTypes: string[];
            /**
             * 是否智能身份识别类型下，VPC接入免密访问
             * - true 开启免密访问
             * - false 关闭免密访问
             * @example `false`
             */
            defaultVpcAuthFree: boolean;
        };
    };
}
