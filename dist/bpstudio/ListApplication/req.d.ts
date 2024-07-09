export interface ListApplicationRequest {
    /**
     * 结果值的分页页码不能小于最小值 1，不能大于最大值 10000。
     * @example `1`
     */
    "NextToken": number;
    /**
     * 结果值的分页大小不能小于最小值 1，也不能大于最大值 50。
     * @example `10`
     */
    "MaxResults": number;
    /**
     * 应用名称中的关键字
     * @example `test`
     */
    "Keyword"?: string;
    /**
     * 1 更新时间<br>2 创建时间
     * @example `1`
     */
    "OrderType"?: number;
    /**
     * 应用的状态。
     * @example `该参数可选值有“success”和“release”。
    如果输入值是“success”，返回的应用列表包括所有部署成功（Deployed_Success）状态的应用；
    如果输入值是“release”，返回的应用列表包括所有释放成功（Destroyed_Success）和释放失败（Destroyed_Failure）状态的应用；
    如果置空该参数，返回的应用列表包括所有状态的应用。If the input value is "success", the returned application list includes all applications in the Deployed_Success state of successful deployment.
    If the input value is release, the returned application list includes all applications in the release success (Destroyed_Success) and release failure (Destroyed_Failure) status.
    If this parameter is left blank, the returned app list includes apps in all states.
    
    `
     */
    "Status"?: string;
    /**
     * 资源组的 ID。
     * @example `default`
     */
    "ResourceGroupId"?: string;
    /**
     * 资源ID
     * @example `vsw-xxxxxxxxxxxx`
     */
    "ResourceId"?: string;
    /**
     * 模板ID
     * @example `0KSXXX6SJU03TXXX`
     */
    "TemplateId"?: string;
}
