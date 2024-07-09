export interface DescribeImagePipelineExecutionsResponse {
    /**
     *
     * @example `AAAAAdDWBF2****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 返回的镜像组件数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页查询时每页行数。
     * @example `50`
     */
    MaxResults: number;
    ImagePipelineExecution: {
        /**
         * 镜像构建任务的详细信息组成的列表。
         */
        ImagePipelineExecutionSet: {
            /**
             * 镜像构建任务的创建时间。
             * @example `2020-11-24T06:00:00Z`
             */
            CreationTime: string;
            /**
             * 镜像模板ID。
             * @example `ip-2ze5tsl5bp6nf2b3****`
             */
            ImagePipelineId: string;
            /**
             * 镜像构建任务的状态。可能值：
             * - BUILDING：构建中。
             * - DISTRIBUTING：分发中。
             * - RELEASING：资源回收中。
             * - SUCCESS：成功。
             * - FAILED：失败。
             * - CANCELLING：取消中。
             * - CANCELLED：已取消。
             * @example `BUILDING`
             */
            Status: string;
            /**
             * 任务最近一次更新的时间。
             * @example `2020-11-25T06:00:00Z`
             */
            ModifiedTime: string;
            /**
             * 企业资源组ID。
             * @example `rg-bp67acfmxazb4p****`
             */
            ResourceGroupId: string;
            /**
             * 执行结果信息。
             * @example `Create transition vpc "vpc-2ze70rc7093j9idu6****" success!`
             */
            Message: string;
            /**
             * 目标镜像ID。
             * @example `m-bp67acfmxazb4p****`
             */
            ImageId: string;
            /**
             * 构建任务ID。
             * @example `exec-5fb8facb8ed7427c****`
             */
            ExecutionId: string;
            Tags: {
                /**
                 * >该参数暂未开放使用。
                 */
                Tag: {
                    /**
                     * >该参数暂未开放使用。
                     * @example `null`
                     */
                    TagValue: string;
                    /**
                     * >该参数暂未开放使用。
                     * @example `null`
                     */
                    TagKey: string;
                }[];
            };
        }[];
    };
}
