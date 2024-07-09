export interface DeleteSwimmingLaneRequest {
    /**
     * 泳道ID
     * @example `229`
     */
    "LaneId": number;
    /**
     * MSE命名空间名字
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
