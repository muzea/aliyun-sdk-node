export interface UpdateServiceMirrorResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82***`
     */
    RequestId: string;
    /**
     * 返回结果信息。
     * @example `Traffic mirroring is updating for service [foo] in region [cn-shanghia], ratio [70%]`
     */
    Message: string;
}
