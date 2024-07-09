export interface ListUnfinishedOnceTaskRequest {
    /**
     * 任务类型。取值：
     * - **ASSETS_COLLECTION**：资产采集任务
     * - **IMAGE_SCAN**：镜像扫描任务
     * @example `IMAGE_SCAN`
     */
    "TaskType": string;
    /**
     * 目标对象值。可选参数
     * 当任务类型IMAGE_SCAN时：目标对象值为镜像的uuid
     * 当任务类型为ASSETS_COLLECTION时：目标对象值为机器的uuid。
     * @example `4fe8e1cd-3c37-4851-b9de-124da32c****`
     */
    "Target"?: string;
}
