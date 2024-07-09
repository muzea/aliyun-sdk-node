export interface DeleteMFADeviceForUserRequest {
    /**
     * 用户ID。
     * @example `u-00q8wbq42wiltcrk****`
     */
    "UserId": string;
    /**
     * MFA设备ID。
     * 您可以调用[ListMFADevicesForUser](~~333531~~)查询MFA设备ID。
     * @example `mfa-00ujhet8pycljj7j****`
     */
    "MFADeviceId": string;
    /**
     * 目录ID。
     * @example `d-00fc2p61****`
     */
    "DirectoryId": string;
}
