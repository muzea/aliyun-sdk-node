export interface ListLogoSamplesResponse {
    /**
     * 请求结果，取值如下：true：请求成功。                                 false：请求失败。
     * @example `True`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `526B029B-2A59-5A71-9C22-B01926D80B14`
     */
    RequestId: string;
    /**
     * 图片
     */
    Images: string[];
}
