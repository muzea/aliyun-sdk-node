export interface DeleteTrainTaskResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `910D87D5-4498-0845-8DA9-DCDC6D661097`
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
         * - COMMON：均衡
         * - HIGH_ACC：高精度
         * - HIGH_PERF：高性能
         * @example `COMMON`
         */
        TrainMode: string;
        /**
         * 训练状态。取值如下：
         * - INIT：未训练
         * - PREPARING：准备中
         * - TRAINING：训练中
         * - TRAIN_SUCCESS：训练成功
         * - TRAIN_FAIL：训练失败
         * @example `TRAIN_SUCCESS`
         */
        TrainStatus: string;
        /**
         * 模型ID。
         * @example `29`
         */
        ModelId: number;
        /**
         * 模型效果。
         * @example `[{"id": "TOP1_ACC", "name": "top1准确率", "value": 100.0}, {"id": "TOP5_ACC", "name": "top5准确率", "value": 100.0}]`
         */
        ModelEffect: string;
    };
}
