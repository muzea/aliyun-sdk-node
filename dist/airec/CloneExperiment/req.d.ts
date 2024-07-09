export interface CloneExperimentRequest {
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
     * 是否完成克隆。
     * 取值：
     * - **true**：校验实验信息。
     * - **false**：默认false,创建实验。
     * @example `false`
     */
    "dryRun"?: boolean;
    /**
     * 实验ID。
     * @example `123`
     */
    "experimentId": string;
}
