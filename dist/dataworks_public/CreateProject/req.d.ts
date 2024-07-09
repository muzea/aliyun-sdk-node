export interface CreateProjectRequest {
    /**
     * 幂等参数，该参数可为空。
     * @example `ABFUOEUOTRTRJKE`
     */
    "ClientToken"?: string;
    /**
     * 工作空间的显示名称。
     * @example `test_project`
     */
    "ProjectName": string;
    /**
     * 工作空间的详细描述信息。
     * @example `test_describe`
     */
    "ProjectDescription": string;
    /**
     * 是否禁用开发角色，取值如下：
     * - **false**：默认值，开启开发角色。
     * - **true**：禁用开发角色。
     * @example `false`
     */
    "DisableDevelopment"?: boolean;
    /**
     * 是否允许下载ide上查询的结果，取值如下：
     * - **1**：默认值，允许下载。
     * - **0**：不允许下载。
     * @example `1`
     */
    "IsAllowDownload"?: number;
    /**
     * 工作空间的模式，模式区别详情参见[必读：简单模式和标准模式的区别](~~85772~~)。
     * 取值如下：
     * - **2**：默认值，表示简单工作空间模式。
     * - **3**：表示标准工作空间模式。
     * @example `3`
     */
    "ProjectMode"?: number;
    /**
     * 工作空间的名称，只能包含大小写字母、数字和下划线，且首字母必须是字母或数字。
     * @example `test_project`
     */
    "ProjectIdentifier": string;
    /**
     * 资源组ID。
     * @example `rg-acfmzbn7pti3****`
     */
    "ResourceManagerResourceGroupId"?: string;
    /**
     * 工作空间绑定的标签列表。
     */
    "Tags"?: {
        /**
         * 标签键。
         * @example `key`
         */
        Key: string;
        /**
         * 标签值。
         * @example `value`
         */
        Value: string;
    }[];
}
