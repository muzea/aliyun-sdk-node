export interface DsgSceneQuerySceneListByNameRequest {
    /**
     * 脱敏场景名称的模糊查询关键字，平台会根据该关键字获取相关脱敏场景信息。
     * @example `dev_`
     */
    "SceneName"?: string;
}
