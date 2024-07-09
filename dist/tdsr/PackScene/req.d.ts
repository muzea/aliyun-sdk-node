export interface PackSceneRequest {
    /**
     * 场景ID
     * @example `L2omaCMmQZZkEg4p****`
     */
    "SceneId": string;
    /**
     * 操作类型：download（下载），sync（同步）
     * @example `download`
     */
    "Type": string;
}
