export interface ListImagesResponse {
    /**
     * 请求ID。
     * @example `2B93C43A-F824-40C8-AF79-844342B0F43A`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 返回的图片数据列表。
         */
        ImageList: {
            /**
             * 实体ID或分组ID。
             * @example `5`
             */
            EntityId: string;
            /**
             * 创建数据的时间。
             * @example `1582838489213`
             */
            CreatedAt: number;
            /**
             * 更新数据的时间。
             * @example `1582838489213`
             */
            UpdatedAt: number;
            /**
             * 数据ID。
             * @example `001`
             */
            DataId: string;
            /**
             * 自定义数据内容。
             * @example `元素`
             */
            ExtraData: string;
        }[];
        /**
         * Offset和Limit组合的分页方式只支持前2000条记录。
         * 当超过2000时，需要使用上一次请求返回的Token作为请求下一页的参数。
         * @example `2`
         */
        Token: string;
        /**
         * 总数量。
         * @example `100`
         */
        TotalCount: number;
    };
}
