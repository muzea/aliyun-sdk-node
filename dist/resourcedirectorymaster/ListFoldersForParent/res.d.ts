export interface ListFoldersForParentResponse {
    /**
     * 数据总条数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `7B8A4E7D-6CFF-471D-84DF-195A7A241ECB`
     */
    RequestId: string;
    /**
     * 分页时每页显示的数据行数。
     * @example `5`
     */
    PageSize: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    Folders: {
        /**
         * 资源夹列表。
         */
        Folder: {
            /**
             * 资源夹ID。
             * @example `rd-evic31****`
             */
            FolderId: string;
            /**
             * 资源夹创建时间。
             * @example `2015-01-23T12:33:18Z`
             */
            CreateTime: string;
            /**
             * 资源夹名称。
             * @example `project-1`
             */
            FolderName: string;
        }[];
    };
}
