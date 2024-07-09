export interface SetAppStatusRequest {
    /**
     * 白板应用唯一标识符。获取白板应用ID，请参见[CreateApp](~~204234~~)。
     * @example `7mbj****`
     */
    "AppID": string;
    /**
     * 白板应用状态。取值：
     * - **1**：启用。
     * - **2**：停用。
     * @example `1`
     */
    "AppStatus": number;
}
