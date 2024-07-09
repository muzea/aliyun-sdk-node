export interface ListWaypointsResponse {
    /**
     * 请求ID。
     * @example `BD65C0AD-D3C6-48D3-8D93-38D2015C****`
     */
    RequestId: string;
    /**
     * Waypoint配置列表。
     */
    Waypoints: {
        /**
         * Waypoint对应的Gateway资源名称。如果ServiceAccount 生效，则与ServiceAccount同名；如果命名空间生效，则名称为 `namespace`。
         * @example `namespace`
         */
        Name: string;
        /**
         * Waypoint生效的ServiceAccount。如果为空，表示对整个命名空间生效。
         * @example `bookinfo-productpage`
         */
        ServiceAccount: string;
        /**
         * 命名空间。
         * @example `default`
         */
        Namespace: string;
        /**
         * Waypoint Pod请求的CPU资源。
         * @example `100m`
         */
        RequestCPU: string;
        /**
         * Waypoint Pod请求的内存资源。
         * @example `128Mi`
         */
        RequestMemory: string;
        /**
         * Waypoint Pod的CPU资源限制。
         * @example `2000m`
         */
        LimitCPU: string;
        /**
         * Waypoint Pod的内存资源限制。
         * @example `1024Mi`
         */
        LimitMemory: string;
        /**
         * Waypoint Pod的副本数。
         * @example `1`
         */
        Replicas: string;
        /**
         * 是否开启HPA。
         * @example `false`
         */
        HPAEnabled: string;
        /**
         * HPA目标CPU使用率。
         * @example `93`
         */
        HPATargetCPU: string;
        /**
         * HPA目标内存使用率。
         * @example `91`
         */
        HPATargetMemory: string;
        /**
         * HPA最小副本数。
         * @example `2`
         */
        HPAMinReplicas: string;
        /**
         * HPA最大副本数。
         * @example `4`
         */
        HPAMaxReplicas: string;
        /**
         * 是否优先调度到ECI节点。
         * @example `false`
         */
        PreferECI: string;
    }[];
    /**
     * base64编码的字符串。如果为空，表示已经获取到所有的waypoint；如果不为空，下次list时带上该值，可以接着从本次截止的offset继续获取。
     * @example `eyJ2IjoibWV0YS5rOHMuaW8vdjEiLCJydiI6MjY4Njc5Miwic3RhcnQiOiJkZWZhdWx0L2Jvb2tpbmZvLXByb2R1Y3RwYWdlXHUwMDAwIn0`
     */
    Continue: string;
}
