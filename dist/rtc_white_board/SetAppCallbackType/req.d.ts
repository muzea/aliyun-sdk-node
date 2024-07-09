export interface SetAppCallbackTypeRequest {
    /**
     * 白板应用唯一标识符。获取AppID，请参见[CreateApp](~~204234~~)。
     * @example `7mbj****`
     */
    "AppID": string;
    /**
     * 白板应用的回调类型，多个使用英文逗号（,）分隔。取值：
     * - **userPermissionCallback**：用户权限回调。
     * - **whiteBoardProfileCallback**：白板元信息回调。
     * - **userProfileCallback**：用户元信息回调。
     * - **hostCheckCallback**：合法域名校验失败回调。
     * @example `userPermissionCallback,whiteBoardProfileCallback,userProfileCallback,hostCheckCallback`
     */
    "AppCallbackType": string;
}
