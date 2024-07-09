export interface GetMobileRequest {
    /**
     * App端SDK获取的登录Token。
     * @example `Dfafdafad5422****`
     */
    "AccessToken": string;
    /**
     * 外部流水号。
     * @example `22345****`
     */
    "OutId"?: string;
}
