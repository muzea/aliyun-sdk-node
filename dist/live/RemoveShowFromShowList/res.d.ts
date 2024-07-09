export interface RemoveShowFromShowListResponse {
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
    /**
     * 节目ID。
     * @example `a2b8e671-2fe5-4642-a2ec-bf93880e****`
     */
    ShowId: string;
    /**
     * 删除失败的节目ID列表以及失败信息。
     * @example `failedList[Show1, Show2...]`
     */
    failedList: string;
    /**
     * 成功删除的节目ID。
     * @example `f1933f16-5467-4308-b3a9-e8d451a90999`
     */
    successfulShowIds: string;
}
