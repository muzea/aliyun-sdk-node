export interface EnableResourceDirectoryRequest {
    /**
     * 新管理账号名称。
     * 格式：`<前缀>@rdadmin.aliyunid.com`。其中，<前缀>允许输入英文字母、数字、特殊字符`_.-`，且必须以英文字母或数字开头和结尾，不能输入连续特殊字符。<前缀>的长度为2~50个字符。
     * @example `user01@rdadmin.aliyunid.com`
     */
    "MAName"?: string;
    /**
     * 新创建管理账号的安全手机号码。
     * 置空表示采用当前登录账号的安全手机号码。该手机号码必须与[SendVerificationCodeForEnableRD](~~SendVerificationCodeForEnableRD~~)中获取验证码时使用的手机号码一致。
     * 格式：`<国家码>-<手机号码>`。
     * <props="intl">
     * > 不支持填写`86-<手机号码>`的中国内地手机号码。
     * </props>
     * <props="china">
     * > 仅支持填写`86-<手机号码>`的中国内地手机号码。
     * </props>
     * @example `xx-13900001234`
     */
    "MASecureMobilePhone"?: string;
    /**
     * 验证码。
     * 您可以调用[SendVerificationCodeForEnableRD](~~SendVerificationCodeForEnableRD~~)获取验证码。
     * @example `123456`
     */
    "VerificationCode"?: string;
    /**
     * 开通方式。取值：
     * - CurrentAccount：使用当前登录账号开通资源目录。
     * - NewManagementAccount：新创建管理账号开通资源目录。该方式下，您需要配置`MAName`、`MASecureMobilePhone`和`VerificationCode`。
     * @example `CurrentAccount`
     */
    "EnableMode": string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：开通资源目录检查，不会实际开通资源目录。
     * - **false**（默认值）：开通资源目录。
     * @example `false`
     */
    "DryRun"?: boolean;
}
