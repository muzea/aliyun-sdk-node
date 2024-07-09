export interface OnsTopicListResponse {
    /**
     * 公共参数，每个请求ID都是唯一的，可用于排查和定位问题。
     * @example `4A978869-7681-4529-B470-107E1379****`
     */
    RequestId: string;
    Data: {
        /**
         * 返回指定实例的Topic信息列表。
         */
        PublishInfoDo: {
            /**
             * 消息类型。取值说明如下：
             * - **0**：普通消息
             * - **1**：分区顺序消息
             * - **2**：全局顺序消息
             * - **4**：事务消息
             * - **5**：定时/延时消息
             * @example `0`
             */
            MessageType: number;
            /**
             * 所有关系名称，例如持有者、可订阅、可发布和可发布订阅。
             * @example `授权发布/订阅`
             */
            RelationName: string;
            /**
             * Topic所有者编号，为阿里云的账号ID。
             * @example `138015630679****`
             */
            Owner: string;
            /**
             * Topic所在实例是否有命名空间。取值说明如下：
             * - **true**：拥有独立命名空间，资源命名确保实例内唯一，跨实例之间可重名。
             * - **false**：无独立命名空间，实例内或者跨实例之间，资源命名必须全局唯一。
             * @example `true`
             */
            IndependentNaming: boolean;
            /**
             * 备注信息。
             * @example `测试`
             */
            Remark: string;
            /**
             * 所有关系编号。取值说明如下：
             * - **1**：持有者
             * - **2**：可以发布
             * - **4**：可以订阅
             * - **6**：可以发布和订阅
             * @example `6`
             */
            Relation: number;
            /**
             * 创建时间。
             * @example `1570700947000`
             */
            CreateTime: number;
            /**
             * Topic名称。
             * @example `test`
             */
            Topic: string;
            Tags: {
                /**
                 * Topic所绑定的标签。
                 */
                Tag: {
                    /**
                     * 标签键。
                     * @example `CartService`
                     */
                    Key: string;
                    /**
                     * 标签值。
                     * @example `SrviceA`
                     */
                    Value: string;
                }[];
            };
            /**
             * Topic所在的实例ID。
             * @example `MQ_INST_188077086902****_BXSuW61e`
             */
            InstanceId: string;
            /**
             * Topic异步创建的状态。取值说明如下：
             * - **0**：创建中。
             * - **1**：服务中。
             * @example `0`
             */
            ServiceStatus: number;
        }[];
    };
}
