export interface ListCustomTextResponse {
    /**
     * 请求唯一标识
     * @example `1813ceee-7fe5-41b4-87e5-982a4d18cca5`
     */
    RequestId: string;
    /**
     * 是否成功：true 成功，false 失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码
     * @example `NoData`
     */
    Code: string;
    /**
     * 错误说明
     * @example `success`
     */
    Message: string;
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 业务数据
     */
    Data: {
        /**
         * 主键ID
         * @example `40`
         */
        Id: number;
        /**
         * 标题
         * @example `标题`
         */
        Title: string;
        /**
         * 内容
         * @example `内容`
         */
        Content: string;
        /**
         * 创建时间
         * @example `创建时间`
         */
        CreateTime: string;
        /**
         * 修改时间
         * @example `修改时间`
         */
        UpdateTime: string;
        /**
         * 创建用户
         * @example `创建用户`
         */
        CreateUser: string;
        /**
         * 修改用户
         * @example `修改用户`
         */
        UpdateUser: string;
    }[];
}
