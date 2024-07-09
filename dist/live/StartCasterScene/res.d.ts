export interface StartCasterSceneResponse {
    /**
     * 请求ID。
     * @example `CF60DB6A-7FD6-426E-9288-122CC1A52FA7`
     */
    RequestId: string;
    /**
     * 当前场景的输出流地址。用于导播台播放，非旁路输出
     * @example `http://live/caster/example.org`
     */
    StreamUrl: string;
}
