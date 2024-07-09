export interface DeleteServiceLabelRequest {
    /**
     * 服务所在区域。
     * @example `cn-shanghai`
     */
    "ClusterId": string;
    /**
     * 服务名称。如何查看服务名称，请参见[ListServices](~~412109~~)。
     * @example `foo`
     */
    "ServiceName": string;
    /**
     * 要删除的服务标签。
     */
    "Keys": string[];
}
