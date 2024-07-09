export interface AddFaceUserGroupResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~288314~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `group already exist`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `0A13279A-5640-45E7-87AA-83750541AD0E`
     */
    RequestId: string;
    /**
     * 是否调用成功：
     * - **true**：表示调用成功。
     * - **false**：表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的数据。
     */
    Data: {
        /**
         * 用户组名称。
         * @example `TestUserGroup`
         */
        UserGroupName: string;
        /**
         * 添加用户组的时间。
         * @example `2020-11-20 18:59:01`
         */
        ModifiedTime: string;
        /**
         * 系统为该用户组生成的ID。
         * > 在人脸底库服务的其它接口调用中，会使用**UserGroupId**，请妥善保存。
         * @example `kvjy****`
         */
        UserGroupId: string;
    };
}
