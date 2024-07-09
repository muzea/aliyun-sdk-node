export interface GetDepartmentResponse {
    /**
     * 错误消息
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
         * 描述
         * @example `描述`
         */
        Description: string;
        /**
         * 创建日期
         * @example `2020-07-14T14:01:41.000+08:00`
         */
        CreatedAt: string;
        /**
         * 更新日期
         * @example `2020-07-14T14:01:41.000+08:00`
         */
        UpdatedAt: string;
        /**
         * 姓名
         * @example `名称`
         */
        Name: string;
        /**
         * ID
         * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
         */
        Id: string;
    };
    /**
     * 请求状态码
     * @example `OK`
     */
    Code: string;
}
