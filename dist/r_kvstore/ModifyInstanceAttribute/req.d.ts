export interface ModifyInstanceAttributeRequest {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 新的实例名称。名称为2~80个字符，以大小写英文字母或中文开头，不支持空格及特殊字符：`@/:=”<>{[]}`。
     * @example `newinstancename`
     */
    "InstanceName"?: string;
    /**
     * 新的默认账号密码，默认账号为以实例ID命名的账号（例如r-bp10noxlhcoim2****）。
     * > 长度为8~32位，需包含大写字母、小写字母、数字、特殊字符（支持`!@#$%^&*()_+-=`）中至少三种。
     * @example `uW8+nsrp`
     */
    "NewPassword"?: string;
    /**
     * <props="china">[实例释放保护状态](~~165005~~)，取值：</props>
     * <props="intl">实例释放保护状态，取值：</props>
     * * **true**：开启。
     * * **false**：关闭。
     * > 仅按量付费实例支持本参数。
     * @example `true`
     */
    "InstanceReleaseProtection"?: boolean;
}
