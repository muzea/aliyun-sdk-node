export interface CancelDirQuotaRequest {
    /**
     * 文件系统ID。
     * @example `1ca404****`
     */
    "FileSystemId": string;
    /**
     * 目录在文件系统中的绝对路径。
     * @example `/data/sub1`
     */
    "Path": string;
    /**
     * 用户类型。
     * 取值：
     * - Uid：用户ID
     * - Gid：用户所属组ID
     * - AllUsers：所有用户
     * @example `Uid`
     */
    "UserType": string;
    /**
     * 要取消的Uid或Gid。
     * 当UserType=Uid或Gid时必填且有意义。
     * 例如：
     * - 要取消Uid=500的用户，则UserType填Uid，UserId填500。
     * - 要取消Gid=100的用户组，则UserType填Gid，UserId填100。
     * @example `500`
     */
    "UserId"?: string;
}
