export interface ModifyImageGatewayConfigRequest {
    /**
     * 集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 数据库类型。取值：mongodb
     * @example `mongodb`
     */
    "DBType"?: string;
    /**
     * 数据库用户名。
     * @example `root`
     */
    "DBUsername"?: string;
    /**
     * 数据库用户密码。
     * @example `13****`
     */
    "DBPassword"?: string;
    /**
     * 数据库URI信息。
     * @example `dds-uf6628e4287716b433270.mongodb.rds.aliyuncs.com:3717/admin`
     */
    "DBServerInfo"?: string;
    /**
     * 默认仓库服务。取值：registry-1.docker.io
     * @example `registry-1.docker.io`
     */
    "DefaultRepoLocation"?: string;
    /**
     * 拉取镜像时间限制。单位为秒。
     * @example `300`
     */
    "PullUpdateTimeout"?: number;
    /**
     * 删除镜像时间限制。
     * @example `12:00:00`
     */
    "ImageExpirationTimeout"?: string;
    /**
     * 仓库信息。
     */
    "Repo"?: {
        /**
         * 仓库的认证方式。取值范围：
         * - http
         * - https
         * 默认值：http
         * @example `http`
         */
        Auth: string;
        /**
         * 仓库的URL，如果要增加仓库源址，必须提供URL。
         * @example `https://registry.docker-cn.com`
         */
        URL: string;
        /**
         * 第N个仓库地址。
         * @example `registry.docker-cn.com`
         */
        Location: string;
    }[];
}
