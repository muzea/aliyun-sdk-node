export interface DeleteIngressRequest {
    /**
     * 需要删除的路由规则ID。通过调用[ListIngresses](~~153934~~)接口获取。
     * @example `87`
     */
    "IngressId": number;
}
