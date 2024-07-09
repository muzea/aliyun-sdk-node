export interface SubmitStandardCustomizedVoiceJobRequest {
    /**
     * 声音名字
     * - 不超过 32 个字符
     * @example `小专`
     */
    "VoiceName"?: string;
    /**
     * 性别，取值范围：
     * - female：女性
     * - male：男性
     * @example `female`
     */
    "Gender"?: string;
    /**
     * - 认证音频媒资 Id
     * - 请您上传一段音频验证本人身份，声纹与训练音频不符将定制失败
     * ><notice>请清晰朗读并录制如下文案：我确认进行人声克隆定制，训练音频为本人提供，本人承诺对定制内容负责，保证不进行违法违规的内容创作。></notice>
     * @example `****571c704445f9a0ee011406c2****`
     */
    "Authentication"?: string;
    /**
     * - 训练声音素材媒资 Id 列表
     * - 多个素材 MediaId 用英文逗号分割
     * ><notice>所有素材的总时长需要介于 15 - 30 分钟内，单个素材的时长需要大于 1 分钟></notice>
     * @example `****571c704445f9a0ee011406c2****,****571c704445f9a0ee011406c2****,****571c704445f9a0ee011406c2****`
     */
    "Audios"?: string;
    /**
     * 示例音频输出地址
     * - 如果传入此参数，则会在训练成功后在此参数表示的 OSS 地址生成示例音频
     * - 如果不传入此参数，则不会生成示例音频
     * ><notice>需要是您账号下合法的 OSS 公网地址></notice>
     * @example `https://your-bucket.oss-cn-shanghai.aliyuncs.com/demo.mp3`
     */
    "DemoAudioMediaURL"?: string;
}
