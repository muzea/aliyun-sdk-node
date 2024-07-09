export interface ListPipelineRunNodeStatusResponse {
    /**
     * 请求ID。
     * @example `473469C7-****-****-****-A3DC0DE3C83E
    `
     */
    RequestId: string;
    /**
     * 工作流任务节点状态列表。
     */
    Status: {
        /**
         * 工作流任务的节点ID。
         * @example `node-1jlzg7ncv0j6i3****`
         */
        NodeId: string;
        /**
         * 工作流任务的节点名字。
         * @example `sql`
         */
        NodeName: string;
        /**
         * 节点运行状态。
         * @example `Succeeded`
         */
        Status: string;
        /**
         * 节点的开始运行时间。按照ISO8601标准表示，使用UTC+0时间。格式为：yyyy-MM-ddTHH:mmZ。
         * @example `2021-01-21T17:12:35.232Z`
         */
        StartedAt: string;
        /**
         * 节点的结束运行时间。按照ISO8601标准表示，使用UTC+0时间。格式为：yyyy-MM-ddTHH:mmZ。
         * @example `2021-01-21T17:12:40.232Z`
         */
        FinishedAt: string;
        /**
         * 节点运行时信息，格式为转义后的Map，用户可以自定义输出多个KV对，相同的Key值会取最后输出的Value。当信息为空时，返回“{}”。
         * @example `{\"DLC_INSTANCE_IDS\": \"i-12224afdfsaf,i-22224afdfsaf,i-13224afdfsaf\"}
        `
         */
        RuntimeInfo: string;
    }[];
}
