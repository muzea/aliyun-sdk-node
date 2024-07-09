export interface CreateRoleRequest {
    /**
     * MaxCompute项目名称
     * @example `projectA`
     */
    "projectName": string;
    /**
     * 请求体参数。
     * 取值可参考[MaxCompute权限](~~27935~~)。
     * @example `{"name": "role_name","type": "resource/adminn","policy": "", //policy 的内容，如果是acl，此项不需要。"acl": { // 如果是policy，则此字段不需要"table": [{"name": "", "actions":["","",]}, {"name": "", "actions":[]}],"resource":[{"name": "", "actions":["","",]}, {"name": "", "actions":[]}],"function":[{"name": "", "actions":["","",]}, {"name": "", "actions":[]}],"package":[{"name": "", "actions":["","",]}, {"name": "", "actions":[]}],"project":[{"name": "", "actions":[]}], //管控台页面固定只有当前项目"instance":[{"name": "", "actions":[]}] //管控台页面只支持name * }}// name 支持写 *`
     */
    "body"?: string;
}
