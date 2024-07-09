export interface ListRecycledDirectoriesAndFilesResponse {
    /**
     * 请求ID。
     * @example `98696EF0-1607-4E9D-B01D-F20930B6****`
     */
    RequestId: string;
    /**
     * 下一页标识。
     * 如果一次查询结果并没有完整返回所有的文件和目录，则返回NextToken不为空。您可以在查询中上传正确的NextToken继续查询。
     * @example `无`
     */
    NextToken: string;
    /**
     * 回收站中文件或目录的信息集合。
     */
    Entries: {
        /**
         * 文件或目录的FileId。
         * @example `04***08`
         */
        FileId: string;
        /**
         * 返回对象类型。包括：
         * - File：文件
         * - Directory：目录
         * @example `File`
         */
        Type: string;
        /**
         * 文件或目录删除前的名称。
         * @example `test001`
         */
        Name: string;
        /**
         * 文件或目录被删除的时间。
         * @example `2021-05-30T10:08:08Z`
         */
        DeleteTime: string;
        /**
         * 文件或目录的inode。
         * @example `04***08`
         */
        Inode: string;
        /**
         * 最近访问时间。
         * @example `2019-10-30T10:08:08Z`
         */
        ATime: string;
        /**
         * 最近修改时间。
         * @example `2019-10-30T10:08:08Z`
         */
        MTime: string;
        /**
         * 元数据最近修改时间。
         * @example `2019-10-30T10:08:08Z`
         */
        CTime: string;
        /**
         * 文件大小。单位：Byte。
         * 当Type=Directory时，返回为0。
         * @example `1073741824`
         */
        Size: number;
    }[];
}
