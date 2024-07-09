export interface CancelImagePipelineExecutionRequest {
    /**
     * 所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * >该参数暂未开放使用。
     */
    "TemplateTag"?: {
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
     * 构建任务ID。
     * @example `exec-5fb8facb8ed7427c****`
     */
    "ExecutionId": string;
}
