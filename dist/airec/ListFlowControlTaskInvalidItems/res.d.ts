export interface ListFlowControlTaskInvalidItemsResponse {
    /**
     * 请求ID。
     * @example `8F81A922-6C81-46D6-B78C-CC35E16B1691`
     */
    requestId: string;
    /**
     * 返回参数。
     */
    result: {
        /**
         * 失效物品ItemId与ItemType清单。
         */
        invalidItems: {
            /**
             * 物品ID。
             * @example `287723`
             */
            itemId: string;
            /**
             * 物品Type。
             * @example `video`
             */
            itemType: string;
        }[];
    }[];
}
