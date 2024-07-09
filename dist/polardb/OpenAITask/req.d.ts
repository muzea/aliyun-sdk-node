export interface OpenAITaskRequest {
    /**
     * 资源组ID。
     * @example `rg-************`
     */
    "ResourceGroupId"?: string;
    /**
     * 集群ID。
     * @example `pc-****************`
     */
    "DBClusterId": string;
    /**
     * 需要开启PolarDB for AI功能的数据库账号。
     * @example `testAccountName`
     */
    "Username"?: string;
    /**
     * 需要开启PolarDB for AI功能的数据库账号的密码。
     * @example `testPassword`
     */
    "Password"?: string;
    /**
     * 节点类型。取值说明：
     * - **DLNode**：ai节点。
     * - **SearchNode**：搜索ai节点。
     * @example `DLNode`
     */
    "NodeType"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
