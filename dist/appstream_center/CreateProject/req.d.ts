export interface CreateProjectRequest {
    /**
     * 内容唯一id。
     * @example `c-06vcpamarryyq****`
     */
    "ContentId"?: string;
    /**
     * 项目描述。
     * @example `xxx`
     */
    "Description"?: string;
    /**
     * 帧率（FPS）。
     * @example `30`
     */
    "FrameRate"?: number;
    /**
     * 是否开启分辨率自适应。
     * @example `true`
     */
    "TerminalResolutionAdaptation"?: boolean;
    /**
     * 会话分辨率宽度，单位为像素。若TerminalResolutionAdaptation为true，此参数表示最大分辨率高度；若TerminalResolutionAdaptation为false，此参数表示自定义分辨，设置后会话分辨率不跟随终端显示区域变化，始终为此处设置的值。
     * @example `4096`
     */
    "SessionResolutionWidth"?: number;
    /**
     * 分辨率的高度，单位为像素。若TerminalResolutionAdaptation为true，此参数表示最大分辨率高度；若TerminalResolutionAdaptation为false，此参数表示自定义分辨，设置后会话分辨率不跟随终端显示区域变化，始终为此处设置的值。
     * @example `4096`
     */
    "SessionResolutionHeight"?: number;
    /**
     * 协议类型。
     * @example `mix`
     */
    "StreamingMode"?: string;
    /**
     * 剪切板状态。
     * @example `0`
     */
    "Clipboard"?: number;
    /**
     * 文件操作状态。
     * @example `0`
     */
    "FileTransfer"?: number;
    /**
     * 会话断连保留时长，单位为分钟，有效值1-300。
     * @example `15`
     */
    "KeepAliveDuration"?: number;
    /**
     * 项目名称。
     * @example `notepad++xxxxx`
     */
    "ProjectName"?: string;
    /**
     * 云环境的唯一id。
     * @example `c-xxxxxxx`
     */
    "CloudEnvId"?: string;
    /**
     * 项目关联的会话规格
     * @example `appstreaming.general.entry`
     */
    "SessionSpec"?: string;
}
