export interface UpdateK8sClusterUserConfigExpireRequest {
    /**
     * 集群ID。
     * @example `c5b5e80b0b64a4bf6939d2d8fbbc5****`
     */
    "ClusterId": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 用户指定的过期时间。单位：小时。
         * >expire_hour过期小时数需大于0且小于等于 876000小时（100年）。
         * @example `720`
         */
        expire_hour: number;
        /**
         * 用户ID。
         * @example `RAM的UID`
         */
        user: string;
    };
}
