export interface GetScalingRulesRequest {
    /**
     * 应用ID。
     * @example `33e39be9-3e5f-*********`
     */
    "AppId": string;
    /**
     * 部署分组ID。
     * @example `d8bb9d60-9**************`
     */
    "GroupId": string;
    /**
     * 可不传或指定规则类型：
     * - SCALE\_IN表示缩容。
     * - SCALE\_OUT表示扩容。
     * @example ` SCALE_IN`
     */
    "Mode"?: string;
}
