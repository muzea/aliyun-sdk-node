export interface CreateUserRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 坐席登录名，长度为4-64个字符，可包含英文大小写字母、数字、英文句点“.”、下划线“_”或短划线“-”。
     * @example `agent`
     */
    "LoginName": string;
    /**
     * 坐席展示名，长度为1-128个字符。
     * @example `坐席小王`
     */
    "DisplayName": string;
    /**
     * 坐席的个人电话号码，该号码在场外模式下会用到，坐席可以使用该号码进行场外模式接听。
     * @example `1382114****`
     */
    "Mobile"?: string;
    /**
     * 坐席邮箱地址，坐席创建成功后会发送邮件到该邮箱，邮件中包含呼叫中心登录地址，以及RAM账户的用户名和密码，请妥善保管。
     * @example `username@example.com`
     */
    "Email": string;
    /**
     * 工作模式。
     * @example `ON_SITE`
     */
    "WorkMode"?: string;
    /**
     * 角色ID，格式为：角色@实例ID，包含三种角色：Admin（管理员）、Manager（技能组组长）、Agent（坐席）。
     * @example `Agent@ccc-test`
     */
    "RoleId": string;
    /**
     * 技能组的技能等级列表，格式为JSON数组的字符串，数组元素最大为100个，数组元素是一个对象，包含两个字段：skillGroupId和skillLevel，skillGroupId填写要添加的技能组ID，skillLevel填写要添加的技能等级，取值范围1-10，值越小，业务能力越强，单位时间内能处理更多的通话。
     * @example `[{"skillGroupId":"skillgroup1@ccc-test","skillLevel":1},{"skillGroupId":"skillgroup2@ccc-test","skillLevel":10}]`
     */
    "SkillLevelList"?: string;
    /**
     * 首次登录时是否需要重置密码，如果为true，则在首次登录RAM账户时会提示重置密码，否则不提示。默认为false。
     * @example `false`
     */
    "ResetPassword"?: boolean;
    /**
     * 坐席的工号，客户可根据需要自行设置。
     * @example `1001`
     */
    "DisplayId"?: string;
    /**
     * 坐席头像地址。
     * @example `http://abc.com/sam.jpg`
     */
    "AvatarUrl"?: string;
    /**
     * 座席昵称。
     * @example `老王`
     */
    "Nickname"?: string;
}
