export interface GetAdaptationResponse {
    /**
     * 应用适配申请ID。
     * @example `5435****`
     */
    AdaptApplyId: number;
    /**
     * 应用适配的创建时间。
     * @example `2022-04-06 02:00:00`
     */
    GmtCreate: string;
    /**
     * 应用适配的最后修改时间。
     * @example `2022-04-06 02:00:00`
     */
    GmtModified: string;
    /**
     * 应用ID。
     * @example `4384****`
     */
    AppId: string;
    /**
     * 应用版本ID。
     * @example `1432****`
     */
    AppVersionId: string;
    /**
     * 适配目标信息。
     */
    AdaptTarget: {
        /**
         * 启动程序。
         * > 当`AppType`为`end_game`、`hand_game`和`render_app`时，显示该参数。
         * @example `/example/example.exe`
         */
        StartProgram: string;
        /**
         * 分辨率。
         * > 当`AppType`为`end_game`和`hand_game`时，显示该参数。
         * @example `1080p`
         */
        Resolution: string;
        /**
         * 帧率。
         * 单位：Fps。
         * > 当`AppType`为`end_game`和`hand_game`时，显示该参数。
         * @example `30`
         */
        FrameRate: number;
        /**
         * 码率。
         * 单位：Mbps。
         * > 当`AppType`为`end_game`和`hand_game`时，显示该参数。
         * @example `30`
         */
        BitRate: number;
    };
    /**
     * 请求ID。
     * @example `46329898-489C-4E63-9BA1-C1DA5C5D0986`
     */
    RequestId: string;
}
