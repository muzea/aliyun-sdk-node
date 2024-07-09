export interface ListVpdsResponse {
    /**
     * 响应码。
     * @example `0`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `9C50C9CD-E799-54DA-BA7A-1FAF3DF80857`
     */
    RequestId: string;
    /**
     * 响应内容。
     */
    Content: {
        /**
         * 总记录数。
         * @example `0`
         */
        Total: number;
        /**
         * 返回数据信息。
         */
        Data: {
            /**
             * 租户ID。
             * @example `1655449505171`
             */
            TenantId: string;
            /**
             * 地域ID。
             * @example `cn-wulanchabu`
             */
            RegionId: string;
            /**
             * 灵骏网段（VPD）实例ID
             * @example `vpd-lg4dppgi`
             */
            VpdId: string;
            /**
             * 灵骏网段（VPD）名称。
             * @example `vpd-1`
             */
            VpdName: string;
            /**
             * VPD的网段。
             * - 建议您使用RFC私网地址作为灵骏网段的网段如10.0.0.0/8，172.16.0.0/12，192.168.0.0/16，多灵骏网段互通场景或灵骏网段和VPC互通场景需确保地址规划不能冲突。
             * - 您也可以使用除 100.64.0.0/10、224.0.0.0/4、127.0.0.0/8 或 169.254.0.0/16 及其子网外的自定义地址段作为VPD的主IPv4网段。
             * @example `10.0.0.0/8`
             */
            Cidr: string;
            /**
             * 服务网段。
             * @example `169.254.252.0/23`
             */
            ServiceCidr: string;
            /**
             * 状态。
             * @example `Available`
             */
            Status: string;
            /**
             * 提示信息。
             * @example `成功`
             */
            Message: string;
            /**
             * nc数量。
             * @example `16`
             */
            NcCount: number;
            /**
             * 灵骏网卡数量
             * @example `1`
             */
            NetworkInterfaceCount: number;
            /**
             * Subnet数量。
             * @example `1`
             */
            SubnetCount: number;
            /**
             * 创建时间。
             * @example `1678273219000`
             */
            CreateTime: string;
            /**
             * 修改时间。
             * @example `1678273219000`
             */
            GmtModified: string;
            /**
             * 依赖项。
             */
            Dependence: any;
            /**
             * 已绑定的灵骏HUB（ER）信息列表。
             */
            ErInfos: {
                /**
                 * 创建时间。
                 * @example `1678273219000`
                 */
                CreateTime: string;
                /**
                 * 修改时间。
                 * @example `
                1678273219000`
                 */
                GmtModified: string;
                /**
                 * 提示信息。
                 * @example `成功`
                 */
                Message: string;
                /**
                 * 弹性路由器（ER）实例ID。
                 * @example `er-63vzm0fw`
                 */
                ErId: string;
                /**
                 * 地域信息。
                 * @example `cn-wulanchabu`
                 */
                RegionId: string;
                /**
                 * 租户ID。
                 * @example `1620939556166277`
                 */
                TenantId: string;
                /**
                 * 状态。
                 * @example `Available`
                 */
                Status: string;
                /**
                 * 灵骏HUB（ER）实例名称。
                 * @example `er-1`
                 */
                ErName: string;
                /**
                 * 主可用区。
                 * @example `cn-wulanchabu-b`
                 */
                MasterZoneId: string;
                /**
                 * 描述。
                 * @example `描述`
                 */
                Description: string;
                /**
                 * 连接数。
                 * @example `2`
                 */
                Connections: number;
                /**
                 * 路由策略数量。
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
                 * @example `tag-vpd-region`
                 */
                TagKey: string;
                /**
                 * 资源的标签值。
                 * 标签值可以为空或输入不超过128个字符的字符串，不能以aliyun或者acs:开头，不能包含http://或者https://。
                 * 每一个标签键对应一个标签值，一次最多支持输入20个标签键对应的标签值。
                 * @example `cn-wulanchabu`
                 */
                TagValue: string;
            }[];
            /**
             * 资源组ID。
             * 关于资源组的更多信息，请参见[什么是资源组](https://help.aliyun.com/document_detail/94475.htm?spm=a2c4g.11186623.0.0.29e15d7akXhpuu)。
             * @example `rg-aek2l4sq6l7unhi`
             */
            ResourceGroupId: string;
            /**
             * 附加网段信息列表。
             */
            SecondaryCidrBlocks: string[];
        }[];
    };
}
