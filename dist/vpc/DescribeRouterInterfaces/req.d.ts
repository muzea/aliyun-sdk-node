export interface DescribeRouterInterfacesRequest {
    /**
     * 路由器接口所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example ` cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 是否包含续费数据。取值：
     * - **true**：是。
     * - **false**（默认值）：否。
     * @example `false`
     */
    "IncludeReservationData"?: boolean;
    /**
     * 列表的页码，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数，最大值为**50**。默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 过滤信息。
     */
    "Filter"?: {
        /**
         * 过滤条件，最多可提供5个过滤条件。支持以下过滤条件：
         * - **RouterInterfaceId**：路由器接口ID。
         * - **RouterId**：路由器ID。
         * - **RouterType**：路由器类型，取值为**VRouter**或**VBR**。
         * - **RouterInterfaceOwnerId**：路由器接口的所属账号ID。
         * - **OppositeInterfaceId**：对端路由器接口ID。
         * - **OppositeRouterType**：对端路由器接口类型，取值为**VRouter**或**VBR**。
         * -  **OppositeRouterId**：对端路由器接口ID。
         * - **OppositeInterfaceOwnerId**：对端路由器接口所属账号ID。
         * -  **Status**：路由器接口状态。
         * - **Name**：路由器接口名称。
         * > 每个过滤条件的多个值之间为或关系，即只要与其中一个值吻合则视为符合该过滤条件。各个过滤条件之间为与关系，即符合所有指定的过滤条件，才会进入最终的查询结果。
         * @example `Filter.1.Status`
         */
        Key: string;
        /**
         * 根据Key指定过滤值。一个Key支持指定多个过滤值，每个过滤值之间是或的关系，即只要符合其中一个过滤值，则视为匹配该过滤条件。
         * @example `Filter.1.Active 1`
         */
        Value: string[];
    }[];
    /**
     * 资源组ID。
     * 关于资源组的更多信息，请参见[什么是资源组](~~94475~~)。
     * @example `rg-acfmxazb4ph6aiy****`
     */
    "ResourceGroupId"?: string;
    /**
     * 资源的标签。
     */
    "Tags"?: {
        /**
         * 资源的标签键。至少输入1个标签键，最多支持输入20个标签键。如需传入该值，则不能输入空字符串。
         * 一个标签键最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。如需传入该值，可以输入空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
}
