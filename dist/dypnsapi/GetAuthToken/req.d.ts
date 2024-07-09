export interface GetAuthTokenRequest {
    /**
     * 请求网页地址。
     * @example `https://www.aliyundoc.com/`
     */
    "Url": string;
    /**
     * 请求域名。
     * @example `https://www.aliyundoc.com`
     */
    "Origin": string;
    /**
     * 方案号CODE。
     * @example `FC10000010643****`
     */
    "SceneCode"?: string;
}
