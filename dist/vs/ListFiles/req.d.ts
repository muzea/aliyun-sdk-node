export interface ListFilesRequest {
    /**
     * 文件ID，对应唯一的可用文件
     * @example `f-1671accd4dafdag3er256cvgewt13f7141db2f7`
     */
    "FileId"?: string;
    /**
     * 文件名
     * @example `myfile`
     */
    "FileName"?: string;
    /**
     * 查询列表的页码。起始值为1。
     * 默认值：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，取值范围1～100。
     * 默认值：10
     * @example `10`
     */
    "PageSize"?: number;
}
