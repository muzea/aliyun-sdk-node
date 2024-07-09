export interface DeleteSceneRequest {
    /**
     * 场景ID，可通过接口ListScenes获取。
     * @example `3`
     */
    "SceneId"?: string;
    /**
     * 实例ID，可通过接口ListInstances获取。
     * @example `pairec-cn-abcdefg1234`
     */
    "InstanceId"?: string;
}
