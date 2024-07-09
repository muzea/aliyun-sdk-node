export interface DescribeImagePipelineExecutionsRequest {
    /**
     * 所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * >该参数暂未开放使用。
     */
    "Tag"?: {
        /**
         * >该参数暂未开放使用。
         * @example `null`
         */
        Key: string;
        /**
         * >该参数暂未开放使用。
         * @example `null`
         */
        Value: string;
    }[];
    /**
     * 镜像模板ID。
     * @example `ip-2ze5tsl5bp6nf2b3****`
     */
    "ImagePipelineId"?: string;
    /**
     * 镜像构建任务ID。
     * @example `exec-5fb8facb8ed7427c****`
     */
    "ExecutionId"?: string;
    /**
     * 镜像构建任务的状态。支持同时设置多个值，每个值之间以半角逗号（,）间隔，格式示例为`BUILDING,DISTRIBUTING`。取值范围：
     * - BUILDING：构建中。
     * - DISTRIBUTING：分发中。
     * - RELEASING：资源回收中。
     * - SUCCESS：成功。
     * - FAILED：失败。
     * - CANCELLING：取消中。
     * - CANCELLED：已取消。
     * > 目前不支持参数值为空时默认查询所有状态的镜像构建任务。
     * @example `BUILDING`
     */
    "Status"?: string;
    /**
     * 查询凭证（Token）。取值为上一次调用该接口返回的`NextToken`参数值，初次调用接口时无需设置该参数。
     * @example `AAAAAdDWBF2****`
     */
    "NextToken"?: string;
    /**
     * 分页查询时每页行数。取值范围：1~500。
     * 默认值：50。
     * @example `50`
     */
    "MaxResults"?: number;
}
