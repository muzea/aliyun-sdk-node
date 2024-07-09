export interface UpdateTrainTaskRequest {
    /**
     * 训练任务ID。
     * @example `43`
     */
    "Id": number;
    /**
     * 训练任务名称。
     * @example `test1`
     */
    "Name": string;
    /**
     * 多训练集数据集ID的集合。
     * @example `558,549`
     */
    "DatasetIds"?: string;
    /**
     * 多训练集标注集ID的集合。
     * @example `971,955`
     */
    "LabelIds"?: string;
    /**
     * 基于之前的训练任务ID。
     * @example `456`
     */
    "PreTrainTaskId"?: number;
    /**
     * 是否基于之前的训练任务。
     * @example `false`
     */
    "PreTrainTaskFlag"?: boolean;
    /**
     * 训练任务描述。
     * @example `test1`
     */
    "Description"?: string;
    /**
     * 训练模型。取值如下 ：
     * - **COMMON**：均衡
     * - **HIGH_ACC**：高精度
     * - **HIGH_PERF**：高性能
     * @example `COMMON,HIGH_ACC,HIGH_PERF`
     */
    "TrainMode"?: string;
    /**
     * - **Epoch**：学习轮数
     * - **Lr**：学习率
     * - **height**：图片高
     * - **width**：图片宽
     * - **ValidationDatasetId**：验证数据集ID
     * - **ValidationLabelId**：验证标注集ID
     * - **TestDatasetId**：测试数据集ID
     * - **TestLabelId**：测试标注集ID
     * @example `{ "Epoch": 23, "Lr": 0.5, "height": "23", "width": "32", "ValidationDatasetId": 948, "ValidationLabelId": 1266, "TestDatasetId": 948, "TestLabelId": 1266 }`
     */
    "AdvancedParameters"?: string;
}
