export interface ListUsersResponse {
    /**
     * 请求ID。
     * @example `4B450CA1-36E8-4AA2-8461-86B42BF4CC4E`
     */
    RequestId: string;
    /**
     * 请求返回结果是否被截断。
     * @example `true`
     */
    IsTruncated: boolean;
    /**
     * 当`IsTruncated`为`true`时才有此字段，当返回`true`时，需要继续调用此接口，并且使用`Marker`获取截断后的内容 。
     * @example `EXAMPLE`
     */
    Marker: string;
    Users: {
        /**
         * RAM用户列表。
         */
        User: {
            /**
             * RAM用户的显示名称。
             * @example `张*`
             */
            DisplayName: string;
            /**
             * RAM用户邮箱。
             * > 暂不提供该参数。
             * @example `zhangq****@example.com`
             */
            Email: string;
            /**
             * RAM用户的更新时间（UTC时间）。
             * @example `2015-01-23T12:33:18Z`
             */
            UpdateDate: string;
            /**
             * RAM用户手机号码。
             * > 暂不提供该参数。
             * @example `86-1860000****`
             */
            MobilePhone: string;
            /**
             * RAM用户ID。
             * @example `20732900249392****`
             */
            UserId: string;
            /**
             * 备注。
             * @example `这是一位云计算工程师`
             */
            Comments: string;
            /**
             * RAM用户的创建时间（UTC时间）。
             * @example `2015-01-23T12:33:18Z`
             */
            CreateDate: string;
            /**
             * RAM用户的登录名称。
             * @example `zhangq****`
             */
            UserName: string;
        }[];
    };
}
