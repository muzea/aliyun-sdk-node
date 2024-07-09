export interface DeleteClusterMemberResponse {
    /**
     * Code码
     * @example `200`
     */
    Code: number;
    /**
     * 信息
     * @example `success`
     */
    Message: string;
    /**
     * 是否成功
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求唯一ID
     * @example `b197-40ab-9155-7ca7`
     */
    RequestId: string;
}
