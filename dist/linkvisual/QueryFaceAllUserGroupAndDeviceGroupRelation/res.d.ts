export interface QueryFaceAllUserGroupAndDeviceGroupRelationResponse {
    /**
     * 错误码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求ID。
     * @example `0A13279A-5640-45E7-87AA-83750541AD0E`
     */
    RequestId: string;
    /**
     * 错误描述。
     * @example `success`
     */
    ErrorMessage: string;
    /**
     * 接口调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口返回值。
     */
    Data: {
        /**
         * 分页大小。
         * @example `20`
         */
        PageSize: number;
        /**
         * 总数。
         * @example `10`
         */
        Total: number;
        /**
         * 分页号。
         * @example `1`
         */
        Page: number;
        /**
         * 用户组、设备组人脸同步关系列表。
         */
        List: {
            /**
             * 设备组ID。
             * @example `TestDeviceGro****`
             */
            DeviceGroupId: string;
            /**
             * 用户组、设备组同步关系控制ID。
             * @example `ni1iyxqry0j0****`
             */
            ControlId: string;
            /**
             * 修改时间。
             * @example `2020-05-12 17:12:37`
             */
            ModifiedTime: string;
            /**
             * 人脸同步关系（同步用户照片和用户信息）。
             * @example `SYNC_INFO_PICTURE`
             */
            ControlType: string;
            /**
             * 用户组ID。
             * @example `TestUserGro****`
             */
            UserGroupId: string;
        }[];
    };
}
