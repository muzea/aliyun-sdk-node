export interface AddLiveAIProduceRulesRequest {
    /**
     * 主播流域名。
     * @example `demo.aliyundoc.com`
     */
    "Domain": string;
    /**
     * 直播流应用名称。
     * @example `AppName`
     */
    "App": string;
    /**
     * 字幕模板名称
     * @example `sub01`
     */
    "SubtitleName": string;
    /**
     * 拉流触发。取值：
     * - true：拉流时启动字幕，若5分钟内没有拉流则会断掉字幕，后续再有拉流才会启动。
     * - false：只要有推流就启动字幕，与是否有拉流无关。
     * @example `true`
     */
    "IsLazy"?: boolean;
    /**
     * 字幕输出规格，取值：
     * - 横屏流畅 360P 640x360：`lp_ld`
     * - 竖屏流畅 360P 360x640：`lp_ld_v`
     * - 横屏标清 480P 854x480：`lp_sd`
     * - 竖屏标清 480P 480x854：`lp_sd_v`
     * - 横屏高清 720P 1280x720：`lp_hd`
     * - 竖屏高清 720P 720x1280：`lp_hd_v`
     * - 横屏超清 1080P 1920x1080：`lp_ud`
     * - 竖屏超清 1080P 1080x1920：`lp_ud_v`
     * @example `lp_ld`
     */
    "LiveTemplate": string;
    /**
     * 字幕规则描述。可包含中英文、数字、字符，不超过128位。
     * @example `live AI subtitle template`
     */
    "Description"?: string;
}
