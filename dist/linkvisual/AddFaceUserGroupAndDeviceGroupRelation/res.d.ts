export interface AddFaceUserGroupAndDeviceGroupRelationResponse {
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
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 人脸同步关系信息
     */
    Data: {
        /**
         * 关联控制Id
         * @example `qcb2yea4ha4dxmly`
         */
        ControlId: string;
        /**
         * 修改时间
         * @example `2020-11-20 18:59:01`
         */
        ModifiedTime: string;
    };
}
