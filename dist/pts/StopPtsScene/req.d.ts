export interface StopPtsSceneRequest {
    /**
     * 待停止的场景ID，每次成功创建场景后返回的SceneID，在PTS控制台的场景列表页也可查看。更多信息，请参见[参数说明](~~201321~~)。
     * @example `GV4DEBG`
     */
    "SceneId": string;
}
