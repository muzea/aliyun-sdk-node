export interface CreateImageCacheRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可用区。
     * @example `cn-hangzhou-g`
     */
    "ZoneId"?: string;
    /**
     * 安全组ID。
     * @example `sg-uf66jeqopgqa9hdn****`
     */
    "SecurityGroupId"?: string;
    /**
     * 交换机ID。支持指定多个交换机ID（单次最多10个），各交换机ID之间可以用半角逗号（,）进行分割，例如`vsw-***,vsw-***`。
     * @example `vsw-uf6h3rbwbm90urjwa****`
     */
    "VSwitchId"?: string;
    /**
     * 镜像缓存名称。
     * @example `testcache`
     */
    "ImageCacheName": string;
    /**
     * 弹性公网IP。如果需要拉取公网镜像，需要确保ECI实例能够访问公网，您可以配置EIP或者NAT网关实现公网访问。
     * @example `eip-2zedsm5mfl3uhdj2d****`
     */
    "EipInstanceId"?: string;
    /**
     * 资源组ID。
     * @example `rg-aekzh43v*****`
     */
    "ResourceGroupId"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-xxx-xxx-xxxx-42665544xxxx`
     */
    "ClientToken"?: string;
    /**
     * 镜像缓存的大小。默认为20 GiB。
     * @example `20`
     */
    "ImageCacheSize"?: number;
    /**
     * 镜像缓存保留时间，过期将会被清理，默认永不过期。
     * > 创建失败的镜像缓存仅保留一天。
     * @example `7`
     */
    "RetentionDays"?: number;
    /**
     * 是否开启镜像缓存复用。开启后，新创建的镜像缓存可以复用已有镜像缓存的镜像层，加快镜像缓存的制作速度。取值范围：
     * - true：开启
     * - false：不开启
     * 默认为false。
     * @example `true`
     */
    "AutoMatchImageCache"?: boolean;
    /**
     * 镜像仓库信息。
     */
    "ImageRegistryCredential"?: {
        /**
         * 镜像仓库密码。
         * @example `password`
         */
        Password: string;
        /**
         * 不带 `http://` 或  `https://` 前缀的镜像仓库地址。
         * @example `registry-vpc.cn-hangzhou.aliyuncs.com`
         */
        Server: string;
        /**
         * 镜像仓库用户名。
         * @example `username`
         */
        UserName: string;
    }[];
    /**
     * 用于制作镜像缓存的容器镜像。
     * @example `registry-vpc.cn-hangzhou.aliyuncs.com/eci_open/nginx:1.15.10-perl`
     */
    "Image": string[];
    /**
     * 镜像缓存标签信息，最多20个。
     */
    "Tag"?: {
        /**
         * 镜像缓存标签键。
         * @example `imc`
         */
        Key: string;
        /**
         * 镜像缓存标签值。
         * @example `test`
         */
        Value: string;
    }[];
    /**
     * 是否开启极速镜像缓存功能，开启后，可以加速镜像缓存创建。取值范围：
     * - true：开启
     * - false：不开启
     * 默认为false。
     * @example `true`
     */
    "Flash"?: boolean;
    /**
     * ACR实例信息。更多信息，请参见[免密拉取ACR镜像](~~194250~~)。
     */
    "AcrRegistryInfo"?: {
        /**
         * ACR企业版实例的域名。默认为相应实例的所有域名。支持指定个别域名，多个以半角逗号分隔。
         * @example `test****-registry.cn-beijing.cr.aliyuncs.com`
         */
        Domain: string[];
        /**
         * ACR企业版实例的名称。
         * @example `test****`
         */
        InstanceName: string;
        /**
         * ACR企业版实例ID。
         * @example `cri-nwj395hgf6f3****`
         */
        InstanceId: string;
        /**
         * ACR企业版实例所属地域。
         * @example `cn-beijing`
         */
        RegionId: string;
        /**
         * ECI实例等资源归属账号下的RAM角色的ARN。
         * @example `acs:ram::1609982529******:role/role-assume`
         */
        ArnService: string;
        /**
         * ACR实例归属账号下的RAM角色的ARN。
         * @example `acs:ram::1298452580******:role/role-acr`
         */
        ArnUser: string;
    }[];
    /**
     * 注解。该参数暂不对外使用。
     * @example `hide`
     */
    "Annotations"?: string;
    /**
     * 自建镜像仓库地址。使用HTTP协议的自建镜像仓库中的镜像创建镜像缓存时，需配置该参数，使得ECI使用HTTP协议拉取镜像，避免因协议不同而导致镜像拉取失败。
     * @example `"harbor***.pre.com,192.168.XX.XX:5000,reg***.test.com:80"`
     */
    "PlainHttpRegistry"?: string;
    /**
     * 自建镜像仓库地址。
     * 使用自签发证书的自建镜像仓库中的镜像创建镜像缓存时，需配置该参数来跳过证书认证，避免因证书认证失败而导致镜像拉取失败。
     * @example `"harbor***.pre.com,192.168.XX.XX:5000,reg***.test.com:80"`
     */
    "InsecureRegistry"?: string;
    /**
     * 普通快照副本数。默认情况下，一个镜像缓存对应一个快照。如果该镜像缓存将用于批量创建多个ECI实例，建议您配置该参数实现快照多副本。推荐每1000个ECI实例增加一个快照副本。
     * > 未开启极速镜像缓存功能（Flash取值为false）时，创镜像缓存的过程中仅生成普通快照。
     * @example `7`
     */
    "StandardCopyCount"?: number;
    /**
     * 本地快照副本数。默认情况下，一个镜像缓存对应一个快照。如果该镜像缓存将用于批量创建多个ECI实例，建议您配置该参数实现快照多副本。推荐每1000个ECI实例增加一个快照副本。
     * > 开启极速镜像缓存功能（Flash取值为true）时，创建镜像缓存的过程中将先创建本地快照，在本地快照创建完成后开始创建普通快照，待普通快照创建完成后会自动删除本地快照。
     * @example `7`
     */
    "FlashCopyCount"?: number;
    /**
     * 镜像缓存的淘汰策略。默认为空，表示一直保留。
     * 支持配置为LRU，表示可以被自动删除。当镜像缓存数量达到配额限制时，系统将自动删除最不常用的EliminationStrategy为LRU的镜像缓存。
     * @example `LRU`
     */
    "EliminationStrategy"?: string;
}
