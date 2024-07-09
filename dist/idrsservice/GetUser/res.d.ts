export interface GetUserResponse {
    /**
     * 返回信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求 ID。
     * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
     */
    RequestId: string;
    /**
     * 无
     */
    Data: {
        /**
         * 电子邮件地址
         * @example `xxx@aa.com`
         */
        Email: string;
        /**
         * 手机号码
         * @example `187000023323`
         */
        PhoneNumber: string;
        /**
         * 部门列表
         */
        Departments: {
            /**
             * 描述
             * @example `描述`
             */
            Description: string;
            /**
             * 创建日期
             * @example `2020-07-14T14:01:41.000+08:00`
             */
            GmtCreate: string;
            /**
             * 名称
             * @example `名称`
             */
            Name: string;
            /**
             * 更新日期
             * @example `2020-07-14T14:01:41.000+08:00`
             */
            GmtModified: string;
            /**
             * 部门 ID
             * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
             */
            Id: string;
        }[];
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
         * 来源
         * @example `ram`
         */
        Source: string;
        /**
         * 角色
         * @example `admin`
         */
        Role: string;
        /**
         * 姓名
         * @example `姓名`
         */
        Name: string;
        /**
         * ID
         * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
         */
        Id: string;
        /**
         * 用户名
         * @example `test`
         */
        Username: string;
    };
    /**
     * 状态码
     * @example `OK`
     */
    Code: string;
}
