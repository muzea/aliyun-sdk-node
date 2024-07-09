export interface GetDirectoryOrFilePropertiesResponse {
    /**
     * 目录或文件信息集合。
     */
    Entry: {
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
         * 仅当Type为Directory时，返回该参数。
         * 包括：
         * - true：包含
         * - false：不包含
         * @example `true`
         */
        HasInfrequentAccessFile: boolean;
        /**
         * 文件修改时间。
         * 执行ISO8601标准表示，返回格式：yyyy-MM-ddTHH:mm:ssZ。
         * 仅当Type为File时，返回该参数。
         * @example `2021-02-11T10:08:08Z`
         */
        MTime: string;
        /**
         * 查询时间。
         * 执行ISO8601标准表示，返回格式：yyyy-MM-ddTHH:mm:ssZ。
         * 仅当Type为File时，返回该参数。
         * @example `2021-02-01T10:08:08Z`
         */
        ATime: string;
        /**
         * 文件的大小。
         * 单位：字节
         * 仅当Type为File时，返回该参数。
         * @example `1024`
         */
        Size: number;
        /**
         * 原数据修改时间。
         * 执行ISO8601标准表示，返回格式：yyyy-MM-ddTHH:mm:ssZ。
         * 仅当Type为File时，返回该值参数。
         * @example `2021-02-11T10:08:10Z`
         */
        CTime: string;
        /**
         * 返回文件的数据存储类型。
         * 仅当Type为File时，返回该参数。
         * 包括：
         * - Standard：通用型NAS存储。
         * - InfrequentAccess：低频介质存储。
         * @example `InfrequentAccess`
         */
        StorageType: string;
        /**
         * 文件名或目录名。
         * @example `file.txt`
         */
        Name: string;
        /**
         * 距现在最近一次数据取回任务执行的时间。
         * 执行ISO8601标准表示，返回格式：yyyy-MM-ddTHH:mm:ssZ。
         * 仅当Type为File时，返回该参数。
         * @example `2021-02-11T10:08:08Z`
         */
        RetrieveTime: string;
        /**
         * 文件或目录inode。
         * @example `40`
         */
        Inode: string;
        /**
         * 是否包含归档存储文件。
         * 仅当Type为Directory时，返回该参数。
         * 包括：
         * - true：包含
         * - false：不包含
         * @example `false`
         */
        HasArchiveFile: boolean;
    };
    /**
     * 请求ID。
     * @example `2D69A58F-345C-4FDE-88E4-BF518948****`
     */
    RequestId: string;
}
