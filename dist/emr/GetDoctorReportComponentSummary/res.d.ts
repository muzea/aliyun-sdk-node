export interface GetDoctorReportComponentSummaryResponse {
    /**
     * 报告内容。
     */
    Data: {
        /**
         * 分数。
         * @example `88`
         */
        Score: number;
        /**
         * 报告摘要。
         * @example `<h4> [计算检测]  计算健康度分数为 88 ，健康度良好，继续加油 </h4><p style=''text-indent：2em''>集群中大部分任务保持健康状态 </p><p style=''text-indent：2em''>集群内存利用率为： 47.8% 偏低 </p>`
         */
        Summary: string;
        /**
         * 优化建议。
         * @example `计算健康度分数为 88 ，集群处于健康状态，继续保持
        计算任务扫描
        对集群中 1518 个计算任务进行了扫描，包含 209 个任务处于不健康状态 ，596 个任务处于亚健康状态 ，713 个任务处于健康状态。
        其中：
               Tez 任务 1518 个，加权平均分为 88 ，内存使用量占整体集群的 100.0% ，CPU 使用量占整体集群的 100.0% ，其中 209 个任务处于不健康状态，596 个任务处于亚健康状态；
        可在下面的任务明细列表中点击''查看详情''，查看存在的具体问题及解决方案。其中''低分任务算力内存时 (GB*Sec)Top20 ''表根据内存时使用量进行排序，由于大任务对集群整体影响可能更大，建议优先关注。
        内存利用率较低
        集群整体内存利用率为 47.8% ，内存利用率较低，计算资源存在浪费，建议优先对内存算力时较大且内存利用率较低的 TOP 任务进行优化
        其中，Tez作业平均内存利用率为 47.8% `
         */
        Suggestion: string;
    };
    /**
     * 请求ID。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    RequestId: string;
}
