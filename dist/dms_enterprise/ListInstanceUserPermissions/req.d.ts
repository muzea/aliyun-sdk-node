export interface ListInstanceUserPermissionsRequest {
    /**
     * 租户ID。
     * > 鼠标移动到界面右上角的头像处，查看租户ID。具体操作，请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 实例ID，可通过调用接口[ListInstances](~~141936~~)或[GetInstance](~~141567~~)获取该参数的值。
     * @example `174****`
     */
    "InstanceId": string;
    /**
     * 用户昵称，可通过调用接口[ListUsers](~~141938~~)或[GetUser](~~147098~~)获取该参数的值。
     * >NickName的值即为UserName的值。
     * @example `test_nick_name`
     */
    "UserName"?: string;
    /**
     * 第几页。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页数据量。
     * @example `100`
     */
    "PageSize"?: number;
}
