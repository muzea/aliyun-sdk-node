export interface CommitServiceRequest {
    /**
     * 服务所在地域ID。
     * @example `cn-beijing`
     */
    "ClusterId"?: string;
    /**
     * 服务名称。如何查看服务名称，请参见[ListServices ](~~412109~~)。
     * @example `foo`
     */
    "ServiceName"?: string;
}
