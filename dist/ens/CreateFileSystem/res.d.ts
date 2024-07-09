export interface CreateFileSystemResponse {
    /**
     * 请求ID。
     * @example `4EC47282-1B74-4534-BD0E-403F3EE64CAF`
     */
    RequestId: string;
    /**
     * 成功创建出来的文件系统。
     */
    AllocationId: string[];
    /**
     * 成功的状态码，共两种类型。取值：
     * - PartSuccess：部分成功。
     * - AllSuccess：全部成功。
     * @example `PartSuccess`
     */
    BizStatusCode: string;
    /**
     * 未成功的文件系统。
     */
    UnAllocationId: string[];
}
