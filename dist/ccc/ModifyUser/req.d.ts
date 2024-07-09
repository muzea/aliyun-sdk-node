export interface ModifyUserRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 坐席ID。
     * @example `user-test@ccc-test`
     */
    "UserId": string;
    /**
     * 坐席个人电话号码。
     * @example `1382114****`
     */
    "Mobile"?: string;
    /**
     * 工作模式。
     * @example `ON_SITE`
     */
    "WorkMode": string;
    /**
     * 角色ID，格式为：角色@实例ID。
     * @example `Admin@ccc-test`
     */
    "RoleId"?: string;
    /**
     * 坐席的工号。
     * @example `1001`
     */
    "DisplayId"?: string;
    /**
     * 用户的全名
     * @example `张三疯`
     */
    "DisplayName"?: string;
    /**
     * 是否强制修改。
     * @example `true`
     */
    "Force"?: boolean;
    /**
     * 坐席昵称
     * @example `老王`
     */
    "Nickname"?: string;
    /**
     * 坐席头像地址。
     * @example `http://abc.com/sam.jpb`
     */
    "AvatarUrl"?: string;
}
