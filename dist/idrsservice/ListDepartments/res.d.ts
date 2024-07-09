export interface ListDepartmentsResponse {
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
     * 返回数据
     */
    Data: {
        /**
         * 数据项
         */
        Items: {
            /**
             *  描述
             * @example `描述`
             */
            Description: string;
            /**
             * 管理员列表
             */
            Administrators: {
                /**
                 * 用户姓名
                 * @example `user`
                 */
                Name: string;
                /**
                 * 用户 ID
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
             * 名称
             * @example `名称`
             */
            Name: string;
            /**
             * ID
             * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
             */
            Id: string;
        }[];
        /**
         * 总页数
         * @example `11`
         */
        TotalPages: number;
        /**
         * 总条目数
         * @example `1`
         */
        TotalElements: number;
    };
    /**
     * 返回码
     * @example `OK`
     */
    Code: string;
}
