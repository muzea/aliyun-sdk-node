export interface GetFileProtectEventCountResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `9B28EC81-2FA7-5097-80D9-0DBE1A3DBD59`
     */
    RequestId: string;
    /**
     * 接口调用成功时，返回的数据。
     * @example `16`
     */
    Data: number;
}
