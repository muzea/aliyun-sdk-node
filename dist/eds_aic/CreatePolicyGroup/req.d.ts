export interface CreatePolicyGroupRequest {
    /**
     * HTML5客户端文件传输策略。
     * @example `off`
     */
    "Html5FileTransfer"?: string;
    /**
     * 本地磁盘映射权限。
     * @example `off`
     */
    "LocalDrive"?: string;
    /**
     * 策略名称。
     * @example `默认策略`
     */
    "PolicyGroupName"?: string;
    /**
     * 是否开启本地摄像头重定向。
     * @example `off`
     */
    "CameraRedirect"?: string;
    /**
     * 剪切板权限。
     * @example `readwrite`
     */
    "Clipboard"?: string;
    /**
     * 分辨率的高度。
     * @example `1280`
     */
    "ResolutionHeight"?: number;
    /**
     * 分辨率的宽度。
     * @example `720`
     */
    "ResolutionWidth"?: number;
}
