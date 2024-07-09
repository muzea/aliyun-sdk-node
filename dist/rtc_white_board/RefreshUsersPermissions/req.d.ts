export interface RefreshUsersPermissionsRequest {
    /**
     * 需要刷新权限的用户ID，多个用英文逗号（,）分隔，最多30个，每个ID由纯数字组成。
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
}
