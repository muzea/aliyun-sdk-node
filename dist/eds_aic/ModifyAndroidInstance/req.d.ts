export interface ModifyAndroidInstanceRequest {
    /**
     * 实例ID。
     * @example `acp-8v5bjld0r7tkl****
    `
     */
    "AndroidInstanceId"?: string;
    /**
     * 实例的新名称。
     * >
     * > - 实例名称长度不超过30个字符；请以大/小写字母或中文开头，不能以http://和https://开头，仅支持中文、英文、数字、半角冒号（:）、下划线（_）、点号（.）或者连字符（-）
     * @example `new_name`
     */
    "NewAndroidInstanceName"?: string;
}
