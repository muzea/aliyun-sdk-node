export interface SetDirQuotaRequest {
    /**
     * 文件系统ID。
     * @example `1ca404****`
     */
    "FileSystemId": string;
    /**
     * 目录在文件系统中的绝对路径。
     *  > - 仅支持为NAS文件系统中已创建的目录设置配额。配额的目录路径就是目录在NAS文件系统的绝对路径，而不是计算节点（例如，ECS，容器）上的本地路径。
     *  > -  不支持路径名中包含中文字符的目录。
     * @example `/data/sub1`
     */
    "Path": string;
    /**
     * 配额类型。
     * 取值：
     * - Accounting：统计型配额，只统计使用量。
     * - Enforcement：限制型配额，当使用量超过限制后，会导致创建文件或目录、追加写入等操作失败。
     * @example `Accounting`
     */
    "QuotaType": string;
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
     * 要限制的Uid或Gid。
     * 当UserType=Uid或Gid时必填且有意义。
     * 例如：
     * - 要限制Uid=500的用户，则UserType填Uid，UserId填500。
     * - 要限制Gid=100的用户组，则UserType填Gid，UserId填100。
     * @example `500`
     */
    "UserId"?: string;
    /**
     * 限制目录下文件总容量。
     * 单位：GiB
     * 当QuotaType=Enforcement时，SizeLimit和FileCountLimit至少填写其中一项。
     * @example `1024`
     */
    "SizeLimit"?: number;
    /**
     * 限制目录下文件数目。
     * 包括文件、目录和特殊文件。
     * 当QuotaType=Enforcement时，SizeLimit和FileCountLimit至少填写其中一项。
     * @example `10000`
     */
    "FileCountLimit"?: number;
}
