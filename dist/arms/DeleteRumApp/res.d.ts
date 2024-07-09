export interface DeleteRumAppResponse {
    /**
     * Id of the request
     * @example `4C518054-852F-4023-ABC1-4AF95FF7****`
     */
    RequestId: string;
    /**
     * 状态码。说明 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 删除是否成功，成功：true，失败：false.
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误提示信息。
     * @example `删除的应用不存在。`
     */
    Message: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 删除结果提示。
     * @example `删除应用成功。`
     */
    Result: string;
    /**
     * 资源组ID。
     * @example `rg-aek2eq4peca****`
     */
    ResourceGroupId: string;
}
