export interface ListScanMaliciousFileByTaskResponse {
    /**
     * 请求ID
     * @example `52AE49C8-B91A-5C1A-821F-C34324B42F7C`
     */
    RequestId: string;
    /**
     * 返回码
     * @example `success`
     */
    Code: number;
    /**
     * 查询数据的当前页码。传入此参数，可指定查询数据从第几页开始返回。默认值为1。
     * @example `1`
     */
    PageNo: number;
    /**
     * 是否调用 API 成功，取值：
     * - `true`：调用API成功
     * - `false`：调用API失败
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 分页大小
     * @example `30`
     */
    PageSize: number;
    /**
     * 总数量
     * @example `13`
     */
    TotalCount: number;
    /**
     * 恶意文件列表
     */
    ScanMaliciousFiles: {
        /**
         * 镜像扫描任务 ID
         * @example `fe2d8980-de45-4f55-b57d-e438e6d2e972`
         */
        ScanTaskId: string;
        /**
         * 恶意样本类型
         * @example `疑似含有Webshell代码`
         */
        MaliciousName: string;
        /**
         * 恶意文件md5值
         * @example `e76c9759783cbbc9be0ff91ca3xxxxxx`
         */
        MaliciousMd5: string;
        /**
         * 首次扫描时间
         * @example `2023-04-10 11:42:06
        `
         */
        FirstScanTime: number;
        /**
         * 等级
         * @example `remind`
         */
        Level: string;
        /**
         * 文件路径
         * @example `tenant/0000000000000000/`
         */
        FilePath: string;
        /**
         * 创建时间
         * @example `2023-04-10 11:42:06`
         */
        CreateTime: number;
        /**
         * 更新时间
         * @example `2023-04-10 11:42:06
        `
         */
        UpdateTime: number;
    }[];
}
