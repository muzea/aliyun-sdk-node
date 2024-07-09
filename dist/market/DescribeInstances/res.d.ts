export interface DescribeInstancesResponse {
    /**
     * 请求ID。
     * @example `54C22FB9-0CB1-5629-97A8-653FC7990F00`
     */
    RequestId: string;
    /**
     * 当前页数
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页的实例个数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 实例总数
     * @example `55`
     */
    TotalCount: number;
    InstanceItems: {
        /**
         * 实例列表。
         */
        InstanceItem: {
            /**
             * 业务状态
             * - 当 ProductType = MIRROR 时
             *   - PRODUCE：生产中
             *   - USING：使用中
             *   - UNUSED：未使用
             *   - EXPIRED：已过期
             *   - CLOSED：已释放
             * - 当 ProductType = SERVICE 时
             *   - READYING：未开始
             *   - STARTED：服务中
             *   - CONFIRM：已完成
             *   - EXPIRED：已过期
             *   - CLOSED：已释放
             * - 当 ProductType = APP, DOWNLOAD, API_SERVICE, DOCKER 时
             *   - OPENING：开通中
             *   - OPENED：已开通
             *   - EXPIRED：已过期
             *   - CLOSED：已释放
             * @example `OPENED`
             */
            Status: string;
            /**
             * 应用信息
             * 示例中的参数说明如下：
             * - username：用户名
             * - passowrd：密码
             * - frontEndUrl：前台地址
             * - adminUrl：管理地址
             * - authUrl: 免登地址
             * @example `{"frontEndUrl":"https://***.aliyun.com","password":"Sjtv***","adminUrl":"https://***.aiiyun.com","username":"aliyun***"}`
             */
            AppJson: string;
            /**
             *
             * @example `{}`
             */
            ApiJson: string;
            /**
             * 商品名称
             * @example `***协同办公`
             */
            ProductName: string;
            /**
             * 镜像信息
             * @example `{}`
             */
            ImageJson: string;
            /**
             * 实例id
             * @example `1551111111`
             */
            InstanceId: number;
            /**
             * 扩展信息
             * @example `{"说明": "如有使用问题，请联系..."}`
             */
            ExtendJson: string;
            /**
             * 开通时间
             * @example `1570634021000`
             */
            BeganOn: number;
            /**
             * 商品类型，取值：
             * - APP：应用类
             * - SERVIC：服务类
             * - MIRROR：镜像类
             * - DOWNLOAD：下载类
             * - API_SERVICE：API类
             * - DOCKER：DOCKER类
             * @example `APP`
             */
            ProductType: string;
            /**
             * 主机信息
             * 示例中的参数说明如下：
             * - username：用户名
             * - passowrd：密码
             * - ip：主机 IP
             * - innerIp：主机内网 IP
             * @example `{"password":"***","ip":"118.31.***.41","innerIp":"118.31.***.41","region":"","username":"***","beianInfo":""}`
             */
            HostJson: string;
            /**
             * 规格code
             * @example `cmgj00**11-prepay`
             */
            ProductSkuCode: string;
            /**
             * 创建时间
             * @example `1570634021000`
             */
            CreatedOn: number;
            /**
             * idaas信息，已经废弃
             * @example `{}`
             */
            IdaasJson: string;
            /**
             * 结束时间
             * @example `1570644021000`
             */
            EndOn: number;
            /**
             * 订单id
             * @example `204211111111111`
             */
            OrderId: number;
            /**
             * 商品code
             * @example `cmgj00**11`
             */
            ProductCode: string;
            /**
             * 服务商名称
             * @example `阿里巴巴技术有限公司`
             */
            SupplierName: string;
        }[];
    };
}
