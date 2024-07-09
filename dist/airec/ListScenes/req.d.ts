export interface ListScenesRequest {
    /**
     * 实例ID。
     * @example `airec-cn-o400whm78004`
     */
    "instanceId": string;
    /**
     * 场景状态：
     * - **DRAFT**：唤醒，重新发布
     * - **PUBLISHING** ：发布
     * - **RUNNING**：运行中
     * - **FAILED**：发布失败
     * - **FROZEN** ：冻结
     * @example `1`
     */
    "status"?: string;
    /**
     * 场景ID。
     * @example `test`
     */
    "sceneId"?: string;
    /**
     * 指定页码，默认为：1。
     * @example `1`
     */
    "page"?: number;
    /**
     * 指定每页展示条数，默认为10，限制:1-50。
     * @example `10`
     */
    "size"?: number;
}
