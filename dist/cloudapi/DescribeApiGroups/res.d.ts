export interface DescribeApiGroupsResponse {
    /**
     * 返回指定的页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求唯一标识
     * @example `D6E46F10-F26C-4AA0-BB69-FE2743D9AE62`
     */
    RequestId: string;
    /**
     * 返回指定的每页条数
     * @example `10`
     */
    PageSize: number;
    /**
     * 返回结果的总条数
     * @example `2`
     */
    TotalCount: number;
    ApiGroupAttributes: {
        /**
         * 返回分组集合
         */
        ApiGroupAttribute: {
            /**
             * 基准路径
             * @example `/v2/`
             */
            BasePath: string;
            /**
             * 计费状态，取值：
             * - **NORMAL**：正常
             * - **LOCKED**：欠费锁定
             * @example `NORMAL`
             */
            BillingStatus: string;
            /**
             * 分组最高QPS限制，默认500，可申请提高
             * @example `500`
             */
            TrafficLimit: number;
            /**
             * 实例ID
             * @example `apigateway-cn-v6419k43245xx`
             */
            InstanceId: string;
            /**
             * 实例类型
             * @example `VPC_SHARED`
             */
            InstanceType: string;
            /**
             * 分组所在区域
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 最后修改时间，格林威治时间
             * @example `2016-08-01T08:45:15Z`
             */
            ModifiedTime: string;
            /**
             * API分组 ID，系统生成，全局唯一
             * @example `be6d2abcc0dd4f749fc2d2edd6567164`
             */
            GroupId: string;
            /**
             * API组名称
             * @example `Traffic`
             */
            GroupName: string;
            /**
             * 分组描述
             * @example `TrafficInformations.`
             */
            Description: string;
            /**
             * 违法锁定，取值：
             * - **NORMAL**：正常
             * - **LOCKED**：违法锁定
             * @example `NORMAL`
             */
            IllegalStatus: string;
            /**
             * HTTPS安全策略
             * @example `HTTPS2_TLS1_0`
             */
            HttpsPolicy: string;
            /**
             * API组对应的二级域名，自定义域名cname所用
             * @example `be6d2abcc0dd4f749fc2d2edd6567164-cn-hangzhou.alicloudapi.com`
             */
            SubDomain: string;
            /**
             * 创建时间，格林威治时间
             * @example `2016-08-01T08:45:15Z`
             */
            CreatedTime: string;
            Tags: {
                /**
                 * 标签列表
                 */
                TagInfo: {
                    /**
                     * 标签的key
                     * @example `key`
                     */
                    Key: string;
                    /**
                     * 标签的value
                     * @example `value`
                     */
                    Value: string;
                }[];
            };
        }[];
    };
}
