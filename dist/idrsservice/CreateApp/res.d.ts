export interface CreateAppResponse {
    /**
     * 返回信息
     * @example `无`
     */
    Message: string;
    /**
     * 请求 ID
     * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
     */
    RequestId: string;
    /**
     * 无
     */
    Data: {
        /**
         * 创建者名称
         * @example `李李`
         */
        CreatorName: string;
        /**
         * 是否禁用
         * @example `false`
         */
        Disabled: boolean;
        /**
         * 创建日期
         * @example `2020-07-14T14:01:41.000+08:00`
         */
        CreatedAt: string;
        /**
         * 应用名
         * @example `应用1`
         */
        Name: string;
        /**
         * 应用 ID
         * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
         */
        Id: string;
    };
    /**
     * code
     * @example `OK`
     */
    Code: string;
}
