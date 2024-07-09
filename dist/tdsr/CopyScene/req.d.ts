export interface CopySceneRequest {
    /**
     * 场景Id
     * @example `sgyuyewyew****`
     */
    "SceneId": string;
    /**
     * 新场景名称
     * @example `场景A`
     */
    "SceneName": string;
    /**
     * 复制到的项目Id，默认为空，复制到当前场景所在的项目
     * @example `opwuoieywtyqw****`
     */
    "ProjectId"?: string;
}
