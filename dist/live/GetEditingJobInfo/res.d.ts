export interface GetEditingJobInfoResponse {
    /**
     * 导播台ID。
     * @example `53200b81-b761-4c10-842a-a0726d97****`
     */
    CasterId: string;
    /**
     * 剪辑任务信息。包含：
     * - **OutputVodId**：输出的Vod文件ID。
     * - **TaskStatus**：剪辑任务状态。（-1：失败；0：任务初始化；1：剪辑中；2：上传中；3：任务成功。）
     * - **StorageLocation**：点播存储地址。
     * - **FileName**：剪辑文件名。
     * - **ShowId**：节目ID。
     * @example `"EditingTasksInfo": {     "OutputVodId": "3e34733b40b9a96ccf5c1ff6f69****",     "TaskStatus": 1,     "StorageInfo": {       "StorageLocation": "***bucket***",       "FileName": "EditFile****"     },     "ShowId": "42200b81-b761-4c10-842a-a0726d97****"   },`
     */
    EditingTasksInfo: string;
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
}
