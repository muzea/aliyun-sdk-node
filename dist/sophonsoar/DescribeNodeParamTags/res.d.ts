export interface DescribeNodeParamTagsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `6BE94351-712A-505D-A40A-BC77CC8254A9`
     */
    RequestId: string;
    /**
     * 推荐的路径配置。
     */
    ParamReferredPaths: {
        /**
         * 上游节点名称。
         * @example `DataFormat_1`
         */
        ParamName: string;
        /**
         * 路径数组。
         */
        ReferredPath: string[];
    }[];
}
