export interface UpdateFolderResponse {
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
         * @example `fd-u8B321****`
         */
        FolderId: string;
        /**
         * 资源夹创建时间。
         * @example `2019-02-19T09:34:50.757Z`
         */
        CreateTime: string;
        /**
         * 父资源夹ID。
         * @example `r-b1****`
         */
        ParentFolderId: string;
        /**
         * 资源夹名称。
         * @example `rdFolder`
         */
        FolderName: string;
    };
}
