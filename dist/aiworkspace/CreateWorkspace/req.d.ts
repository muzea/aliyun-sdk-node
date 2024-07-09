export interface CreateWorkspaceRequest {
    /**
     * 请求结构体。
     */
    "body"?: {
        /**
         * 工作空间名称。格式如下：
         * - 长度为3~23 个字符，可以包含字母、下划线或数字。
         * - 必须以大小写字母开头。
         * - 当前地域内唯一。
         * @example `workspace_example`
         */
        WorkspaceName: string;
        /**
         * 工作空间描述，不超过80个字符。
         * @example `这是一个工作空间描述示例。`
         */
        Description: string;
        /**
         * 建议基于业务属性命名，便于标识工作空间用途。如果不配置，默认为工作空间名称。
         * @example `demo工作空间`
         */
        DisplayName: string;
        /**
         * 工作空间包含的环境：
         * - 简单模式只有生产环境（prod）。
         * - 标准模式包含开发环境（dev）和生产环境（prod）。
         */
        EnvTypes: string[];
    };
}
