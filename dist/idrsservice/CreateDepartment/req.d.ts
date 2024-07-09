export interface CreateDepartmentRequest {
    /**
     * 部门描述
     * @example `说明`
     */
    "Description"?: string;
    /**
     * 标签
     * @example `标签`
     */
    "Label"?: string;
    /**
     * 部门名称
     * @example `部门名称`
     */
    "Name": string;
    /**
     * 客户端幂等参数
     * @example `无`
     */
    "ClientToken"?: string;
}
