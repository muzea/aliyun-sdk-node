export interface GetRoleAclOnObjectRequest {
    /**
     * MaxCompute项目名称
     * @example `projectA`
     */
    "projectName": string;
    /**
     * 角色名称
     * @example `roleA`
     */
    "roleName": string;
    /**
     * 对象类型
     * @example `table`
     */
    "objectType": string;
    /**
     * 对象名称
     * @example `tableA`
     */
    "objectName": string;
}
