export interface RemoveUsersRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 坐席ID列表，格式为JSON数组的字符串，数组元素是坐席ID。
     * @example `["agent1@ccc-test","agent2@ccc-test"]`
     */
    "UserIdList"?: string;
    /**
     * 是否强制删除。
     * @example `true`
     */
    "Force"?: boolean;
    /**
     * 待删除用户列表文件的OSS对象的ObjectKey。
     * @example `temp/removeUsers.xlsx`
     */
    "FilePath"?: string;
    /**
     * 通知邮件地址。
     * @example `123@abc.com`
     */
    "NotificationEmail"?: string;
}
