export interface ListListenersByConfigResponse {
    /**
     * HTTP状态码。
     * @example `202`
     */
    HttpCode: string;
    /**
     * 数量。
     * @example `7`
     */
    TotalCount: number;
    /**
     * 监听者信息。
     */
    Listeners: {
        /**
         * IP。
         * @example `1.1.1.1`
         */
        Ip: string;
        /**
         * 校验串。
         * @example `23sdfdf`
         */
        Md5: string;
        /**
         * 是否推送成功
         * @example `true`
         */
        Status: string;
        /**
         * 监听者所带的标签
         */
        Labels: any;
        /**
         * 监听者当前的版本，gray（灰度版本）或者nromal（正式版本）
         * @example `gray`
         */
        Version: string;
    }[];
    /**
     * 请求ID。
     * @example `75E1442F-11EC-567A-9CF0-5A36F7904F39`
     */
    RequestId: string;
    /**
     * 响应信息。
     * @example `success`
     */
    Message: string;
    /**
     * 当前页的大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前页码。
     * @example `2`
     */
    PageNumber: number;
    /**
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
}
