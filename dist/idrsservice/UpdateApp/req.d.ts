export interface UpdateAppRequest {
    /**
     * 应用 ID
     * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
     */
    "Id": string;
    /**
     * 名称
     * @example `名称`
     */
    "Name"?: string;
    /**
     * 是否被禁用
     * @example `false`
     */
    "Disabled"?: boolean;
    /**
     * 包名，用户移动端 SDK 校验
     * @example `com.aliyun.idrs.sdk`
     */
    "PackageName"?: string;
    /**
     * 部门 ID
     * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
     */
    "DepartmentId"?: string;
}
