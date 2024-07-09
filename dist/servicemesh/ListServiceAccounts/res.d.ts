export interface ListServiceAccountsResponse {
    /**
     * 请求ID。
     * @example `8349374D-0F22-5CAB-9DE3-8CCE8EFA71FF`
     */
    RequestId: string;
    /**
     * ServiceAccount列表。
     */
    ServiceAccounts: {
        /**
         * ServiceAccount名称
         * @example `bookinfo-reviews`
         */
        Name: string;
        /**
         * ServiceAccount所在的命名空间
         * @example `default`
         */
        Namespace: string;
    }[];
}
