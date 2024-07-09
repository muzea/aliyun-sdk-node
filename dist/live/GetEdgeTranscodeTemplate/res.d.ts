export interface GetEdgeTranscodeTemplateResponse {
    /**
     * 请求ID。
     * @example `******3B-0E1A-586A-AC29-742247******`
     */
    RequestId: string;
    /**
     * 边缘转码模版。
     */
    Template: {
        /**
         * 码率配置，有固定码率，码率随源（ws）2种。
         * @example `3000`
         */
        Bitrate: string;
        /**
         * 视频编码格式，枚举：
         * - H.264。
         * - H.265。
         * @example `H.264`
         */
        Codec: string;
        /**
         * 模板创建时间。
         * @example `2023-07-25T02:48:58Z`
         */
        CreateTime: string;
        /**
         * 帧率配置，有固定帧率，帧率随源（ws）2种。
         * @example `30`
         */
        Fps: string;
        /**
         * 关键帧配置，有按帧配置，按秒配置，关键帧随源（ws）3种。
         * @example `2s`
         */
        Gop: string;
        /**
         * 模版名称。
         * @example `my_template`
         */
        Name: string;
        /**
         * 分辨率配置，有固定分辨率，分辨率随源（ws）2种。
         * > 当使用固定分辨率，width/height取值为-1/-2时，则表示宽/高自适应。
         * @example `1920*1080`
         */
        Resolution: string;
        /**
         * 模板ID。
         * @example `9b1571b513cb44f7a1ba6ae561ff****`
         */
        TemplateId: string;
        /**
         * 边缘转码类型。
         * @example `common`
         */
        Type: string;
    };
}
