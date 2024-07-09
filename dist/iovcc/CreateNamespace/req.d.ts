export interface CreateNamespaceRequest {
    /**
     * 项目ID。
     * @example `PIY3UB0T`
     */
    "ProjectId": string;
    /**
     * 数据空间划分和鉴权方式。
     * - **1**：基于账号
     * - **2**：基于设备
     * - **101**：基于账号和设备
     * @example `101`
     */
    "AuthType": string;
    /**
     * Namespace名称。
     * @example `user_data`
     */
    "Name": string;
    /**
     * Namespace说明。
     * @example `存储用户数据`
     */
    "Desc": string;
}
