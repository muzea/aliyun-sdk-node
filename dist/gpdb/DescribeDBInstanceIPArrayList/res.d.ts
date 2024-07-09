export interface DescribeDBInstanceIPArrayListResponse {
    /**
     * 请求ID。
     * @example `CB7AA0BF-BE41-480E-A3DC-C97BF85A391B`
     */
    RequestId: string;
    Items: {
        /**
         * 实例的IP白名单分组列表。
         */
        DBInstanceIPArray: {
            /**
             * IP白名单分组的名字。
             * @example `Default`
             */
            DBInstanceIPArrayName: string;
            /**
             * IP白名单分组下的IP列表，最多1000个以逗号隔开，有以下三种格式：
             * - 0.0.0.0/0
             * - 10.23.12.24（IP）
             * - 10.23.12.24/24（CIDR模式，无类域间路由，`/24`表示了地址中前缀的长度，范围为`[1,32]`）
             * @example `127.0.0.1`
             */
            SecurityIPList: string;
            /**
             * 默认为空。用以区分不同的属性值，控制台不显示带有`hidden`属性的分组。
             * @example `hidden`
             */
            DBInstanceIPArrayAttribute: string;
        }[];
    };
}
