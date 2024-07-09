export interface GetVpdResponse {
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
     * 当次请求的Request ID。
     * @example `A88DFED5-24B7-5A3E-87DE-380BF06F3C90`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Content: {
        /**
         * 地域ID。
         * @example `cn-wulanchabu`
         */
        RegionId: string;
        /**
         * 灵骏网段（VPD）实例ID。
         * @example `vpd-fulie***`
         */
        VpdId: string;
        /**
         * 灵骏网段实例名称。
         * @example `vpd-1`
         */
        VpdName: string;
        /**
         * 网络地址段。
         * @example `10.0.0.0/8`
         */
        Cidr: string;
        /**
         * 内部Service网段。
         * @example `169.254.252.0/23`
         */
        ServiceCidr: string;
        /**
         * 实例状态。
         * @example `Available`
         */
        Status: string;
        /**
         * 错误信息。（当实例状态为异常时，提示异常原因）
         * @example `可用`
         */
        Message: string;
        /**
         * NC数量。
         * @example `16`
         */
        NcCount: number;
        /**
         * 灵骏网卡数量。
         * @example `1`
         */
        NetworkInterfaceCount: number;
        /**
         * 灵骏子网（Subnet）个数。
         * @example `1`
         */
        SubnetCount: number;
        /**
         * 创建时间。
         * @example `2023-10-25 15:57:16`
         */
        CreateTime: string;
        /**
         * 修改时间。
         * @example `2023-10-25 15:57:16`
         */
        GmtModified: string;
        /**
         * 租户ID。
         * @example `162093***166279`
         */
        TenantId: string;
        /**
         * 已绑定的灵骏HUB（ER）信息。
         */
        ErInfos: {
            /**
             * 创建时间。
             * @example `2023-10-25 15:57:16`
             */
            CreateTime: string;
            /**
             * 修改时间。
             * @example `2023-10-25 15:57:16`
             */
            GmtModified: string;
            /**
             * 提示信息。
             * @example `success`
             */
            Message: string;
            /**
             * 弹性路由器（ER）实例ID。
             * @example `er-a7rqv1rq***`
             */
            ErId: string;
            /**
             * 弹性路由器（ER）所属地域ID。
             * @example `cn-wulanchabu`
             */
            RegionId: string;
            /**
             * 租户ID。
             * @example `162093***166279
            `
             */
            TenantId: string;
            /**
             * 状态。
             * @example `Available`
             */
            Status: string;
            /**
             * 弹性路由器（ER）实例名称
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
         * 是否已绑定灵骏HUB（ER）。
         * - **true** :  已绑定ER。
         * - **false** ：未绑定ER。
         * @example `true
        `
         */
        AttachErStatus: boolean;
        /**
         * 资源组ID。
         * 关于资源组的更多信息，请参见[什么是资源组](https://help.aliyun.com/document_detail/94475.htm?spm=a2c4g.11186623.0.0.29e15d7akXhpuu)。
         * @example `rg-aek2l4sq6l7u***`
         */
        ResourceGroupId: string;
        /**
         * 标签信息。
         * 一次最多支持输入20个标签信息。
         */
        Tags: {
            /**
             * 资源的标签键。
             * 一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以aliyun或者acs:开头，不能包含http://或者https://。
             * 一次最多支持输入20个标签的标签键。
             * @example `tag-subent-region`
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
         * 总配额信息。
         * @example `10`
         */
        Quota: number;
        /**
         * 辅助私网IP总数。
         * @example `10`
         */
        PrivateIpCount: number;
        /**
         * 附加网段信息列表。
         */
        SecondaryCidrBlocks: string[];
    };
}
