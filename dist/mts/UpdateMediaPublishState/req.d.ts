export interface UpdateMediaPublishStateRequest {
    /**
     * 需更新发布状态的媒体ID。可以从[新增媒体](~~44458~~)的返回参数中获取，也可以登录媒体处理控制台，通过**媒体管理** > **媒体列表**找到目标视频，单击**管理**，从目标视频的基础信息页签获取。
     * @example `3e6149d5a8c944c09b1a8d2dc3e4****`
     */
    "MediaId": string;
    /**
     * 发布状态。默认值：**Initialed**（初始）。可选范围：
     * - **true**：发布。
     * - **false**：不发布。
     * @example `true`
     */
    "Publish"?: boolean;
}
