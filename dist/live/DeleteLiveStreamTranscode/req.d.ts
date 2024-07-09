export interface DeleteLiveStreamTranscodeRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "Domain": string;
    /**
     * 播流所属应用名称。
     * @example `liveApp****`
     */
    "App": string;
    /**
     * 转码模版。取值：
     * - 标准质量模板：
     *
     *     - lld：流畅。
     *
     *     - lsd：标清。
     *
     *     - lhd：高清。
     *
     *     - lud ：超清。
     * - 窄带高清™转码模板：
     *     - ld：流畅。
     *
     *     - sd：标清。
     *
     *     - hd：高清。
     *
     *     - ud：超清。
     * - 自定义模板：用户自定义命名。
     * @example `lld`
     */
    "Template": string;
}
