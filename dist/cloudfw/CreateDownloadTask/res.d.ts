export interface CreateDownloadTaskResponse {
    /**
     * 任务Id，任务的唯一标识。
     * @example `132`
     */
    TaskId: number;
    /**
     * 返回结果的请求ID。
     * @example `E7F333E0-7B70-54DA-A307-4B2B49DEE923`
     */
    RequestId: string;
    /**
     * 文件下载任务的名称。
     * @example `互联网边界防火墙资产-IPv4`
     */
    TaskName: string;
    /**
     * 任务状态。取值：
     * finish：任务完成。即任务已经完成，可以通过查询任务，获取任务文件下载链接。
     * start：任务开始。
     * error：任务失败。
     * expire：任务过期。即任务文件已经失效，无法下载。
     * @example `start`
     */
    Status: string;
}
