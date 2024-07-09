export interface ModifyUserRequest {
    /**
     * 指定要修改用户信息的堡垒机实例ID。
     * >您可以调用[describeinstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 指定要修改用户信息的堡垒机的地域ID。
     * >地域ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定要修改用户信息的用户ID。
     * > 您可以调用[ListUsers](~~204522~~)接口获取该参数。
     * @example `1`
     */
    "UserId": string;
    /**
     * 指定修改后的用户密码。至少8位，至少包含大小写字母、数字、特殊符号，最多支持128字符。
     * > 未填则表示不做修改。
     * @example `321****`
     */
    "Password"?: string;
    /**
     * 指定修改后的用户显示姓名。最多支持128字符。
     * > 未填则表示不做修改。
     * @example `Bob`
     */
    "DisplayName"?: string;
    /**
     * 指定修改后的用户备注信息。最多支持500字符。
     * > 未填则表示不做修改。
     * @example `comment`
     */
    "Comment"?: string;
    /**
     * 指定修改后的用户的邮箱。
     * > - 当TwoFactorStatus为“Enable”，且TwoFactorMethods为“email”时，或当TwoFactorStatus为“Global”，且全局双因子配置中TwoFactorMethods为“email”时，该参数为必填。
     * > - 您可以调用[GetInstanceTwoFactor](~~462968~~)接口获取全局双因子配置。
     * > - 未填则表示不做修改。
     * @example `username@example.com`
     */
    "Email"?: string;
    /**
     * 指定修改后的用户手机号码。
     * > - 当TwoFactorStatus为“Enable”，且TwoFactorMethods为“sms”或“dingtalk”时，或当TwoFactorStatus为“Global”，且全局双因子配置中TwoFactorMethods为“sms”或“dingtalk”时，该参数为必填。
     * > - 您可以调用[GetInstanceTwoFactor](~~462968~~)接口获取全局双因子配置。
     * > - 未填则表示不做修改。
     * @example `1358888****`
     */
    "Mobile"?: string;
    /**
     * 指定修改后的用户手机号的国际域名。取值：
     * - **CN**：中国内地（+86）
     * - **HK**：中国香港（+852）
     * - **MO**：中国澳门（+853）
     * - **TW**：中国台湾（+886）
     * - **RU**：俄罗斯（+7）
     * - **SG**：新加坡（+65）
     * - **MY**：马来西亚（+60）
     * - **ID**：印度尼西亚（+62）
     * - **DE**：德国（+49）
     * - **AU**：澳大利亚（+61）
     * - **US**：美国（+1）
     * - **AE**：迪拜（+971）
     * - **JP**：日本（+81）
     * - **GB**：英国（+44）
     * - **IN**：印度（+91）
     * - **KR**：韩国（+82）
     * - **PH**：菲律宾（+63）
     * - **CH**：瑞士（+41）
     * - **SE**：瑞典（+46）
     * - **SA**：沙特（+966）
     * @example `CN`
     */
    "MobileCountryCode"?: string;
    /**
     * 用户有效期开始时间（秒，时间戳格式）
     * > 未填则表示不做修改。
     * @example `1669630029`
     */
    "EffectiveStartTime"?: number;
    /**
     * 用户有效期结束时间（秒，时间戳格式）
     * > 未填则表示不做修改。
     * @example `1672502400`
     */
    "EffectiveEndTime"?: number;
    /**
     * 下次登录是否需要重置密码。取值：
     * - **true**：是
     * - **false**：否
     * > 未填则表示不做修改。
     * @example `true`
     */
    "NeedResetPassword"?: boolean;
    /**
     * 用户双因子状态，取值：
     * - **Global**：遵循全局设定
     * - **Disable**：关闭双因子
     * - **Enable**：开启双因子，遵循单个用户设定
     * > 未填则表示不做修改。
     * @example `Enable`
     */
    "TwoFactorStatus"?: string;
    /**
     * 打开双因子认证方式的数组，目前最多支持一个，取值：
     * - **sms**：短信
     * - **email**：邮件
     * - **dingtalk**：钉钉
     * - **totp**：OTP令牌
     * - **gmusbkey**：国密USBKEY
     * > 当TwoFactorStatus为“Enable”时，至少指定一种。
     * @example `[
          "sms"
    ]`
     */
    "TwoFactorMethods"?: string;
    /**
     * 消息通知语言设置。
     * - **Global**：遵循全局
     * - **Custom**：自定义
     * > 未填则表示不做修改。
     * @example `Custom`
     */
    "LanguageStatus"?: string;
    /**
     * 当LanguageStatus为Custom 时，Language为必填。 取值：
     * - **zh-cn**：简体中文
     * - **en**：英文
     * @example `en`
     */
    "Language"?: string;
}
