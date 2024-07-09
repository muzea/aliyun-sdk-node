export interface BatchAddFeishuUsersRequest {
    /**
     * 是否是权限管理员
     * - true
     * - false
     * 不填写默认为false
     * @example `true`
     */
    "IsAuthAdmin"?: boolean;
    /**
     * 是否为admin用户：
     * - true
     * - false
     * 不填写默认为false
     * @example `False`
     */
    "IsAdmin"?: boolean;
    /**
     * 要添加的用户信息
     * @example `{"ad****fd": "张三", "82****5a": "李四"}"`
     */
    "FeishuUsers"?: string;
    /**
     * 所属用户组
     * @example `"0d5fb19b-5555-41f0-99da-1248fc27ca51,0f868dd6_68dd_4d13_8422_c5dca3bd4b61"`
     */
    "UserGroupIds"?: string;
    /**
     * 用户类型
     * - 开发者类型：1
     * - 访问者类型：2
     * - 分析师：3
     * @example `1`
     */
    "UserType"?: number;
}
