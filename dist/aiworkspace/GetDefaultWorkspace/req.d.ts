export interface GetDefaultWorkspaceRequest {
    /**
     * 是否显示默认工作空间的详细信息，目前详细信息包含阶段列表详情（Conditions）。取值如下。
     * - false（默认值）：不显示详细信息。
     * - true：显示详细信息。
     * @example `false`
     */
    "Verbose"?: boolean;
}
