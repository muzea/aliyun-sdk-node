export interface GetFolderResponse {
    /**
     * 请求ID。
     * @example `C2CBCA30-C8DD-423E-B4AD-4FB694C9180C`
     */
    RequestId: string;
    /**
     * 资源夹信息。
     */
    Folder: {
        /**
         * 资源夹ID。
         * @example `fd-Jyl5U7****`
         */
        FolderId: string;
        /**
         * 资源夹创建时间。
         * @example `2021-06-15T06:39:08.521Z`
         */
        CreateTime: string;
        /**
         * 父资源夹ID。
         * @example `r-Wm****`
         */
        ParentFolderId: string;
        /**
         * 资源夹名称。
         * @example `Applications`
         */
        FolderName: string;
        /**
         * 资源夹在资源目录中的路径ID（RDPath）。
         * @example `rd-3G****​/r-Wm****​/fd-Jyl5U7****`
         */
        ResourceDirectoryPath: string;
    };
}
