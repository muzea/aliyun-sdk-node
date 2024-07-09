export interface OnsInstanceInServiceListResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `0598E46F-DB06-40E2-AD7B-C45923EE****`
     */
    RequestId: string;
    Data: {
        /**
         * 返回所有已发布的实例信息列表。
         */
        InstanceVO: {
            /**
             * 实例是否有命名空间。取值说明如下：
             * - **true**：拥有独立命名空间，资源命名确保实例内唯一，跨实例之间可重名。
             * - **false**：无独立命名空间，实例内或者跨实例之间，资源命名必须全局唯一。
             * @example `true`
             */
            IndependentNaming: boolean;
            /**
             * 实例名称。
             * @example `test1`
             */
            InstanceName: string;
            /**
             * 铂金版实例的过期时间。
             * @example `1551024000000`
             */
            ReleaseTime: number;
            /**
             * 实例状态。取值说明如下：
             * - **0**：铂金版实例部署中
             * - **2**：标准版实例已欠费
             * - **5**：标准版实例或铂金版实例服务中
             * - **7**：铂金版实例升级中且服务可用
             * @example `5`
             */
            InstanceStatus: number;
            Tags: {
                /**
                 * 实例所绑定的标签。
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
             * @example `MQ_INST_188077086902****_BXSuW61e`
             */
            InstanceId: string;
            /**
             * 实例类型。取值说明如下：
             * - **1**：标准版实例
             * - **2**：铂金版实例
             * 各类型实例的规格和差异说明，请参见[实例规格](~~185261~~)。
             * @example `2`
             */
            InstanceType: number;
            /**
             * 实例的创建时间。
             * 该参数值的格式为毫秒级Unix时间戳。
             * @example `1640847284000`
             */
            CreateTime: number;
            /**
             * 主题数量。
             * @example `1`
             */
            TopicCount: number;
            /**
             * 消费者分组数量。
             * @example `3`
             */
            GroupCount: number;
        }[];
    };
}
