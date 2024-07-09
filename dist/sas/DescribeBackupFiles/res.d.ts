export interface DescribeBackupFilesResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `00A60A6D-33E0-5D5A-9B7C-E5D4DCA88148`
     */
    RequestId: string;
    /**
     * 页面显示的信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页显示的备份文件的数量。默认值为**10**，表示每页显示10条备份文件。
         * @example `10`
         */
        PageSize: number;
        /**
         * 备份文件的总数量。
         * @example `69`
         */
        TotalCount: number;
        /**
         * 当前页面显示的备份文件的数量。
         * @example `10`
         */
        Count: number;
    };
    /**
     * 防勒索备份数据的信息。
     */
    BackupFiles: {
        /**
         * 防护文件的类型。取值：
         * - **file**：表示文件。
         * - **dir**：表示文件夹。
         * @example `dir`
         */
        Type: string;
        /**
         * 策略名称。
         * @example `Group 1`
         */
        Name: string;
        /**
         * 备份文件子目录的路径。
         * @example `Python27\`
         */
        Subtree: string;
        /**
         * 备份文件的大小，单位为Byte。
         * @example `100`
         */
        Size: number;
    }[];
}
