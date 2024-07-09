export interface ListRegistrationPoliciesRequest {
    /**
     * 分页查询时显示的当前页的页码。取值：1~10000。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 分页查询时设置的每页数量。取值：1~500。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 设备注册策略名称。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `registration_policy_name`
     */
    "Name"?: string;
    /**
     * 用户组ID。取值来源：
     * - [ListUserGroups](~~ListUserGroups~~)：批量查询用户组。
     * - [CreateUserGroup](~~CreateUserGroup~~)：创建用户组。
     * @example `usergroup-6f1ef2fc56b6****`
     */
    "UserGroupId"?: string;
    /**
     * 公司设备注册限制类型。取值：
     * - **Unlimited**：不限制。
     * - **LimitAll**：按照总数限制。
     * - **LimitDiff**：按照终端分类限制。
     * @example `LimitAll`
     */
    "CompanyLimitType"?: string;
    /**
     * 个人设备注册限制类型。取值：
     * - **Unlimited**：不限制。
     * - **LimitAll**：按照总数限制。
     * - **LimitDiff**：按照终端分类限制。
     * @example `LimitDiff`
     */
    "PersonalLimitType"?: string;
    /**
     * 设备注册策略状态。取值：
     * - **Enabled**：开启。
     * - **Disabled**：关闭。
     * @example `Enabled`
     */
    "Status"?: string;
    /**
     * 策略匹配目标类型。取值：
     * - **UserGroupAll**：关联全体用户。
     * - **UserGroupNormal**：关联部分用户组。
     * @example `UserGroupAll`
     */
    "MatchMode"?: string;
    /**
     * 设备注册策略ID集合。最多可输入100个设备注册策略ID。
     */
    "PolicyIds"?: string[];
}
