export interface UpdateABTestFixedFlowDividersRequest {
    /**
     * 应用名称
     * @example `“my_app_group_name”`
     */
    "appGroupIdentity": string;
    /**
     * 场景ID
     * @example `20404`
     */
    "sceneId": number;
    /**
     * 组ID
     * @example `13467`
     */
    "groupId": number;
    /**
     * 实验ID
     * @example `12889`
     */
    "experimentId": number;
    /**
     * 请求体
     */
    "body"?: string[];
}
