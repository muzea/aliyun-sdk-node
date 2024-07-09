export interface SetAppCallbackUrlRequest {
    /**
     * 白板应用唯一标识符。获取白板应用ID，请参见[CreateApp](~~204234~~)。
     * @example `7mbj****`
     */
    "AppID": string;
    /**
     * 白板应用回调地址URL。
     * @example `http://www.example.com/callback`
     */
    "AppCallbackUrl": string;
    /**
     * 白板应用回调鉴权码，由8~20位大小写字母、数字或下划线组成。
     * @example `CallbackSecret123`
     */
    "AppCallbackAuthKey": string;
}
