export interface DeployFunctionRequest {
    /**
     * 部署单ID。
     * @example `dep-5e49fd471c9d4451c33bdd06`
     */
    "DeploymentId": string;
    /**
     * 云函数所属的服务空间ID。
     * @example `dece4ea0-d432-4cfa-****-8a88d205e2b8xxxx`
     */
    "SpaceId": string;
}
