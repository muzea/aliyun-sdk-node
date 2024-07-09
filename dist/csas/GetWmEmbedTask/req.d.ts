export interface GetWmEmbedTaskRequest {
    /**
     * 创建嵌入任务时得到的任务ID。取值来源：
     * - [CreateWmEmbedTask](~~CreateWmEmbedTask~~)：创建水印嵌入任务。
     * @example `job:5GfrJYsoaffmCE7Z5bZtjU********`
     */
    "TaskId": string;
}
