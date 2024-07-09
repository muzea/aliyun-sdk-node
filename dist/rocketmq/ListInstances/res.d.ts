export interface ListInstancesResponse {
    /**
     * 请求ID，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `84445A20-2B50-5306-A3C0-AF99FC1833C6`
     */
    requestId: string;
    /**
     * 执行结果是否成功。
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果。
     */
    data: {
        /**
         * 当前页码。
         * @example `1`
         */
        pageNumber: number;
        /**
         * 分页大小。
         * @example `10`
         */
        pageSize: number;
        /**
         * 返回结果的总数量。
         * @example `100`
         */
        totalCount: number;
        /**
         * 分页数据。
         */
        list: {
            /**
             * 实例所属的地域ID。
             * @example `cn-hangzhou`
             */
            regionId: string;
            /**
             * 实例ID。
             * @example `rmq-cn-7e22ody****`
             */
            instanceId: string;
            /**
             * 实例名称。
             * @example `test instance`
             */
            instanceName: string;
            /**
             * 实例状态。
             * 参数取值如下：
             * - RELEASED（已释放）
             * - RUNNING（运行中）
             * - STOPPED（已停服）
             * - CHANGING（变更中）
             * - CREATING（创建中）
             * @example `RUNNING`
             */
            status: string;
            /**
             * 实例的启动时间。
             * @example `2022-08-01 00:00:00`
             */
            startTime: string;
            /**
             * 实例的到期时间。
             * @example `2022-09-01 00:00:00`
             */
            expireTime: string;
            /**
             * 实例的释放时间。
             * @example `2022-09-07 00:00:00`
             */
            releaseTime: string;
            /**
             * 实例所属的用户ID。
             * @example `6W0xz2uPfiwp****`
             */
            userId: string;
            /**
             * 消息队列RocketMQ 5.x系列实例的商品代号，类似于ons_rmqsub_public_cn。
             * @example `ons_rmqsub_public_cn`
             */
            commodityCode: string;
            /**
             * 实例所属的服务编码。消息队列RocketMQ版的服务编码为rmq。
             * @example `rmq`
             */
            serviceCode: string;
            /**
             * 实例的主系列编码。
             * 参数取值如下：
             * - standard：标准版
             * - ultimate：铂金版
             * - professional：专业版
             * @example `standard`
             */
            seriesCode: string;
            /**
             * 实例的子系列编码。
             * 参数取值如下：
             * - cluster_ha：集群高可用版
             * - single_node：单节点版
             * @example `cluster_ha`
             */
            subSeriesCode: string;
            /**
             * 实例的付费类型。
             * 参数取值如下：
             * - PayAsYouGo：按量付费（后付费）
             * - Subscription：包年包月（预付费）
             * @example `Subscription`
             */
            paymentType: string;
            /**
             * 实例的备注信息。
             * @example `This is remark for instance.`
             */
            remark: string;
            /**
             * 实例中所创建的主题数量。
             * @example `20`
             */
            topicCount: number;
            /**
             * 实例中所创建的消费者分组的数量。
             * @example `10`
             */
            groupCount: number;
            /**
             * 实例的创建时间。
             * @example `2022-08-01 00:00:00`
             */
            createTime: string;
            /**
             * 实例的最后修改时间。
             * @example `2022-08-02 00:00:00`
             */
            updateTime: string;
            /**
             * 实例所属的资源组ID。
             * @example `rg-acfmx7caj******`
             */
            resourceGroupId: string;
            /**
             * 资源标签列表。
             */
            tags: {
                /**
                 * 资源标签key值。
                 * @example `key`
                 */
                key: string;
                /**
                 * 资源标签value值。
                 * @example `value`
                 */
                value: string;
            }[];
            /**
             * 产品信息。
             */
            productInfo: {
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
        }[];
    };
    /**
     * 错误码。
     * @example `MissingPageNumber`
     */
    code: string;
    /**
     * 错误信息。
     * @example `Parameter pageNumber is mandatory for this action .`
     */
    message: string;
    /**
     * HTTP状态码。
     * @example `400`
     */
    httpStatusCode: number;
    /**
     * 动态错误码。
     * @example `PageNumber`
     */
    dynamicCode: string;
    /**
     * 动态错误信息。
     * @example `pageNumber`
     */
    dynamicMessage: string;
}
