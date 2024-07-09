export interface DeleteServiceMirrorResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82***`
     */
    RequestId: string;
    /**
     * 请求返回信息。
     * @example `Traffic mirroring is OFF for service [foo] in region [cn-shanghia], ratio [70%]`
     */
    Message: string;
}
