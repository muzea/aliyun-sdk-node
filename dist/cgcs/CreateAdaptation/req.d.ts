export interface CreateAdaptationRequest {
    /**
     * 应用版本ID。
     * @example `1432****`
     */
    "AppVersionId": string;
    /**
     * 适配目标信息。
     */
    "AdaptTarget"?: {
        /**
         * 启动程序。
         * 支持Unicode字符，最大512个字符。
         * > 当`AppType`为`end_game`、`hand_game`和`render_app`时，该参数必填。
         * @example `/example/example.exe`
         */
        StartProgram: string;
        /**
         * 分辨率。取值：
         * - 720p
         * - 1080p
         * - 4k
         * > 当`AppType`为`end_game`和`hand_game`时，该参数必填。
         * @example `1080p`
         */
        Resolution: string;
        /**
         * 帧率。取值：
         * - 30
         * - 60
         * 单位：Fps。
         * > 当`AppType`为`end_game`和`hand_game`时，该参数必填。
         * @example `30`
         */
        FrameRate: number;
        /**
         * 码率。
         * 取值范围：1~30。
         * 单位：Mbps。
         * > 当`AppType`为`end_game`和`hand_game`时，该参数必填。
         * @example `30`
         */
        BitRate: number;
    };
}
