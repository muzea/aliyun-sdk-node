export interface ListModelFeaturesRequest {
    /**
     * 实例ID，可从接口ListInstances获取。
     * @example `fs-cn-********`
     */
    "InstanceId": string;
    /**
     * 项目ID，可从接口ListProjects获取。
     * @example `4`
     */
    "ProjectId": string;
    /**
     * 页大小，默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 页码，起始值为1，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 排序依据。
     * ● GmtCreateTime-创建时间。
     * ● GmtModifiedTime-更新时间。
     * @example `DESC`
     */
    "SortBy"?: string;
    /**
     * 排序方式。
     * ● ASC-升序。
     * ● DESC-降序。
     * @example `ASC`
     */
    "Order"?: string;
    /**
     * 模型特征名称过滤。
     * @example `model_feature1`
     */
    "Name"?: string;
    /**
     * 创建人的阿里云账号ID。
     * @example `12323143****`
     */
    "Owner"?: string;
    /**
     * 模型特征ID过滤。
     */
    "ModelFeatureIds"?: string[];
}
