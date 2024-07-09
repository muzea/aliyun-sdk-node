export interface DeleteServiceMirrorRequest {
    /**
     * 服务所在区域。
     * @example `cn-shanghai`
     */
    "ClusterId": string;
    /**
     * 服务名称。如何获取服务名称，请参见[ListServices](~~412109~~)。
     * @example `foo`
     */
    "ServiceName": string;
}
