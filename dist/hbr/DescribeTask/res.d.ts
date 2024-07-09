export interface DescribeTaskResponse {
    /**
     * 任务进度。取值范围为0~100，单位为百分比（%）。任务失败时直接返回-1。
     * @example `100`
     */
    Progress: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 任务完成时间。UNIX时间戳，单位秒。
     * @example `1615607706`
     */
    CompletedTime: number;
    /**
     * 任务结果。
     * @example `{}`
     */
    Result: string;
    /**
     * 任务状态。取值范围：
     * * **created**：任务已创建。
     * * **expired**：任务已过期。
     * * **completed**：任务已完成。
     * * **cancelled**：任务已取消。
     * @example `completed`
     */
    Description: string;
    /**
     * 任务更新时间。UNIX时间，单位秒。
     * @example `1615607706`
     */
    UpdatedTime: number;
    /**
     * 请求是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回码，200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息描述，成功一般返回successful，错误时会返回相应错误信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 任务名称。
     * @example `InstallBackupClientsTask`
     */
    Name: string;
    /**
     * 任务创建时间。UNIX时间，单位秒。
     * @example `1615607706`
     */
    CreatedTime: number;
}
