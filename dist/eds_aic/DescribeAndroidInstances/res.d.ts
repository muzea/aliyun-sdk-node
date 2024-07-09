export interface DescribeAndroidInstancesResponse {
    /**
     * 请求ID。
     * @example `F07A1DA1-E1EB-5CCA-8EED-12F85D32****`
     */
    RequestId: string;
    /**
     * 总条目数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 用来表示当前调用返回读取到的位置。空代表数据已经读取完毕。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6kmma/xxE9WtwL/ADvZ****`
     */
    NextToken: string;
    /**
     * 实例信息。
     */
    InstanceModel: {
        /**
         * 实例所属实例组的ID。
         * @example `ag-ayyhomlal7po****`
         */
        AndroidInstanceGroupId: string;
        /**
         * 实例ID。
         * @example `acp-8at8h6ejkadjh****`
         */
        AndroidInstanceId: string;
        /**
         * 实例名称。
         * @example `name`
         */
        AndroidInstanceName: string;
        /**
         * 实例状态。
         * @example `RUNNING`
         */
        AndroidInstanceStatus: string;
        /**
         * 网卡IP。
         * @example `192.168.22.48`
         */
        NetworkInterfaceIp: string;
        /**
         * 已分配的用户。
         * @example `test`
         */
        AuthorizedUserId: string;
        /**
         * 已绑定的用户。
         * @example `test`
         */
        BindUserId: string;
        /**
         * 持久会话ID。
         * @example `p-0btrd5zj8epo****`
         */
        PersistentAppInstanceId: string;
        /**
         * 物理实例ID。
         * @example `ai-9ey6io0q58rcd****`
         */
        AppInstanceId: string;
        /**
         * 密钥对ID。
         * @example `kp-5hh431emkpucs****`
         */
        KeyPairId: string;
        /**
         * 创建时间。
         * @example `2023-05-06 10:42:10`
         */
        GmtCreate: string;
        /**
         * 修改时间。
         * @example `2023-05-06 10:42:10`
         */
        GmtModified: string;
        /**
         * 交付组ID。
         * @example `aig-i7yv6tkn7kh8dv****`
         */
        AppInstanceGroupId: string;
        /**
         * 地域 ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 实例数据备份中和恢复中的进度。
         * @example `100`
         */
        Rate: number;
        /**
         * 实例数据备份失败和恢复失败的错误原因。
         * @example `FilePathNotFound`
         */
        ErrorCode: string;
    }[];
}
