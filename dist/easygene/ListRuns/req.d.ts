export interface ListRunsRequest {
    /**
     * 工作空间
     * @example `test-workspace`
     */
    "Workspace"?: string;
    /**
     * 状态
     * @example `Running`
     */
    "Status"?: string;
    /**
     * 提交ID
     * @example `sub-13BeXWnGvrOl3MC124tazcJVKaV`
     */
    "SubmissionId"?: string;
    /**
     * 搜索ID
     * @example `run-13BeYuxc0fxO24uA75UppTiMRoQ`
     */
    "Search"?: string;
    /**
     * 标签选择
     * @example `env=test`
     */
    "LabelSelector"?: string;
    /**
     * 应用名称
     * @example `MyApp`
     */
    "AppName"?: string;
    /**
     * 应用的版本
     * @example `4.1.4.1-v1.0`
     */
    "AppRevision"?: string;
    /**
     * 实体类型
     * @example `sample`
     */
    "EntityType"?: string;
    /**
     * 实体元素名称
     * @example `S001`
     */
    "EntityName"?: string;
    /**
     * 查询起始位置
     * @example `MTIzNDU2P1dvcmtzcGFjZT93cy1mMDE4OTgxNGU1ZTkK`
     */
    "NextToken"?: string;
    /**
     * 最大返回个数
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 排序依据
     * @example `createtime`
     */
    "OrderBy"?: string;
    /**
     * 是否逆序
     * @example `false`
     */
    "IsReversed"?: boolean;
    /**
     * 是否返回所有任务条数
     * @example `false`
     */
    "GetTotal"?: boolean;
}
