export interface DescribeCenBandwidthPackagesRequest {
    /**
     * 是否包含续费数据，取值：
     * - **true**：包含续费数据。
     * - **false**：不包含续费数据。
     * @example `true`
     */
    "IncludeReservationData"?: boolean;
    /**
     * 列表的页码，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
     * @example `2`
     */
    "PageSize"?: number;
    /**
     * 过滤条件之间的关系，取值：
     * - **false**（默认）：过滤条件之间是**与**的关系。即必须符合所有过滤条件，才视为匹配过滤条件。
     * - **true**：过滤条件之间是**或**的关系。即只要符合其中一个过滤条件，则视为匹配过滤条件。
     * @example `false`
     */
    "IsOrKey"?: boolean;
    /**
     * 资源组ID。
     * @example `rg-acfnwjeo4tv****`
     */
    "ResourceGroupId"?: string;
    /**
     * 过滤信息
     */
    "Filter"?: {
        /**
         * 过滤条件。
         * 您可以通过过滤条件筛选要查看的带宽包实例。系统支持以下过滤条件：
         * - **CenId**：云企业网实例的ID。
         * - **Status**：带宽包实例的状态，取值：
         *     - **Idle**：未绑定。
         *     - **InUse**：已绑定。
         * - **CenBandwidthPackageId**：带宽包的ID。
         * - **Name**：带宽包的名称。
         * 支持输入一个或多个过滤条件，**N**的最大值为**5**。
         * @example `CenId`
         */
        Key: string;
        /**
         * 根据**Key**指定过滤值。一个**Key**支持指定多个过滤值，每个过滤值之间是**或**的关系，即只要符合其中一个过滤值，则视为匹配该过滤条件。
         * @example `Idle`
         */
        Value: string[];
    }[];
    /**
     * 标签信息列表。
     * 一次最多支持输入20个标签信息。
     */
    "Tag"?: {
        /**
         * 资源的标签键。
         * 一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以`aliyun`或者`acs:`开头，不能包含`http://`或者`https:// `。
         * 一次最多支持输入20个标签的标签键。
         * @example `TagKey`
         */
        Key: string;
        /**
         * 资源的标签值。
         * 标签值可以为空或输入不超过128个字符的字符串，不能以`aliyun`或者`acs:`开头，不能包含`http://`或者`https:// `。
         * 每一个标签键对应一个标签值，一次最多支持输入20个标签键对应的标签值。
         * @example `TagValue`
         */
        Value: string;
    }[];
}
