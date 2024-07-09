export interface ListDirectoriesAndFilesResponse {
    /**
     * 当请求的返回结果被截断时，您可以使用NextToken再次发起请求，获取从当前截断位置之后的内容。
     * @example `TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `2D69A58F-345C-4FDE-88E4-BF518948****`
     */
    RequestId: string;
    /**
     * 目录或文件信息集合。
     */
    Entries: {
        /**
         * 返回结果的类型。
         * 包括：
         * - File：文件
         * - Directory：目录
         * @example `File`
         */
        Type: string;
        /**
         * 是否包含低频存储文件。
         * 仅当Type为Directory时，返回该值且有意义。
         * 包括：
         * - true：包含
         * - false：不包含
         * @example `true`
         */
        HasInfrequentAccessFile: boolean;
        /**
         * 元数据修改时间。
         * 执行ISO8601标准表示，返回格式：`yyyy-MM-ddTHH:mm:ssZ`。
         * 仅当Type为File时，返回该值且有意义。
         * @example `2021-02-11T10:08:10Z`
         */
        Ctime: string;
        /**
         * 文件修改时间。
         * 执行ISO8601标准表示，返回格式：`yyyy-MM-ddTHH:mm:ssZ`。
         * 仅当Type为File时，返回该值且有意义。
         * @example `2021-02-11T10:08:08Z`
         */
        Mtime: string;
        /**
         * 文件的大小。
         * 单位：Byte（字节）
         * 仅当Type为File时，返回该值且有意义。
         * @example `1024`
         */
        Size: number;
        /**
         * 返回文件的分级存储类型。
         * 仅当Type为File时，返回该值且有意义。
         * 包括：
         * - InfrequentAccess：低频存储。
         * - Archive：归档存储。
         * @example `InfrequentAccess`
         */
        StorageType: string;
        /**
         * 查询时间。
         * 执行ISO8601标准表示，返回格式：`yyyy-MM-ddTHH:mm:ssZ`。
         * 仅当Type为File时，返回该值且有意义。
         * @example `2021-02-01T10:08:08Z`
         */
        Atime: string;
        /**
         * 文件名或目录名。
         * @example `file.txt`
         */
        Name: string;
        /**
         * 距现在最近一次数据取回任务执行的时间。
         * 执行ISO8601标准表示，返回格式：`yyyy-MM-ddTHH:mm:ssZ`。
         * 仅当Type为File时，返回该值且有意义。
         * @example `2021-02-11T10:08:08Z`
         */
        RetrieveTime: string;
        /**
         * 文件或目录inode。
         * @example `66`
         */
        Inode: string;
        /**
         * 目录或文件的FileId。
         * @example `66`
         */
        FileId: string;
        /**
         * 便携账号ID。
         * 仅当ProtocolType=SMB且开启访问控制时，该返回值具有意义。
         * @example `37862c****`
         */
        Owner: string;
        /**
         * 是否包含归档存储文件。
         * 仅当Type为Directory时，返回该值且有意义。
         * 包括：
         * - true：包含
         * - false：不包含
         * @example `true`
         */
        HasArchiveFile: string;
    }[];
}
