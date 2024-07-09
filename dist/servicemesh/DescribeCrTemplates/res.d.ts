export interface DescribeCrTemplatesResponse {
    /**
     * 请求ID。
     * @example `74E97AE2-2900-55C1-A069-C3C1EA*****`
     */
    RequestId: string;
    /**
     * 指定Istio资源类型的资源常用YAML模板。
     */
    Templates: {
        /**
         * YAML模板的中文名称。
         * @example `HTTP基础路由`
         */
        ChineseName: string;
        /**
         * YAML模板的英文名称。
         * @example `HTTP basic routing`
         */
        EnglishName: string;
        /**
         * YAML模板的具体内容。
         * @example `apiVersion: networking.istio.io/v1beta1\nkind: VirtualService\nmetadata:\n  name: reviews-route # Name for this VirtualService.\nspec:\n  hosts:\n  - reviews.prod.svc.cluster.local # Service that this VirtualSerivce belongs to. \n  http:\n  - name: \"reviews-route\" # Name for the route.\n    route:\n    - destination: # Uniquely identifies the instances of a service to which all traffic should be forwarded to.\n        host: reviews.prod.svc.cluster.local # The name of a service from the service registry or ServiceEntry.\n        port:\n          number: 8080"`
         */
        Yaml: string;
    }[];
}
