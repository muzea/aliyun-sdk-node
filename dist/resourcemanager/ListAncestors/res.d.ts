export interface ListAncestorsResponse {
    /**
     * 请求ID。
     * @example `83AFBEB6-DC03-406E-9686-867461FF6698`
     */
    RequestId: string;
    Folders: {
        /**
         * 资源夹信息。
         */
        Folder: {
            /**
             * 资源夹ID。
             * @example `r-b1****`
             */
            FolderId: string;
            /**
             * 资源夹创建时间。
             * @example `2019-01-18T10:03:35.217Z`
             */
            CreateTime: string;
            /**
             * 资源夹名称。
             * @example `root`
             */
            FolderName: string;
        }[];
    };
}
