export interface CreateFileSystemRequest {
    /**
     * 订单数组列表，列表里面元素为每个订单的详情。
     */
    "OrderDetails": {
        /**
         * 订单类型，取值：BUY（购买）。
         * @example `BUY`
         */
        OrderType: string;
        /**
         * NAS的计费方式。取值：
         * - PrePaid：包年包月（暂不支持此方式）。
         * - PostPaid：按量计费。
         * @example `PostPaid`
         */
        ChargeType: string;
        /**
         * 文件系统名称。
         * 长度限制为1-80个字符，可包含字母、数字、“-”“_”字符
         * @example `nasFile`
         */
        FileSystemName: string;
        /**
         * 节点ID。
         * @example `cn-suzhou-telecom`
         */
        EnsRegionId: string;
        /**
         * 存储类型，取值：
         * - capacity：容量型。
         * - Performance：极速型。
         * @example `capacity`
         */
        StorgeType: string;
        /**
         * 存储协议。取值：nfs/smb。
         * @example `nfs`
         */
        ProtocolType: string;
        /**
         * VPC网络的ID号。
         * @example `vpc-xxx`
         */
        NetworkId: string;
        /**
         * 挂载点名称。长度限制为1-80个字符，可包含字母、数字、“-”“_”字符。
         * @example `nasMount`
         */
        MountTargetDomain: string;
    }[];
}
