export interface ListRulesRequest {
    /**
     * 实例ID。
     * @example `airec-cn-o400whm78004`
     */
    "instanceId": string;
    /**
     * 要修改规则的场景ID，
     * 如要修改全局运营规则，则填**global**。
     * @example `scenetest`
     */
    "sceneId": string;
    /**
     * 规则类型：
     * **selection:** 选品规则
     * **operation:**运营规则。
     * @example `selection`
     */
    "ruleType": string;
    /**
     * 规则状态：
     * **DRAFT:** 草稿状态；
     * **EFFECTIVE:** 生效状态；
     * **PUBLISHING:**发布中状态；
     * **INEFFECTIVE:** 已失效状态；
     * **FAILED:**未生效状态。
     * @example `EFFECTIVE`
     */
    "status"?: string;
    /**
     * 指定页码，默认为：1。
     * @example `1`
     */
    "page"?: number;
    /**
     * 指定每页展示条数，默认为10，限制:[1-50]。
     * @example `10`
     */
    "size"?: number;
    /**
     * 开始时间（秒级时间戳）。
     * @example `1567584765`
     */
    "startTime"?: number;
    /**
     * 结束时间 （秒级时间戳）。
     * @example `1567584765`
     */
    "endTime"?: number;
}
