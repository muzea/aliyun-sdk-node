export interface ListRolesResponse {
    /**
     * 请求ID。
     * @example `7B8A4E7D-6CFF-471D-84DF-195A7A241ECB`
     */
    RequestId: string;
    /**
     * 请求返回结果是否被截断。
     * @example `true`
     */
    IsTruncated: boolean;
    Roles: {
        /**
         * 角色信息。
         */
        Role: {
            /**
             * 角色描述。
             * @example `ECS管理角色`
             */
            Description: string;
            /**
             * 更新时间。
             * @example `2015-01-23T12:33:18Z`
             */
            UpdateDate: string;
            /**
             * 角色最大会话时间。
             * @example `3600`
             */
            MaxSessionDuration: number;
            /**
             * 角色名称。
             * @example `ECSAdmin`
             */
            RoleName: string;
            /**
             * 创建时间。
             * @example `2015-01-23T12:33:18Z`
             */
            CreateDate: string;
            /**
             * 角色ID。
             * @example `901234567890****`
             */
            RoleId: string;
            /**
             * 角色的资源描述符。
             * @example `acs:ram::123456789012****:role/ECSAdmin`
             */
            Arn: string;
        }[];
    };
    /**
     * 当`IsTruncated`为`true`时才有此字段。当返回`true`时，需要继续调用此接口，并且使用`Marker`获取截断后的内容。
     * @example `EXAMPLE`
     */
    Marker: string;
}
