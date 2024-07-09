export interface UpdateExperimentStatusRequest {
    /**
     * 实例ID。
     * @example `airec-cn-****`
     */
    "instanceId": string;
    /**
     * 场景ID。
     * @example `sceneId`
     */
    "sceneId": string;
    /**
     * 实验ID。
     * @example `123`
     */
    "experimentId": string;
}
