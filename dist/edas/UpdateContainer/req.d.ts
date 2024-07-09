export interface UpdateContainerRequest {
    /**
     * 应用ID。
     * @example `e83acea6-****-47e1-96ae-c0e953772cdc`
     */
    "AppId": string;
    /**
     * EDAS-Container的构建包ID。可以在容器版本说明文档的表格中获取对应版本的构建包ID，更多信息，请参见[容器版本说明](~~92614~~)。
     * @example `59`
     */
    "BuildPackId": number;
}
