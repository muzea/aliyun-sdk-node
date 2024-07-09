export interface SetUsersPermissionsRequest {
    /**
     * 需要设置权限的用户ID，多个使用英文逗号（,）分隔，最多30个，每个ID由纯数字组成。
     * @example `100001,100002`
     */
    "UserIds": string;
    /**
     * 白板文档唯一标识符。获取DocKey，请参见[CreateWhiteBoard](~~204299~~)。
     * @example `4EZlwmRW0gDG****`
     */
    "DocKey": string;
    /**
     * 白板应用唯一标识符。获取AppID，请参见[CreateApp](~~204234~~)。
     * @example `7mbj****`
     */
    "AppID": string;
    /**
     * 用户白板权限类型，取值：
     * - **ban**：无权限。
     * - **read**：只读。
     * - **edit**：读写。
     * @example `edit`
     */
    "PermissionType": string;
}
