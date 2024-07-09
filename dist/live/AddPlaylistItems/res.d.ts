export interface AddPlaylistItemsResponse {
    /**
     * 添加节目单项信息列表。
     */
    Items: {
        /**
         * 添加失败的节目单项列表。
         */
        FailedItems: {
            /**
             * 节目单项ID。
             * @example `c09f3d63-eacf-4fbf-bd48-a07a6ba7****`
             */
            ItemId: string;
            /**
             * 节目单项名称。
             * @example `item1`
             */
            ItemName: string;
        }[];
        /**
         * 添加成功的节目单项列表。
         */
        SuccessItems: {
            /**
             * 节目单项ID。
             * @example `c09f3d63-eacf-4fbf-bd48-a07a6ba7****`
             */
            ItemId: string;
            /**
             * 节目单项名称。
             * @example `item2`
             */
            ItemName: string;
        }[];
    };
    /**
     * 节目单ID。可作为删除节目单项，查询节目单项，编辑节目单，删除节目单，查询节目单，启动节目单，停止节目单的请求参数。
     * @example `445409ec-7eaa-461d-8f29-4bec2eb9****`
     */
    ProgramId: string;
    /**
     * 请求ID。
     * @example `5c6a2a0d-f228-4a64-af62-20e91b96****`
     */
    RequestId: string;
}
