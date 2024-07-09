export interface ListUsersResponse {
    /**
     * 响应信息
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
         * 数据
         */
        Items: {
            /**
             * RAM 用户名
             * @example `xxx`
             */
            RamUsername: string;
            /**
             * 电子邮件
             * @example `a@a.com`
             */
            Email: string;
            /**
             * 手机号码
             * @example `186000000`
             */
            PhoneNumber: string;
            /**
             * 所属部门列表
             */
            Departments: {
                /**
                 * 描述
                 * @example `部门`
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
                 * 部门名称
                 * @example `不明`
                 */
                Name: string;
                /**
                 * ID
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
             * 用户来源
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
             * @example `高x`
             */
            Name: string;
            /**
             * ID
             * @example `2020-07-14T14:01:41.000+08:00`
             */
            Id: string;
            /**
             * 用户名
             * @example `xxx`
             */
            Username: string;
        }[];
        /**
         * 总页数
         * @example `1`
         */
        TotalPages: number;
        /**
         * 总条数
         * @example `10`
         */
        TotalElements: number;
    };
    /**
     * 返回码
     * @example `OK`
     */
    Code: string;
}
