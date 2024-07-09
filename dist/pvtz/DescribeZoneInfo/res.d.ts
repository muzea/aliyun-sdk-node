export interface DescribeZoneInfoResponse {
    /**
     * 唯一请求识别码。
     * @example `F73F41A3-B6DD-42CA-A793-FFF93277835D`
     */
    RequestId: string;
    /**
     * 是否开启辅助DNS。取值：
     * - **true**：已开启
     * - **false**：未开启
     * @example `true`
     */
    SlaveDns: boolean;
    /**
     * 资源组ID。
     * @example `rg-xxxxxxxx`
     */
    ResourceGroupId: string;
    /**
     * Zone ID。
     * @example `AgIDE0OQ_149<`
     */
    ZoneId: string;
    /**
     * - **ZONE**：当前Zone不进行递归解析；
     * - **RECORD**：递归解析代理。
     * @example `ZONE`
     */
    ProxyPattern: string;
    /**
     * 创建时间。
     * @example `2018-01-23T03:15Z`
     */
    CreateTime: string;
    /**
     * zone类型：
     * - AUTH_ZONE：权威Zone；
     * - CLOUD_PRODUCT_ZONE：云产品权威Zone。
     * @example `CLOUD_PRODUCT_ZONE`
     */
    ZoneType: string;
    /**
     * 备注。
     * @example `specialZone`
     */
    Remark: string;
    /**
     * Zone名称。
     * @example `test.com`
     */
    ZoneName: string;
    /**
     * - 若查权威Zone列表，则忽略此参数；
     * - 若查使用或者管理的云产品PrivateZone，则查询对应的云产品类型Zone列表。
     * @example `pvtz`
     */
    ZoneTag: string;
    /**
     * 更新时间。
     * @example `2018-01-24T06:35Z`
     */
    UpdateTime: string;
    /**
     * 更新时间（时间戳）。
     * @example `1516775741000`
     */
    UpdateTimestamp: number;
    /**
     * 含有的解析记录总数。
     * @example `2`
     */
    RecordCount: number;
    /**
     *
     * 创建时间（时间戳）。
     * @example `1516775741000`
     */
    CreateTimestamp: number;
    BindVpcs: {
        /**
         * 绑定的Vpc列表。
         */
        Vpc: {
            /**
             * Vpc名称。
             * @example `daily-vpc-name`
             */
            VpcName: string;
            /**
             * Vpc ID。
             * @example `daily-vpc-id`
             */
            VpcId: string;
            /**
             * vpc类型：
             * - STANDARD：标准VPC。
             * - EDS：无影工作区VPC。
             * @example `STANDARD`
             */
            VpcType: string;
            /**
             * 地域名称。
             * @example `1304`
             */
            RegionName: string;
            /**
             * vpc归属的用户Id；若为null则归属当前用户。
             * @example `vpc-bp1aevy8sofi8mh1q****`
             */
            VpcUserId: number;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
    };
    /**
     * - true，是反解zone
     * - false，非反解zone
     * @example `false`
     */
    IsPtr: boolean;
    /**
     * 内置权威位置区
     * - 普通区：NORMAL_ZONE
     * - 快速区：FAST_ZONE
     * @example `FAST_ZONE`
     */
    DnsGroup: string;
    /**
     * Zone创建者
     * @example `2312234523451342`
     */
    Creator: string;
    /**
     * 操作者类型。
     * @example `USER`
     */
    CreatorType: string;
    /**
     * Zone切换位置区状态
     * - 切换中：true
     * - 未切换：false
     * @example `false`
     */
    DnsGroupChanging: boolean;
}
