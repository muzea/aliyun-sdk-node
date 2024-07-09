export interface ListWorkspacesResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `63DBD066-6374-0C1B-9E4D-9DDAEEA9CC73`
     */
    RequestId: string;
    /**
     * 出参数据实体。
     */
    Data: {
        /**
         * 当前页数。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 每页数据显示条数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总页数。
         * @example `4`
         */
        TotalPage: number;
        /**
         * 总数据量。
         * @example `31`
         */
        TotalCount: number;
        /**
         * 工作空间列表中数据集合。
         */
        Elements: {
            /**
             * 生产空间ID。
             * @example `78`
             */
            Id: number;
            /**
             * 创建时间。
             * @example `1634262449000`
             */
            GmtCreate: number;
            /**
             * 生产空间名称。
             * @example `wyqtest`
             */
            Name: string;
            /**
             * 生产空间描述。
             * @example `wyqtest描述`
             */
            Description: string;
            /**
             * 生产空间类型。取值如下：
             * - COMMON_CLASSIFY：通用分类
             * - COMMON_DETECT：通用检测
             * - COMMON\_INSTANCE_SEGMENT：通用实例分割
             * @example `COMMON_CLASSIFY`
             */
            Type: string;
            /**
             * 迁移至新版自学习空间的状态。TRANSFER_SUCCESS代表迁移成功，如果未迁移则不返回**TransferState**参数。
             * @example `TRANSFER_SUCCESS`
             */
            TransferState: string;
        }[];
    };
}
