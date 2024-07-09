export interface GetGroupResponse {
    /**
     * 请求ID。
     * @example `0441BD79-92F3-53AA-8657-F8CE4A2B912A`
     */
    RequestId: string;
    /**
     * 账户组对象信息。
     */
    Group: {
        /**
         * 组ID。
         * @example `group_d6sbsuumeta4h66ec3il7yxxxx`
         */
        GroupId: string;
        /**
         * 组名称。
         * @example `group_name`
         */
        GroupName: string;
        /**
         * 组描述。
         * @example `test_group`
         */
        Description: string;
        /**
         * 组外部标识，用于与外部系统关联，默认为账户组ID。
         * @example `group_d6sbsuumeta4h66ec3il7yxxxx`
         */
        GroupExternalId: string;
        /**
         * 组来源类型，目前只支持自建，取值可选范围：
         * - build_in：自建。
         * @example `build_in`
         */
        GroupSourceType: string;
        /**
         * 组来源ID，默认为实例ID。
         * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
         */
        GroupSourceId: string;
        /**
         * 组创建时间, Unix时间戳格式，单位为毫秒。
         * @example `1652085686179`
         */
        CreateTime: number;
        /**
         * 组最近一次更新时间，Unix时间戳格式，单位为毫秒。
         * @example `1652085686179`
         */
        UpdateTime: number;
        /**
         * 实例ID。
         * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
         */
        InstanceId: string;
    };
}
