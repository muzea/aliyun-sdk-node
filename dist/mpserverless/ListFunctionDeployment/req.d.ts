export interface ListFunctionDeploymentRequest {
    /**
     * 列表的页码。起始值：1 默认值：1。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页行数。最大值：100 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 部署单名称。
     * @example `demoFunction`
     */
    "Name": string;
    /**
     * 服务空间ID。
     * @example `dece4ea0-d432-4cfa-****-8a88d205e2b8`
     */
    "SpaceId": string;
    /**
     * 部署单元状态，取值：
     * - DEPLOY_SUCCESS：查询部署成功的部署单。
     * - DEPLOY_FAILED：查询部署失败的部署单。
     * > 如果不指定状态，则查询全部部署单。
     * @example `DEPLOY_SUCCESS`
     */
    "Status"?: string;
}
