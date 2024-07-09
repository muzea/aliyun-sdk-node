export interface GetEditingProjectMaterialsRequest {
    /**
     * 云剪辑工程ID。可通过以下方式获取：
     * - 登录[点播控制台](https://vod.console.aliyun.com)，选择**制作中心** > **视频剪辑**，查看ID。
     * - 通过**创建云剪辑工程**接口创建工程时，为返回参数ProjectId的值。
     * @example `1982361011093374****`
     */
    "ProjectId": string;
    /**
     * 素材类型。取值：
     * - **video**：视频
     * - **audio**：纯音频
     * @example `video`
     */
    "Type"?: string;
    /**
     * 素材类型。取值：
     * - **video**：视频
     * - **audio**：纯音频
     * - **image**：图片
     * @example `video`
     */
    "MaterialType"?: string;
}
