export interface UpdateExperimentBasicInfoRequest {
    /**
     * 演练ID。
     * @example `1234567890123456789`
     */
    "ExperimentId": string;
    /**
     * 演练所属的命名空间（Namespace）。
     * @example `default`
     */
    "NameSpace": string;
    /**
     * 演练名称。
     * @example `CPU满载测试`
     */
    "Name"?: string;
    /**
     * 演练描述信息。
     * @example `CPU使用率提高至100%`
     */
    "Description"?: string;
    /**
     * 所属Region。当且仅当用户为公网地域（Region）时需要填写，默认为public。
     * @example `public`
     */
    "AhasRegionId"?: string;
    /**
     * 演练标签列表。
     */
    "Tags"?: string[];
    /**
     * 演练空间列表。
     */
    "Workspaces"?: string[];
}
