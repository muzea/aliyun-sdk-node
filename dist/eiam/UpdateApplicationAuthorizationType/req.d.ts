export interface UpdateApplicationAuthorizationTypeRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 应用ID。
     * @example `app_mkv7rgt4d7i4u7zqtzev2mxxxx`
     */
    "ApplicationId": string;
    /**
     * 应用访问授权类型，取值可选范围：
     * - authorize\_required：需要显式授权才可访问。
     * - default\_all：默认所有成员具备访问权限。
     * @example `authorize_required`
     */
    "AuthorizationType": string;
}
