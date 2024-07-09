export interface InsertDeployGroupRequest {
    /**
     * 应用ID
     * @example `3616cdca-4f92-4413-***********`
     */
    "AppId": string;
    /**
     * 分组名称，支持的最大长度为64字符。
     * @example `test`
     */
    "GroupName": string;
    /**
     * 应用分组关联的初始化部署包版本ID。可以调用接口ListHistoryDeployVersion获取，具体操作，请参见[ListHistoryDeployVersion](~~149392~~)。
     * @example `441beb18-da42-44dc-****-****`
     */
    "InitPackageVersionId"?: string;
}
