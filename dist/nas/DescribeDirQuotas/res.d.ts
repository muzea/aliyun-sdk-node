export interface DescribeDirQuotasResponse {
    /**
     * 目录总个数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 每个目录的配额信息集合。
     */
    DirQuotaInfos: {
        /**
         * 目录的统计状态。
         * 初始化时为Initializing；正常时为Normal。
         * @example `Normal`
         */
        Status: string;
        /**
         * 目录在文件系统中的绝对路径。
         * @example `/data/sub1`
         */
        Path: string;
        /**
         * 目录的inode号。
         * @example `1123`
         */
        DirInode: string;
        /**
         * 每个用户的配额信息集合。
         */
        UserQuotaInfos: {
            /**
             * 目录下用户的实际文件数目。
             * @example `5100`
             */
            FileCountReal: number;
            /**
             * 指定UserId的类型，包括Uid、Gid、AllUsers三种。
             * - 当返回为Uid或Gid时，UserId会存在返回值。
             * - 当返回为AllUsers时，UserId返回为空。
             * @example `Uid`
             */
            UserType: string;
            /**
             * 目录下用户的文件数目限制。
             * @example `10000`
             */
            FileCountLimit: number;
            /**
             * 要限制的Uid或Gid，取决于UserType的值。
             * @example `500`
             */
            UserId: string;
            /**
             * 目录下用户的文件总容量限制，单位为GiB。
             * @example `1024`
             */
            SizeLimit: number;
            /**
             * 配额类型，包括统计型（Accounting）和限制型（Enforcement）。
             * @example `Accounting`
             */
            QuotaType: string;
            /**
             * 目录下用户的实际文件总容量，单位为GiB。
             * @example `800`
             */
            SizeReal: number;
            /**
             * 目录下用户的实际文件总容量，单位为 Byte。
             * @example `858995833870`
             */
            SizeRealInByte: number;
        }[];
    }[];
    /**
     * 请求ID。
     * @example `5BC5CB97-9F28-42FE-84A4-0CD0DF42****`
     */
    RequestId: string;
    /**
     * 每个分页包含的目录个数。
     * @example `1`
     */
    PageSize: number;
    /**
     * 分页页码。
     * @example `1`
     */
    PageNumber: number;
}
