export interface ListNamespacesRequest {
    /**
     * 项目ID。
     * @example `PIY3UB0T`
     */
    "ProjectId": string;
    /**
     * 数据空间划分和鉴权方式。
     * - 1：基于账号
     * - 2：基于设备
     * - 101：基于账号和设备
     * @example `101`
     */
    "AuthType"?: string;
}
