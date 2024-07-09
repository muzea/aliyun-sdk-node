export interface SetAppDomainNamesRequest {
    /**
     * 白板应用唯一标识符。获取白板应用ID，请参见[CreateApp](~~204234~~)。
     * @example `7mbj****`
     */
    "AppID": string;
    /**
     * 所有会使用到白板应用的客户网站域名，多个使用英文逗号(,)分隔，最多传10个。
     * @example `www.example.com`
     */
    "AppDomainNames": string;
}
