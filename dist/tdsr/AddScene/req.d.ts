export interface AddSceneRequest {
    /**
     * 场景类型 3D模型：MODEL_3D  全景图片：PIC  全景视频：VIDEO 混合：MIX
     * @example `MODEL_3D`
     */
    "Type": string;
    /**
     * 场景名称
     * @example `场景A`
     */
    "Name": string;
    /**
     * 项目ID
     * @example `1234****`
     */
    "ProjectId": string;
    /**
     * 业务方UID
     * @example `2345****`
     */
    "CustomerUid"?: string;
}
