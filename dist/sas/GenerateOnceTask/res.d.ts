export interface GenerateOnceTaskResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `8BB6B8FA-39E8-5654-A309-8EED13B1****`
     */
    RequestId: string;
    /**
     * 是否可以继续创建扫描任务。取值：
     * - **true**：可以继续创建扫描任务。
     * - **false**：无法继续创建扫描任务。
     * > 默认支持同时存在10个扫描任务，超过10个扫描任务时，使用本接口创建扫描任务会失败。您需要等待已有的10个扫描任务中有扫描任务完成后，才可以继续创建新的扫描任务。
     * @example `true`
     */
    CanCreate: boolean;
    /**
     * 最后一次任务id。
     * @example `38730bb078f4a1461d4ed283994c****
    `
     */
    LastTask: string;
    /**
     * 采集时间。
     * @example `1670307567000`
     */
    CollectTime: number;
    /**
     * 总任务数量。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 检测任务id。
     * @example `38730bb078f4a1461d4ed283994c****`
     */
    TaskId: string;
    /**
     * 完成数量。
     * @example `61`
     */
    FinishCount: number;
}
