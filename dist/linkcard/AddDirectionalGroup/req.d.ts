export interface AddDirectionalGroupRequest {
    /**
     * 给定向分组设置一个名称。
     * 分组名称支持中文、英文、数字及下划线（_），长度不超过30个字符。
     * @example `测试分组`
     */
    "GroupName": string;
}
