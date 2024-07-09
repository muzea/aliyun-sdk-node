export interface DeleteLabelTableRequest {
    /**
     * 实例ID，可从接口ListInstances获取。
     * @example `fs-cn-********`
     */
    "InstanceId": string;
    /**
     * Label表ID，可从接口ListLabelTables获取。
     * @example `3`
     */
    "LabelTableId": string;
}
