export interface SetAppNameRequest {
    /**
     * 白板应用唯一标识符。获取白板应用ID，请参见[CreateApp](~~204234~~)。
     * @example `7mbj****`
     */
    "AppID": string;
    /**
     * 白板应用名，由1~32位的中文、英文、数字或下划线组成。
     * @example `new_whiteboard_app`
     */
    "AppName": string;
}
