export interface QueryFaceUserGroupAndDeviceGroupRelationResponse {
    /**
     * 错误码
     * @example `200`
     */
    Code: string;
    /**
     * 请求Id
     * @example `0A13279A-5640-45E7-87AA-83750541AD0E`
     */
    RequestId: string;
    /**
     * 错误描述
     * @example `success`
     */
    ErrorMessage: string;
    /**
     * 接口调用是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口调用返回值
     */
    Data: {
        /**
         * 设备组Id
         * @example `TestDeviceGroupId`
         */
        DeviceGroupId: string;
        /**
         * 用户组、设备组人脸同步关系控制Id
         * @example `ni1iyxqry0j03plv`
         */
        ControlId: string;
        /**
         * 修改时间
         * @example `2020-05-12 17:12:37`
         */
        ModifiedTime: string;
        /**
         * 人脸同步关系
         * @example `SYNC_INFO_PICTURE`
         */
        ControlType: string;
        /**
         * 用户组Id
         * @example `TestUserGroupId`
         */
        UserGroupId: string;
    };
}
