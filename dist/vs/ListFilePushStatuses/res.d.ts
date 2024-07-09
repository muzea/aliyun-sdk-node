export interface ListFilePushStatusesResponse {
    /**
     * 请求ID
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 文件推送信息列表
     */
    PushStatuses: {
        /**
         * 云应用服务实例ID
         * @example `render-9f8c57355d224ad7beaf95e145f22111
        `
         */
        RenderingInstanceId: string;
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
         * 文件推送状态，取值范围：
         * 1. Created
         * 2. Doing
         * 3. Success：终态
         * 4. Failed：终态
         * @example `Success`
         */
        Status: string;
        /**
         * 预推开始时间
         * @example `2024-03-26T16:32:20+08:00`
         */
        PushTime: string;
        /**
         * 状态最新更新时间
         * @example `2024-03-26T17:02:10+08:00`
         */
        UpdateTime: string;
        /**
         * 状态描述信息
         * @example `push success`
         */
        StatusDescription: string;
    }[];
    /**
     * 匹配的文件推送记录总数
     * @example `100`
     */
    TotalCount: number;
    /**
     * 查询列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时设置的每页行数
     * @example `10`
     */
    PageSize: number;
}
