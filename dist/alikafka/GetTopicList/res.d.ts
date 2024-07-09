export interface GetTopicListResponse {
    /**
     * 当前页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 请求ID。
     * @example `C0D3DC5B-5C37-47AD-9F22-1F559880****`
     */
    RequestId: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `operation success.`
     */
    Message: string;
    /**
     * 页大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * Topic总数。
     * @example `1`
     */
    Total: number;
    TopicList: {
        /**
         * Topic详情。
         */
        TopicVO: {
            /**
             * 服务状态。取值：
             * **0**：服务中。
             * 删除Topic，则Topic无服务状态。
             * @example `0`
             */
            Status: number;
            /**
             * Topic的分区数量。
             * @example `6`
             */
            PartitionNum: number;
            /**
             * 备注。取值：
             * - 只能包含字母、数字、下划线（_）和短划线（-）。
             * - 长度为3～64字符。
             * @example `test`
             */
            Remark: string;
            /**
             * 创建时间戳。单位：毫秒
             * @example `1576563109000`
             */
            CreateTime: number;
            /**
             * Topic名称。取值：
             * - 只能包含字母、数字、下划线（_）和短划线（-）。
             * - 限制在3～64字符，长于64字符将被自动截取。
             * @example `topic_name`
             */
            Topic: string;
            /**
             * 服务状态名称。取值：
             * **服务中**。
             * 删除Topic，则Topic无服务状态名称。
             * @example `服务中`
             */
            StatusName: string;
            /**
             * **LocalTopic**配置为**true**时，会配置日志清理策略。取值：
             * - false：delete清理策略。
             * - true：compact清理策略。
             * @example `false`
             */
            CompactTopic: boolean;
            /**
             * 实例ID。
             * @example `alikafka_pre-cn-0pp1954n****`
             */
            InstanceId: string;
            /**
             * Topic的存储引擎。取值：
             * - false：云存储。
             * - true：Local存储。
             * @example `false`
             */
            LocalTopic: boolean;
            /**
             * Topic所属实例的地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            Tags: {
                /**
                 * 标签。
                 */
                TagVO: {
                    /**
                     * 标签键。
                     * @example `Test`
                     */
                    Key: string;
                    /**
                     * 标签值。
                     * @example `Test`
                     */
                    Value: string;
                }[];
            };
            /**
             * 标识Topic是否为自动创建。
             * @example `false`
             */
            AutoCreate: boolean;
            /**
             * Topic 相关配置。
             * @example `{"replication-factor":3}`
             */
            TopicConfig: string;
        }[];
    };
}
