export interface CreateResourceFileResponse {
    /**
     * 文件创建成功后的ID。
     * @example `1000001`
     */
    Data: number;
    /**
     * 本次调用的唯一ID。出现错误后，您可以根据该ID排查问题。
     * @example `0000-ABCD-EFG`
     */
    RequestId: string;
}
