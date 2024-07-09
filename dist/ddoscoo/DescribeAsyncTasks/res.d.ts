export interface DescribeAsyncTasksResponse {
    /**
     * 查询到的异步导出任务的总数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `6623EA1F-30FB-5BC8-BEC9-74D55F6F08F1`
     */
    RequestId: string;
    /**
     * 异步导出任务的详细信息。
     */
    AsyncTasks: {
        /**
         * 任务结束时间。使用时间戳表示，单位：毫秒。
         * @example `157927362000`
         */
        EndTime: number;
        /**
         * 任务类型。取值：
         * - **1**：四层导出任务，表示导出DDoS高防实例的端口转发规则。
         * - **2**：七层导出任务，表示导出网站业务转发规则。
         * - **3**：会话、健康检查导出任务，表示导出DDoS高防实例的会话、健康检查配置。
         * - **4**：DDoS防护策略导出任务，表示导出DDoS高防实例的DDoS防护策略配置。
         * - **5**：黑名单（针对目的IP）下载任务，表示导出针对DDoS高防实例的黑名单IP。
         * - **6**：白名单（针对目的IP）下载任务，表示导出针对DDoS高防实例的白名单IP。
         * @example `5`
         */
        TaskType: number;
        /**
         * 任务开始时间。使用时间戳表示，单位：毫秒。
         * @example `156927362000`
         */
        StartTime: number;
        /**
         * 任务参数。使用JSON格式的字符串表达。不同**TaskType**的任务参数不完全相同。
         * **TaskType**为**1**、**3**、**4**、**5**、**6**时，任务参数的结构如下：
         * - **instanceId**：String类型，DDoS高防实例的ID。
         * **TaskType**为**2**时，任务参数的结构如下：
         * - **domain**：String类型，网站业务的域名。
         * @example `{"instanceId": "ddoscoo-cn-mp91j1ao****"}`
         */
        TaskParams: string;
        /**
         * 任务状态。取值：
         * - **0**：表示任务初始化。
         * - **1**：表示任务进行中。
         * - **2**：表示任务成功。
         * - **3**：表示任务失败。
         * @example `2`
         */
        TaskStatus: number;
        /**
         * 任务结果。使用JSON格式的字符串表达。不同**TaskType**的任务结果不完全相同。
         * **TaskType**为**1**、**3**、**4**、**5**、**6**时，任务结果的结构如下：
         * - **instanceId**：String类型，DDoS高防实例的ID。
         * - **url**：String类型，导出文件的OSS下载地址。
         * **TaskType**为**2**时，任务结果的结构如下：
         * - **domain**：String类型，网站业务的域名。
         * - **url**：String类型，导出文件的OSS下载地址。
         * @example `{"instanceId": "ddoscoo-cn-mp91j1ao****","url": "https://****.oss-cn-beijing.aliyuncs.com/heap.bin?Expires=1584785140&OSSAccessKeyId=TMP.3KfzD82FyRJevJdEkRX6JEFHhbvRBBb75PZJnyJmksA2QkMm47xFAFDgMhEV8Nm6Vxr8xExMfiy9LsUFAcLcTBrN3r****&Signature=Sj8BNcsxJLE8l5qm4cjNlDt8gv****"}`
         */
        TaskResult: string;
        /**
         * 任务ID。
         * @example `1`
         */
        TaskId: number;
    }[];
}
