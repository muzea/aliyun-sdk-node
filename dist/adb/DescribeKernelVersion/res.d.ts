export interface DescribeKernelVersionResponse {
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    /**
     * 集群内核版本号，例如：**3.1.8**。
     * @example `3.1.8`
     */
    KernelVersion: string;
    /**
     * 版本维护到期时间，时间格式为yyyy-MM-DD HH:mm:ss。超过此时间后，系统将不再维护该版本，若有问题，请升级到更高版本。
     * @example `2023-06-01T10:36:30Z`
     */
    ExpireDate: string;
    /**
     * 当前版本支持升级到的目标版本列表。
     */
    AvailableKernelVersions: {
        /**
         * 集群内核版本号，例如：**3.1.9**。
         * @example `3.1.9`
         */
        KernelVersion: string;
        /**
         * 内核版本的发布时间。时间格式为yyyy-MM-DD HH:mm:ss。
         * @example `2023-06-01T10:36:30Z
        `
         */
        ReleaseDate: string;
        /**
         * 版本维护到期时间，时间格式为yyyy-MM-DD HH:mm:ss。超过此时间后，系统将不再维护该版本，若有问题，请升级到更高版本。
         * @example `2024-06-01T10:36:30Z`
         */
        ExpireDate: string;
    }[];
}
