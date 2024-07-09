export interface ListVccsResponse {
    /**
     * 响应状态码
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息。（当实例状态为异常时，提示异常原因）
     * @example `成功`
     */
    Message: string;
    /**
     * 当次请求的Request ID
     * @example `28451248-7038-5184-B5D3-80F104654BE8`
     */
    RequestId: string;
    /**
     * 响应内容
     */
    Content: {
        /**
         * 总记录数
         * @example `0`
         */
        Total: number;
        /**
         * 灵骏连接信息列表
         */
        Data: {
            /**
             * 租户ID
             * @example `1620939556166279
            `
             */
            TenantId: string;
            /**
             * 地域ID
             * @example `cn-wulanchabu`
             */
            RegionId: string;
            /**
             * 可用区ID
             * @example `cn-wulanchabu-b`
             */
            ZoneId: string;
            /**
             * 灵骏连接实例ID
             * @example `vcc-cn-zvp2w222001`
             */
            VccId: string;
            /**
             * 灵骏网段实例ID
             * @example `vpd-eoiy88ju`
             */
            VpdId: string;
            /**
             * 专有网络ID；[什么是专有网络](https://help.aliyun.com/document_detail/34217.html)
             * 可调用[DescribeVpcs](https://help.aliyun.com/document_detail/35739.html#demo-0)接口查询指定VPC。
             * @example `vpc-f8ziirfl9k25h2qn7y4f8`
             */
            VpcId: string;
            /**
             * 云企业网实例的ID；[什么是云企业网?](https://help.aliyun.com/document_detail/181681.html)
             * 你可用调用[DescribeCens](https://help.aliyun.com/document_detail/468215.htm)查询当前阿里云账号下的云企业网实例信息。
             * @example `cen-w15qot0pfvs83pkckj`
             */
            CenId: string;
            /**
             * 灵骏连接实例名称
             * @example `vcc-heyuan-backup`
             */
            VccName: string;
            /**
             * 物理专线接入点的ID：
             * - **ap-cn-wulanchabu-jn-ts-A**：乌兰察布-集宁-A
             * - **ap-cn-heyuan-yc-ts-SA127**：河源-源城-A
             * @example `ap-cn-wulanchabu-jn-ts-A`
             */
            AccessPointId: string;
            /**
             * 提供接入物理线路的运营商。取值：
             * - **CO**：中国其他
             * @example `CO`
             */
            LineOperator: string;
            /**
             * 规格
             * @example `Large`
             */
            Spec: string;
            /**
             * 物理专线接入端口类型。取值：
             * - **100GBase-LR**：十万兆单模光口（10千米）
             * @example `100GBase-LR
            `
             */
            PortType: string;
            /**
             * 实例状态
             * @example `Init`
             */
            Status: string;
            /**
             * 当前流程节点
             * @example `持久化资源数据`
             */
            CurrentNode: string;
            /**
             * 错误信息。（当实例状态为异常时，提示异常原因）
             * @example `成功`
             */
            Message: string;
            /**
             * 创建时间
             * @example `1678273219000`
             */
            CreateTime: string;
            /**
             * 更新时间
             * @example `1678273219000`
             */
            GmtModified: string;
            /**
             * 任务Id
             * @example `task-cd544092-ed0a-49e9-83eb-e8c94770dccf`
             */
            TaskId: string;
            /**
             * 灵骏网段信息；（适用于老版本的灵骏连接直接绑定灵骏网段的场景）
             */
            VpdBaseInfo: {
                /**
                 * 灵骏网段实例ID
                 * @example `vpd-9n7ioqrp`
                 */
                VpdId: string;
                /**
                 * 灵骏网段实例名称
                 * @example `yzp-rg-test3`
                 */
                VpdName: string;
                /**
                 * VPD的网段。
                 * - 建议您使用RFC私网地址作为灵骏网段的网段如10.0.0.0/8，172.16.0.0/12，192.168.0.0/16，多灵骏网段互通场景或灵骏网段和VPC互通场景需确保地址规划不能冲突。
                 * - 您也可以使用除 100.64.0.0/10、224.0.0.0/4、127.0.0.0/8 或 169.254.0.0/16 及其子网外的自定义地址段作为VPD的主IPv4网段。
                 * @example `10.0.0.0/13`
                 */
                Cidr: string;
                /**
                 * 创建时间
                 * @example `1668158213000`
                 */
                CreateTime: string;
            };
            /**
             * 流程进度；取值返回0~1；未开始为null
             * @example `1`
             */
            Rate: number;
            /**
             * 带宽
             * @example `1000`
             */
            BandwidthStr: string;
            /**
             * 商品代码
             * @example `bccluster_cloudconnectionpre_public_cn`
             */
            CommodityCode: string;
            /**
             * bgp网段
             * @example `172.16.128.0/24`
             */
            BgpCidr: string;
            /**
             * 过期时间
             * @example `1678273219000`
             */
            ExpirationDate: string;
            /**
             * 资源组ID。
             * 关于资源组的更多信息，请参见[什么是资源组](https://help.aliyun.com/document_detail/94475.htm?spm=a2c4g.11186623.0.0.29e15d7akXhpuu)。
             * @example `rg-aek2l4sq6l7unhi`
             */
            ResourceGroupId: string;
            /**
             * 已绑定的灵骏HUB信息列表
             */
            ErInfos: {
                /**
                 * 创建时间
                 * @example `1678273219000`
                 */
                CreateTime: string;
                /**
                 * 修改时间
                 * @example `1678273219000`
                 */
                GmtModified: string;
                /**
                 * 提示信息
                 * @example `成功`
                 */
                Message: string;
                /**
                 * 弹性路由器ID
                 * @example `er-a7rqv1rq`
                 */
                ErId: string;
                /**
                 * ER地域信息
                 * @example `cn-wulanchabu`
                 */
                RegionId: string;
                /**
                 * 租户ID
                 * @example `1620939556166277`
                 */
                TenantId: string;
                /**
                 * 状态
                 * @example `Available`
                 */
                Status: string;
                /**
                 * ER实例名称
                 * @example `er-1`
                 */
                ErName: string;
                /**
                 * 主可用区
                 * @example `cn-wulanchabu-b`
                 */
                MasterZoneId: string;
                /**
                 * 描述
                 * @example `描述`
                 */
                Description: string;
                /**
                 * 连接数
                 * @example `2`
                 */
                Connections: number;
                /**
                 * 路由策略数量
                 * @example `2`
                 */
                RouteMaps: number;
            }[];
            /**
             * 标签信息。
             * 一次最多支持输入20个标签信息。
             */
            Tags: {
                /**
                 * 资源的标签键。
                 * 一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以aliyun或者acs:开头，不能包含http://或者https://。
                 * 一次最多支持输入20个标签的标签键。
                 * @example `tag-vcc`
                 */
                TagKey: string;
                /**
                 * 资源的标签值。
                 * 标签值可以为空或输入不超过128个字符的字符串，不能以aliyun或者acs:开头，不能包含http://或者https://。
                 * 每一个标签键对应一个标签值，一次最多支持输入20个标签键对应的标签值。
                 * @example `vcc-group-1`
                 */
                TagValue: string;
            }[];
            /**
             * 连接方式，可选值：
             * - **VPC**
             * - **CENTR**
             * @example `CENTR`
             */
            ConnectionType: string;
            /**
             * cen所属账号
             * @example `1238685214107736`
             */
            CenOwnerId: string;
        }[];
    };
}
