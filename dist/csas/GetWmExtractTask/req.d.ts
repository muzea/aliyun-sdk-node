export interface GetWmExtractTaskRequest {
    /**
     * 提取任务ID。取值来源：
     * - [CreateWmExtractTask](~~CreateWmExtractTask~~)：创建水印提取任务。
     * @example `wmt-9648c22d2eb2cb57bb855dcae7898464********`
     */
    "TaskId": string;
}
