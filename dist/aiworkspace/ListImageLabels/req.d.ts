export interface ListImageLabelsRequest {
    /**
     * 标签键的列表，以半角逗号（,）分隔。
     * 系统标签以system开头，与LabelFilter分别独立生效。
     * @example `system.framework,system.official`
     */
    "LabelKeys"?: string;
    /**
     * 标签过滤条件，多个条件以逗号分隔。
     * 单个条件过滤格式为`key=value`。
     * 与LabelKeys分别独立生效。
     * @example `system.framework=XGBoost 1.6.0,system.official=true`
     */
    "LabelFilter"?: string;
    /**
     * 镜像ID。如何获取镜像ID，请参见[ListImages](~~449118~~)  。
     * @example `image-4c62******53uor
    `
     */
    "ImageId"?: string;
    /**
     * 工作空间ID。如何获取工作空间ID，请参见[ListWorkspaces](~~449124~~)。
     * @example `12345`
     */
    "WorkspaceId"?: string;
    /**
     * 镜像所属地域。
     * @example `cn-shanghai`
     */
    "Region"?: string;
}
