export interface CreateAccessTokenRequest {
    /**
     * 激活码名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以http://或https://开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `test_name`
     */
    "Name"?: string;
    /**
     * 激活码描述。
     * @example `这是导入迁移源激活码`
     */
    "Description"?: string;
    /**
     * 激活码用于注册迁移源的使用次数上限。取值范围为1~1000。
     * 默认值为100。
     * @example `10`
     */
    "Count"?: string;
    /**
     * 激活码的有效使用时间，过期后将不能用于注册新的实例。单位：天。取值范围为1~90。
     * 默认值为30。
     * @example `30`
     */
    "TimeToLiveInDays"?: string;
}
