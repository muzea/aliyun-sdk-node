export interface CreateMyBaseResponse {
    /**
     * 请求ID。
     * @example `937F6B32-A796-53A0-99C8-F7A9660E****`
     */
    RequestId: string;
    OrderList: {
        /**
         * 订单列表。
         */
        OrderList: {
            /**
             * 订单ID。
             * @example `21767077790****`
             */
            OrderId: string;
            /**
             * 主机创建成功的时间戳。
             * @example `1661498032347`
             */
            CreateTimestamp: number;
            /**
             * 已创建成功的ECS主机ID，多个主机ID以英文逗号（,）分隔。
             * @example `["i-t4n1tandot8j3axw****","i-t4n1tandot8j3axv****"]`
             */
            ECSInstanceIds: string;
            /**
             * 创建的专有版集群ID。
             * @example `dhg-7a9********`
             */
            DedicatedHostGroupName: string;
        }[];
    };
}
