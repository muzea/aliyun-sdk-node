export interface UpdateIdpDepartmentRequest {
    /**
     * 自定义身份源配置ID。
     * @example `598`
     */
    "IdpConfigId": string;
    /**
     * 部门ID。
     * @example `10653`
     */
    "DepartmentId": string;
    /**
     * 部门名称。
     * @example `示例部门`
     */
    "DepartmentName": string;
}
