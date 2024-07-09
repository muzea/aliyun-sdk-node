export interface DescribeAddressBookResponse {
    /**
     * 当前页面的页码。
     * @example `1`
     */
    PageNo: string;
    /**
     * 每页包含的地址簿的数量。
     * @example `10`
     */
    PageSize: string;
    /**
     * 结果的请求ID。
     * @example `B36F150A-1E27-43AA-B72C-D2AC712F09DA`
     */
    RequestId: string;
    /**
     * 地址簿的总数量。
     * @example `100`
     */
    TotalCount: string;
    /**
     * 地址簿信息。
     */
    Acls: {
        /**
         * 地址簿中包含地址的个数。
         * @example `2`
         */
        AddressListCount: number;
        /**
         * 地址簿的唯一标识ID。
         * @example `f04ac7ce-628b-4cb7-be61-310222b7****`
         */
        GroupUuid: string;
        /**
         * 是否自动添加新匹配标签的ECS（新购且完成标签设置的ECS或修改标签的ECS）公网IP到地址簿。取值：
         * - **1**：表示自动添加。
         * - **0**：表示不自动添加。
         * @example `1`
         */
        AutoAddTagEcs: number;
        /**
         * 地址簿的描述信息。
         * @example `DEMO地址簿`
         */
        Description: string;
        /**
         * 地址簿的名称。
         * @example `demo_address_book`
         */
        GroupName: string;
        /**
         * 地址簿被引用次数。
         * @example `3`
         */
        ReferenceCount: number;
        /**
         * 地址簿的类型。取值：
         * - **ip**：IP地址簿。
         * - **domain**：域名地址簿。
         * - **port**：端口地址簿。
         * - **tag**：ECS标签地址簿。
         * - **allCloud**：云服务地址簿。
         * - **threat**：威胁情报地址簿。
         * @example `ip`
         */
        GroupType: string;
        /**
         * 多个ECS标签间的关系。取值：
         * - **and**：多个标签间为“与”关系，即同时匹配多个标签的ECS公网IP才会被加入地址簿。
         * - **or**：多个标签间为“或”关系，即只要匹配一个标签的ECS公网IP就会被加入地址簿。
         * @example `and`
         */
        TagRelation: string;
        /**
         * 地址簿支持自动添加的待匹配ECS标签信息。
         */
        TagList: {
            /**
             * 待匹配的ECS标签值。
             * @example `全部VALUE`
             */
            TagValue: string;
            /**
             * 待匹配的ECS标签Key。
             * @example `company`
             */
            TagKey: string;
        }[];
        /**
         * 地址簿的地址列表。
         */
        AddressList: string[];
    }[];
}
