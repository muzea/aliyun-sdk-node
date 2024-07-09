export interface DescribeImageGatewayConfigResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 镜像网关配置文件信息。
     */
    Imagegw: {
        /**
         * 文件更新时间。
         * @example `2018-07-18T17:46:47`
         */
        UpdateDateTime: string;
        /**
         * 镜像失效时间限制。
         * @example `90:00:00`
         */
        ImageExpirationTimeout: string;
        /**
         * 镜像网关数据库信息。
         * @example `mongodb://localhost`
         */
        MongoDBURI: string;
        /**
         * 默认仓库源址。
         * @example `registry-1.docker.io`
         */
        DefaultImageLocation: string;
        /**
         * 拉取镜像的时间限制。
         * @example `300`
         */
        PullUpdateTimeout: number;
        Locations: {
            /**
             * 仓库源址数组。
             */
            LocationInfo: {
                /**
                 * 仓库源址URL。
                 * @example `https://regi****.docker-cn.com`
                 */
                URL: string;
                /**
                 * 仓库类型。
                 * @example `dockerv2`
                 */
                RemoteType: string;
                /**
                 * 仓库源址。
                 * @example `regi****.docker.io`
                 */
                Location: string;
                /**
                 * 仓库的认证方式。可能值：
                 * - http
                 * - https
                 * @example `https`
                 */
                Authentication: string;
            }[];
        };
    };
}
