export interface UpdateTrainTaskResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `6CED723E-067B-040A-A14F-59B2D9283E9B`
     */
    RequestId: string;
    /**
     * 出参数据实体。
     */
    Data: {
        /**
         * 训练任务ID。
         * @example `43`
         */
        Id: number;
        /**
         * 创建时间。
         * @example `1631762402000`
         */
        GmtCreate: number;
        /**
         * 任务名称。
         * @example `test1`
         */
        TaskName: string;
        /**
         * 任务描述。
         * @example `test1`
         */
        Description: string;
        /**
         * 数据集ID。
         * @example `120`
         */
        DatasetId: number;
        /**
         * 数据集名称。
         * @example `test1`
         */
        DatasetName: string;
        /**
         * 标注ID。
         * @example `188`
         */
        LabelId: number;
        /**
         * 标注名字。
         * @example `test2`
         */
        LabelName: string;
        /**
         * 训练模型。取值如下 ：
         * - **COMMON**：均衡
         * - **HIGH_ACC**：高精度
         * - **HIGH_PERF**：高性能
         * @example `COMMON`
         */
        TrainMode: string;
        /**
         * - **Epoch**：学习轮数
         * - **Lr**：学习率
         * - **height**：图片高
         * - **width**：图片宽
         * - **ValidationDatasetId**：验证数据集ID
         * - **ValidationLabelId**：验证标注集ID
         * - **TestDatasetId**：测试数据集ID
         * - **TestLabelId**：测试标注集ID
         * @example `{\"TestLabelId\":1266,\"TestDatasetId\":948,\"Lr\":0.5,\"width\":\"32\",\"ValidationLabelId\":1266,\"Epoch\":23,\"ValidationDatasetId\":948,\"height\":\"23\"}`
         */
        AdvancedParameters: string;
        /**
         * 训练状态。取值如下：
         * - **INIT**：未训练
         * - **PREPARING**：准备中
         * - **TRAINING**：训练中
         * - **TRAIN_SUCCESS**：训练成功
         * - **TRAIN_FAIL**：训练失败
         * @example `TRAIN_SUCCESS`
         */
        TrainStatus: string;
        /**
         * 模型ID。
         * @example `14`
         */
        ModelId: number;
        /**
         * 模型效果。
         * @example `[{"id": "TOP1_ACC", "name": "top1准确率", "value": 100.0}, {"id": "TOP5_ACC", "name": "top5准确率", "value": 100.0}]`
         */
        ModelEffect: string;
    };
}
