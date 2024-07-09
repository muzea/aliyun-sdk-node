export interface AddShowIntoShowListResponse {
    /**
     * 请求ID。
     * @example `987DA143-A39C-5B5D-AF5B-3B07944A0036`
     */
    RequestId: string;
    /**
     * 节目ID。
     * @example `a2b8e671-2fe5-4642-a2ec-bf93880e****`
     */
    ShowId: string;
    /**
     * 添加失败的资源列表以及失败原因信息。
     * @example `failedList[Show1, Show2...]`
     */
    failedList: string;
    /**
     * 添加成功添加的节目ID列表。
     * @example `f1933f16-5467-4308-b3a9-e8d451a90999，547436b8-c839-4469-a2c0-704c1ce5ce00`
     */
    successfulShowIds: string;
}
