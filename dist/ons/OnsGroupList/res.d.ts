export interface OnsGroupListResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `16996623-AC4A-43AF-9248-FD9D2D75****`
     */
    RequestId: string;
    Data: {
        /**
         * 查询到的订阅关系集合。
         */
        SubscribeInfoDo: {
            /**
             * 该发布信息的拥有者。
             * @example `138015630679****`
             */
            Owner: string;
            /**
             * 该Group ID的更新时间。
             * @example `1570700979000`
             */
            UpdateTime: number;
            /**
             * 实例是否有命名空间。取值说明如下：
             * - **true**：拥有独立命名空间，资源命名确保实例内唯一，跨实例之间可重名。
             * - **false**：无独立命名空间，实例内或者跨实例之间，资源命名必须全局唯一。
             * @example `true`
             */
            IndependentNaming: boolean;
            /**
             * Group ID即消费集群组ID。
             * @example `GID_test_group_id`
             */
            GroupId: string;
            /**
             * 备注。
             * @example `test`
             */
            Remark: string;
            /**
             * Group ID的创建时间。
             * @example `1568896605000`
             */
            CreateTime: number;
            Tags: {
                /**
                 * Group ID所绑定的标签。
                 */
                Tag: {
                    /**
                     * 标签键。
                     * @example `CartService`
                     */
                    Key: string;
                    /**
                     * 标签值。
                     * @example `ServiceA`
                     */
                    Value: string;
                }[];
            };
            /**
             * 实例ID。
             * @example `MQ_INST_111111111111_DOxxxxxx`
             */
            InstanceId: string;
            /**
             * 查询的Group ID适用的协议。TCP协议和HTTP协议的Group ID不可以共用，需要分别创建。取值说明如下：
             * - **tcp**：表示该Group ID仅适用于TCP协议的消息收发。
             * - **http**：表示该Group ID仅适用于HTTP协议的消息收发。
             * @example `tcp`
             */
            GroupType: string;
        }[];
    };
}
