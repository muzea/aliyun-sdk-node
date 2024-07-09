export interface ListDataServiceFoldersResponse {
    /**
     * 请求ID，一次请求的唯一标识。
     * @example `0000-ABCD-EF****`
     */
    RequestId: string;
    /**
     * 文件夹列表的分页结果。
     */
    FolderPagingResult: {
        /**
         * 页码，和请求中的PageNumber一致。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页显示的条数，默认为10条，最大100条。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总记录数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 文件夹列表。
         */
        Folders: {
            /**
             * 父文件夹的ID。业务流程下根文件夹ID等于0，用户创建文件夹ID大于0。
             * @example `0`
             */
            ParentId: number;
            /**
             * 文件夹的编辑时间。
             * @example `2020-09-24T18:37:51+0800`
             */
            ModifiedTime: string;
            /**
             * 文件夹所属业务流程的ID。
             * @example `ds_1234`
             */
            GroupId: string;
            /**
             * 文件夹的ID。
             * @example `11`
             */
            FolderId: number;
            /**
             * 文件夹的名称。
             * @example `test1`
             */
            FolderName: string;
            /**
             * 工作空间ID。
             * @example `10001`
             */
            ProjectId: number;
            /**
             * 文件夹的创建时间。
             * @example `2020-09-24T18:37:51+0800`
             */
            CreatedTime: string;
            /**
             * 租户ID。
             * @example `10002`
             */
            TenantId: number;
        }[];
    };
}
