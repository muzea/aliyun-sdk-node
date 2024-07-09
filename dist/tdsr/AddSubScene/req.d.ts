export interface AddSubSceneRequest {
    /**
     * 场景ID
     * @example `1234****`
     */
    "SceneId": string;
    /**
     * 子场景名称（长度为1~20个字符）
     * @example `子场景A`
     */
    "Name": string;
    /**
     * 上传类型 图片：IMAGE 视频：VIDEO
     * @example `IMAGE`
     */
    "UploadType"?: string;
}
