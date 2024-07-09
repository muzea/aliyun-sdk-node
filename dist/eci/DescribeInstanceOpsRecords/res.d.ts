export interface DescribeInstanceOpsRecordsResponse {
    /**
     * 请求ID。
     * @example `89945DD3-9072-47D0-A318-353284CFC7B3`
     */
    RequestId: string;
    /**
     * 运维任务信息合集。
     */
    Records: {
        /**
         * 运维任务创建时间。
         * @example `2021-12-29T15:00:00Z`
         */
        CreateTime: string;
        /**
         * 运维任务过期时间。
         * @example `2099-12-29T15:00:00Z`
         */
        ExpireTime: string;
        /**
         * 运维任务类型。
         * @example `coredump`
         */
        OpsType: string;
        /**
         * 运维任务状态。可能值：
         * - Ready：开启运维任务。
         * - Failed：运维任务执行失败。
         * - Expired：配置下发过期，有效期内未触发运维任务。
         * - Closed：关闭运维任务。
         * - Success：运维任务执行成功。
         * @example `Ready`
         */
        OpsStatus: string;
        /**
         * 运维结果类型。目前仅支持OSS，表示运维任务生成的文件将保存到OSS中。
         * @example `OSS`
         */
        ResultType: string;
        /**
         * 运维结果内容，即运维任务所生成文件在的下载地址。
         * @example `https://******`
         */
        ResultContent: string;
    }[];
}
