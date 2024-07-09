export interface DescribeABTestSceneRequest {
    /**
     * 应用的名称或者是应用id
     * @example `my_app_group_name`
     */
    "appGroupIdentity": string;
    /**
     * 实验场景ID。
     * @example `20404`
     */
    "sceneId": number;
}
