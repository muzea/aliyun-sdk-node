export interface GetDataServiceFolderResponse {
    /**
     * 请求ID，一次请求的唯一标识。
     * @example `0000-ABCD-EF****`
     */
    RequestId: string;
    /**
     * 文件夹详情。
     */
    Folder: {
        /**
         * 父文件夹ID。业务流程下根文件夹ID等于0，用户创建文件夹ID大于0。
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
         * 工作空间的ID。
         * @example `10001`
         */
        ProjectId: number;
        /**
         * 文件夹的名称。
         * @example `test1`
         */
        FolderName: string;
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
    };
}
