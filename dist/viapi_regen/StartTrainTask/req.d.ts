export interface StartTrainTaskRequest {
    /**
     * 训练任务ID。
     * @example `68`
     */
    "Id": number;
    /**
     * 是否跳过数据量校验强制开启任务。
     * @example `true`
     */
    "ForceStartFlag"?: boolean;
    /**
     * 数据集标识。
     * @example `123`
     */
    "RelyOnTaskId"?: number;
}
