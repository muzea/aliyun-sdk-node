export interface VerifyPlaybookResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `0DFC9403-54EB-5672-B690-9AA93C9EBB54`
     */
    RequestId: string;
    /**
     * 校验的结果信息
     */
    CheckTaskInfos: {
        /**
         * 校验信息的提示等级。取值：
         * - warn：警告提示，在剧本运行过程中可能出现问题。
         * - error：错误提示，剧本无法编译通过。
         * - remind：建议提示，不影响剧本的发布与运行，建议优化剧本格式。
         * @example `error`
         */
        RiskLevel: string;
        /**
         * 剧本的节点名称。
         * @example `python3_3`
         */
        NodeName: string;
        /**
         * 检查未通过时的具体错误信息
         * @example `Node [python3_3] doesn't have the asset information`
         */
        Detail: string;
    }[];
}
