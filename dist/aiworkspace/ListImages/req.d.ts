export interface ListImagesRequest {
    /**
     * 镜像名称，支持模糊搜索。
     * @example `tensorflow_2.9`
     */
    "Name"?: string;
    /**
     * 镜像列表的页码。起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。默认为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 分页查询时的排序字段。目前GmtCreateTime字段用于排序。
     * @example `GmtCreateTime`
     */
    "SortBy"?: string;
    /**
     * 分页查询时，对指定的排序字段进行升序或降序，与SortBy结合使用。默认ASC。
     * - ASC：升序。
     * - DESC：降序。
     * @example `DESC`
     */
    "Order"?: string;
    /**
     * 标签过滤条件，多个条件以半角逗号（,）分隔。
     * 单个条件过滤格式为`Key=Value`。
     * Key支持如下值：
     * - system.chipType
     * - system.dsw.cudaVersion
     * - system.dsw.fromImageId
     * - system.dsw.fromInstanceId
     * - system.dsw.id
     * - system.dsw.os
     * - system.dsw.osVersion
     * - system.dsw.resourceType
     * - system.dsw.rootImageId
     * - system.dsw.stage
     * - system.dsw.tag
     * - system.dsw.type
     * - system.framework
     * - system.origin
     * - system.pythonVersion
     * - system.source
     * - system.supported.dlc
     * - system.supported.dsw
     * @example `system.framework=XGBoost 1.6.0,system.official=true
    `
     */
    "Labels"?: string;
    /**
     * 是否显示非必要信息，非必要信息目前包含Labels。取值如下：
     * - true：包含非必要信息。
     * - false：不包含非必要信息。
     * @example `true`
     */
    "Verbose"?: boolean;
    /**
     * 工作空间ID。如何获取工作空间ID，请参见[ListWorkspaces](~~449124~~)。
     * @example `20******55`
     */
    "WorkspaceId"?: string;
    /**
     * 创建者的阿里云账号UID。
     * @example `155**********904`
     */
    "UserId"?: string;
    /**
     * 创建者的阿里云账号UID。
     * @example `155**********904`
     */
    "ParentUserId"?: string;
    /**
     * 模糊搜索镜像名称以及描述。
     * @example `name`
     */
    "Query"?: string;
    /**
     * 镜像的可见性，目前只对自定义镜像生效。
     * - PUBLIC表示公开。
     * - PRIVATE表示私有。
     * @example `PUBLIC`
     */
    "Accessibility"?: string;
}
