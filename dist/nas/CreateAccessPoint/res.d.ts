export interface CreateAccessPointResponse {
    /**
     * 请求ID。
     * @example `98696EF0-1607-4E9D-B01D-F20930B6****
    `
     */
    RequestId: string;
    /**
     * 接入点。
     */
    AccessPoint: {
        /**
         * 接入点域名。
         * @example `ap-ie15ydanoz.001014****-w****.cn-hangzhou.nas.aliyuncs.com`
         */
        AccessPointDomain: string;
        /**
         * 接入点ID。
         * @example `ap-ie15yd****`
         */
        AccessPointId: string;
    };
}
