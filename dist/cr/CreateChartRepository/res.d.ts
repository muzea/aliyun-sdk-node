export interface CreateChartRepositoryResponse {
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 镜像仓库ID
     * @example `crcr-2micxey5ewj4****`
     */
    RepoId: string;
    /**
     * 是否调用API成功，取值：
     * - `true`：调用API成功
     * - `false`：调用API失败
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 请求ID
     * @example `60390244-A483-491A-B41D-F866C95380A1`
     */
    RequestId: string;
}
