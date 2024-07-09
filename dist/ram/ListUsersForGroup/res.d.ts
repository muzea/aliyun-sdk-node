export interface ListUsersForGroupResponse {
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
     * 当`IsTruncated`为`true`时才有此字段。当返回`true`时，需要继续调用此接口，并且使用`Marker`获取截断后的内容。
     * @example `EXAMPLE`
     */
    Marker: string;
    Users: {
        /**
         * 用户信息。
         */
        User: {
            /**
             * 显示名称。
             * @example `Alice`
             */
            DisplayName: string;
            /**
             * 加入日期。
             * @example `2015-01-23T12:33:18Z`
             */
            JoinDate: string;
            /**
             * 用户名称。
             * @example `Alice`
             */
            UserName: string;
        }[];
    };
}
