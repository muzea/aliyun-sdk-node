export interface ListRankingModelVersionsRequest {
    /**
     * 实例ID。
     * @example `airec-cn-****`
     */
    "instanceId": string;
    /**
     * 模型模板ID。
     * @example `1`
     */
    "templateId": string;
    /**
     * 指定页码，默认为1。
     * @example `1`
     */
    "page"?: number;
    /**
     * 指定每页展示条数，默认为10，限制:[1-50]。
     * @example `10`
     */
    "size"?: number;
    /**
     * 版本状态。
     * 取值：
     * - **DRAFT**：草稿状态。
     * - **EFFECTIVE**：生效状态。
     * - **PUBLISHING**：发布中状态。
     * - **INEFFECTIVE**：已失效状态。
     * - **FAILED**：未生效状态。
     * @example `TRAINING`
     */
    "status"?: string;
}
