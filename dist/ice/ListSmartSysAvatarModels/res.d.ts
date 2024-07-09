export interface ListSmartSysAvatarModelsResponse {
    /**
     * 请求ID
     * @example `****63E8B7C7-4812-46AD-0FA56029AC86****`
     */
    RequestId: string;
    /**
     * 数字人信息列表
     */
    SmartSysAvatarModelList: {
        /**
         * 数字人名称
         * @example `云乔`
         */
        AvatarName: string;
        /**
         * 数字人Id，用于提交单独数字人渲染任务或者智能时间线中使用数字人形象
         * @example `yunqiao`
         */
        AvatarId: string;
        /**
         * 数字人示例封面地址
         * @example `http://ice-pub-media.myalicdn.com/smart/avatarModel/coverDemo/yunqiao.mp4`
         */
        CoverUrl: string;
        /**
         * 数字人示例视频地址
         * @example `http://ice-pub-media.myalicdn.com/smart/avatarModel/videoDemo/yunqiao.mp4`
         */
        VideoUrl: string;
        /**
         * 视频分辨率宽。
         * @example `1080`
         */
        Width: number;
        /**
         * 视频分辨率高。
         * @example `1920`
         */
        Height: number;
        /**
         * 视频码率。
         * @example `4000`
         */
        Bitrate: number;
        /**
         * 是否支持渲染人像遮罩。
         * @example `false`
         */
        OutputMask: boolean;
    }[];
    /**
     * 系统数字人形象总数
     * @example `4`
     */
    TotalCount: number;
}
