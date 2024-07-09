export interface ListFaceEntitiesResponse {
    /**
     * 请求ID。
     * @example `DA7CAFEB-0A37-4496-9CDF-E3DBB6309CB2`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 当查询结果超过2000条时，可以使用Token来查询下一页的数据。
         * @example `2`
         */
        Token: string;
        /**
         * 人脸样本的总数量。
         * @example `200`
         */
        TotalCount: number;
        /**
         * 查询到的实体数据。
         */
        Entities: {
            /**
             * 人脸样本所在的数据库名称。
             * @example `default`
             */
            DbName: string;
            /**
             * 实体ID，如员工编号。
             * @example `222`
             */
            EntityId: string;
            /**
             * 查询到的人脸数据标签。
             * @example `鹿班`
             */
            Labels: string;
            /**
             * 人脸样本的创建时间。
             * @example `1589203871832`
             */
            CreatedAt: number;
            /**
             * 人脸样本包含的人脸数量。
             * @example `3`
             */
            FaceCount: number;
            /**
             * 人脸样本的更新时间。
             * @example `1589203871832`
             */
            UpdatedAt: number;
        }[];
    };
}
