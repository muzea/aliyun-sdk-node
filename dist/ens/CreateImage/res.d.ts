export interface CreateImageResponse {
    /**
     * 请求ID。
     * @example `8BEF0D72-9901-5D43-B7D3-8B42AC26C516`
     */
    RequestId: string;
    /**
     * 业务返回码，成功返回0。
     * @example `0`
     */
    Code: number;
    /**
     * 镜像ID。
     * @example `m-5xxgg`
     */
    ImageId: string;
}
