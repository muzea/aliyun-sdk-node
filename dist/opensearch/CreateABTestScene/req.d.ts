export interface CreateABTestSceneRequest {
    /**
     * 应用名称
     * @example `my_app_group_name`
     */
    "appGroupIdentity": string;
    /**
     * ABTest实验场景，参考[ABTestScene](~~173618~~)
     */
    "body"?: any;
    /**
     * 是否校验入参数据合法性，默认false。
     * 取值：
     * - **true**：只校验参数合法性。
     * - **false**：校验参数合法性，创建归因配置。
     * @example `false`
     */
    "dryRun"?: boolean;
}
