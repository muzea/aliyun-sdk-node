export interface AddVersionWhiteDevicesByDeviceGroupsRequest {
    /**
     * 项目ID
     * @example `UEWE232`
     */
    "ProjectId": string;
    /**
     * 版本类型
     * @example `FOTA`
     */
    "VersionType": string;
    /**
     * 设备分组ID
     * @example `12`
     */
    "GroupIds": string;
    /**
     * 版本ID
     * @example `12323`
     */
    "VersionId": string;
}
