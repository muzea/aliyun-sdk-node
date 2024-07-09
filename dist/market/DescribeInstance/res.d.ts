export interface DescribeInstanceResponse {
    /**
     * 业务状态，根据不同商品类型设置不同值：
     * 当ProductType = MIRROR 时
     * - PRODUCE：生产中
     * - USING：使用中
     * - UNUSED：未使用
     * - EXPIRED：已过期
     * - CLOSED：已释放
     * 当 ProductType = SERVICE 时
     * - READYING：未开始
     * - STARTED：服务中
     * - CONFIRM：已完成
     * - EXPIRED：已过期
     * - CLOSED：已释放
     * 当 ProductType = APP, DOWNLOAD, API_SERVICE, DOCKER 时
     * - OPENING：开通中
     * - OPENED：已开通
     * - EXPIRED：已过期
     * - CLOSED：已释放
     * @example `OPENED`
     */
    Status: string;
    /**
     * 应用信息，示例中的参数说明如下：
     * - username：用户名
     * - passowrd：密码
     * - frontEndUrl：前台地址
     * - adminUrl：管理地址
     * @example `{"frontEndUrl":"https://****.aliyundoc.com","password":"Sjtv***","adminUrl":"https://****.aliyundoc.com","username":"aliyun***"}`
     */
    AppJson: string;
    /**
     * 商品名称
     * @example `***协同办公`
     */
    ProductName: string;
    /**
     * 实例ID
     * @example `1551111111`
     */
    InstanceId: number;
    /**
     * 扩展信息
     * @example `{"说明": "如有使用问题，请联系..."}`
     */
    ExtendJson: string;
    /**
     * 是否试用
     * @example `true`
     */
    IsTrial: boolean;
    /**
     * 实例开通时间（时间戳）
     * @example `1570634021000`
     */
    BeganOn: number;
    /**
     * 业务模块
     * 示例中的参数说明如下：
     * - package_version：版本
     * @example `{"package_version":"yuncode000111"}`
     */
    ComponentJson: string;
    /**
     * 已废弃
     * @example `{}`
     */
    Constraints: string;
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
     * 主机信息，示例中的参数说明如下：
     * - username：用户名
     * - passowrd：密码
     * - ip：主机 IP
     * - innerIp：主机内网 IP
     * @example `{"password":"***","ip":"118.31.***.41","innerIp":"118.31.***.41","region":"","username":"***","beianInfo":""}`
     */
    HostJson: string;
    /**
     * 规格Code
     * @example `cmgj00**11-prepay`
     */
    ProductSkuCode: string;
    /**
     * 创建时间（时间戳）
     * @example `1570634018000`
     */
    CreatedOn: number;
    /**
     * 到期时间（时间戳）
     * @example `1602259200000`
     */
    EndOn: number;
    /**
     * 订单ID
     * @example `204211111111111`
     */
    OrderId: number;
    /**
     * 商品Code
     * @example `cmgj00**11`
     */
    ProductCode: string;
    /**
     * 服务商名称
     * @example `*****有限公司`
     */
    SupplierName: string;
    /**
     * 关联信息
     */
    RelationalData: {
        /**
         * 服务状态
         * - READYING：未开始
         * - STARTED： 服务中
         * - CONFIRM：已完成
         * - EXPIRED： 已过期
         * - CLOSED： 已释放
         * @example `STARTED`
         */
        ServiceStatus: string;
    };
    Modules: {
        /**
         * 商品模块信息，已废弃。
         */
        Module: {
            /**
             * 已废弃
             * @example `package_config`
             */
            Code: string;
            /**
             * 已废弃
             * @example `套餐配置`
             */
            Name: string;
            /**
             * 已废弃
             * @example `101*********026`
             */
            Id: string;
            Properties: {
                /**
                 * 已废弃
                 */
                Property: {
                    /**
                     * 已废弃
                     * @example `12`
                     */
                    Key: string;
                    /**
                     * 已废弃
                     * @example `12`
                     */
                    ShowType: string;
                    /**
                     * 已废弃
                     * @example `12`
                     */
                    Name: string;
                    /**
                     * 已废弃
                     * @example `12`
                     */
                    DisplayUnit: string;
                    PropertyValues: {
                        /**
                         * 已废弃
                         */
                        PropertyValue: {
                            /**
                             * 已废弃
                             * @example `12`
                             */
                            DisplayName: string;
                            /**
                             * 已废弃
                             * @example `12`
                             */
                            Type: string;
                            /**
                             * 已废弃
                             * @example `12`
                             */
                            Step: string;
                            /**
                             * 已废弃
                             * @example `12`
                             */
                            Value: string;
                            /**
                             * 已废弃
                             * @example `12`
                             */
                            Max: string;
                            /**
                             * 已废弃
                             * @example `12`
                             */
                            Remark: string;
                            /**
                             * 已废弃
                             * @example `12`
                             */
                            Min: string;
                        }[];
                    };
                }[];
            };
        }[];
    };
    AutoRenewal: string;
    ActiveAddress: string;
    LicenseCode: string;
}
