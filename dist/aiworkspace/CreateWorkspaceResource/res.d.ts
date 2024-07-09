export interface CreateWorkspaceResourceResponse {
    /**
     * 请求ID。
     * @example `1e195c5116124202371861018d5bde`
     */
    RequestId: string;
    /**
     * 资源集合
     */
    Resources: {
        /**
         * 资源ID。
         * @example `1234`
         */
        Id: string;
    }[];
    /**
     * 资源总数。
     * @example `1`
     */
    TotalCount: number;
}
