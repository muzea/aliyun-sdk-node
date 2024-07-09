export interface RevokeApplicationFromGroupsRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 应用ID。
     * @example `app_mkv7rgt4d7i4u7zqtzev2mxxxx`
     */
    "ApplicationId": string;
    /**
     * 组ID列表，单次操作最多支持100个组ID。
     * @example `group_miu8e4t4d7i4u7uwezgr54xxxx`
     */
    "GroupIds": string[];
}
