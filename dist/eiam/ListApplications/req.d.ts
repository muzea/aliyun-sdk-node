export interface ListApplicationsRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 列表页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 列表大小。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 应用ID列表。
     * @example `Ram Account SSO`
     */
    "ApplicationIds"?: string[];
    /**
     * 应用名称，只支持左模糊匹配。
     * @example `Ram Account SSO`
     */
    "ApplicationName"?: string;
    /**
     * 应用访问授权类型，取值可选范围：
     * - authorize\_required：需要显式授权才可访问。
     * - default\_all：默认所有成员具备访问权限。
     * @example `authorize_required`
     */
    "AuthorizationType"?: string;
    /**
     * 应用状态，取值可选范围：
     * - enabled：启用中。
     * - disabled：禁用中。
     * @example `enabled`
     */
    "Status"?: string;
}
