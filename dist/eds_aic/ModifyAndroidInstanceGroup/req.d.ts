export interface ModifyAndroidInstanceGroupRequest {
    /**
     * 实例组ID。
     * @example `ag-cuv4scs4obxhs****
    `
     */
    "InstanceGroupId"?: string;
    /**
     * 实例组的新名称。
     * >
     * > - 实例组名称长度不超过30个字符；请以大/小写字母或中文开头，不能以http://和https://开头，仅支持中文、英文、数字、半角冒号（:）、下划线（_）、点号（.）或者连字符（-）
     * @example `newName`
     */
    "NewInstanceGroupName"?: string;
    /**
     * 策略ID。
     * @example `pg-2w97kp89gnsif****`
     */
    "PolicyGroupId"?: string;
}
