export interface UpdateApplicationDescriptionRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk2676xxxx`
     */
    "InstanceId": string;
    /**
     * 应用ID。
     * @example `app_mkv7rgt4d7i4u7zqtzev2mxxxx`
     */
    "ApplicationId": string;
    /**
     * 应用描述信息。
     * @example `Demo应用-用于测试使用`
     */
    "Description"?: string;
}
