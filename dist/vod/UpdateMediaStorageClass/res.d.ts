export interface UpdateMediaStorageClassResponse {
    /**
     * 请求ID。
     * @example `30FA0B7C-3A81-5449-93CD-ACA149E6****`
     */
    RequestId: string;
    /**
     * 任务状态。取值：
     * - **Processing**：处理中。
     * - **Failed**：失败。
     * @example `Processing`
     */
    Status: string;
    IgnoredList: {
        /**
         * 获取失败的媒资ID列表。
         */
        MediaId: string[];
    };
    ForbiddenList: {
        /**
         * 处理失败的媒资ID列表。
         */
        MediaForbiddenReasonDTO: {
            /**
             * 媒资ID。
             * @example `19e231ee6e3e417fbf2e92ec2680****`
             */
            MediaId: string;
            /**
             * 失败原因。
             * @example `TargetStorageClassInconsistent`
             */
            Reason: string;
        }[];
    };
}
