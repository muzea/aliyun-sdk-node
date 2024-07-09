export interface StartTrainTaskResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `E59736FC-B481-07AC-87B5-68F389477861`
     */
    RequestId: string;
    /**
     * 出参数据实体。
     */
    Data: {
        /**
         * 训练任务ID。
         * @example `68`
         */
        Id: number;
        /**
         * - **labelInfo**：标签分布情况。
         * - **labelName**：检查不符合规范的标签名称。
         * - **minCount**：标签的数量最低标准。
         * - **labelType**：图片数量、标注框数量、标注轮廓数量。
         * @example `String	{\"labelInfo\":{\"狗\":1,\"猫\":59},\"labelName\":\"[\\\"狗\\\"]\",\"labelType\":\"图片数量\",\"minCount\":\"20\"}`
         */
        CheckResult: any;
        /**
         * 创建时间。
         * @example `1634106778000`
         */
        GmtCreate: number;
        /**
         * 任务名称。
         * @example `训练任务名称`
         */
        TaskName: string;
        /**
         * 任务描述。
         * @example `训练任务描述`
         */
        Description: string;
        /**
         * 数据集ID。
         * @example `120`
         */
        DatasetId: number;
        /**
         * 数据集名称。
         * @example `猫狗数据集名称`
         */
        DatasetName: string;
        /**
         * 标注ID。
         * @example `228`
         */
        LabelId: number;
        /**
         * 标注名称。
         * @example `猫狗数据集标注`
         */
        LabelName: string;
        /**
         * 训练模型。训练类型取值如下 ：
         * - **COMMON**：均衡
         * - **HIGH_ACC**：高精度
         * - **HIGH_PERF**：高性能
         * @example `COMMON`
         */
        TrainMode: string;
        /**
         * 训练状态。取值如下：
         * - **INIT**：未训练
         * - **PREPARING**：准备中
         * - **TRAINING**：训练中
         * - **TRAIN_SUCCESS**：训练成功
         * - **TRAIN_FAIL**：训练失败
         * @example `PREPARING`
         */
        TrainStatus: string;
        /**
         * 模型ID。
         * @example `123`
         */
        ModelId: number;
        /**
         * 模型效果。
         * @example `[{\"id\": \"TOP1_ACC\", \"name\": \"top1准确率\", \"value\": 100.0}, {\"id\": \"TOP5_ACC\", \"name\": \"top5准确率\", \"value\": 100.0}]`
         */
        ModelEffect: string;
    };
}
