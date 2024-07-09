export interface DeleteABTestSceneRequest {
    /**
     * 应用的名称、应用id
     * @example `my_app_group_name`
     */
    "appGroupIdentity": string;
    /**
     * 场景ID
     * @example `20404`
     */
    "sceneId": number;
}
