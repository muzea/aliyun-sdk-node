export interface DescribeServiceMirrorRequest {
    /**
     * 服务所在地域ID。
     * @example `cn-shanghai`
     */
    "ClusterId": string;
    /**
     * 服务名字。如何获取服务名称，请参见[ListServices ](~~412109~~)。
     * @example `foo`
     */
    "ServiceName": string;
}
