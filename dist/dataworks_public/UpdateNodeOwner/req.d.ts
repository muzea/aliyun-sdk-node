export interface UpdateNodeOwnerRequest {
    /**
     * 运行的环境，包括开发环境（DEV）和生产环境（PRD）。
     * @example `PROD`
     */
    "ProjectEnv": string;
    /**
     * 节点的ID，您可以调用[ListNodes](~~173979~~)接口获取节点ID。
     * @example `1234`
     */
    "NodeId": number;
    /**
     * 节点负责人的阿里云账号ID。您可以登录DataWorks控制台，鼠标悬停至顶部菜单栏右侧的用户头像，查看账号ID。
     * @example `19337906836551`
     */
    "UserId": string;
}
