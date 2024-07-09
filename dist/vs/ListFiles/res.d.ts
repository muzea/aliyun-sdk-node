export interface ListFilesResponse {
    /**
     * 请求ID
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 文件信息列表
     */
    Files: {
        /**
         * 文件ID
         * @example `f-1671accd4dafdag3er256cvgewt13f7141db2f7`
         */
        FileId: string;
        /**
         * 文件名
         * @example `myfile`
         */
        FileName: string;
        /**
         * 向云应用服务实例推送的目标路径
         * @example `/data/tmp/test/xxx.tar`
         */
        TargetPath: string;
        /**
         * 文件描述信息
         * @example `我的文件`
         */
        Description: string;
        /**
         * 文件上传状态，取值范围：
         * 1. Created
         * 2. Doing
         * 3. Success：终态
         * 4. Failed：终态
         * @example `Success`
         */
        Status: string;
        /**
         * 上传开始时间
         * @example `2024-03-28T14:10:12+08:00`
         */
        UploadTime: string;
        /**
         * 状态最新更新时间
         * @example `2024-03-28T14:15:08+08:00`
         */
        UpdateTime: string;
        /**
         * 状态描述信息
         * @example `upload success`
         */
        StatusDescription: string;
    }[];
    /**
     * 匹配的文件记录总数
     * @example `200`
     */
    TotalCount: number;
    /**
     * 查询列表的页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时设置的每页行数
     * @example `10`
     */
    PageSize: number;
}
