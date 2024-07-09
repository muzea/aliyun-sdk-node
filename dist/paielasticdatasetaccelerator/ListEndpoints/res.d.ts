export interface ListEndpointsResponse {
    /**
     * 请求ID。
     * @example `A731A84D-55C9-44F7-99BB-E1CF0CF1****`
     */
    RequestId: string;
    /**
     * 数据集加速端点列表。
     */
    Endpoints: {
        /**
         * 数据集加速端点的创建者的Uid，在阿里云内为RAM用户ID（阿里云账号创建则直接为阿里云账号ID）。
         * @example `27606534679741****`
         */
        UserId: string;
        /**
         * 数据集加速端点的资源拥有者的Uid，在阿里云内为阿里云账号ID。
         * @example `155770209819****`
         */
        OwnerId: string;
        /**
         * 数据集加速端点创建的时间。格式使用 ISO8601（RFC3339）。
         * @example `2014-10-02T15:01:23Z`
         */
        GmtCreateTime: string;
        /**
         * 数据集加速端点最后更新的时间。格式使用 ISO8601（RFC3339）。
         * @example `2014-10-02T15:01:23Z`
         */
        GmtModifiedTime: string;
        /**
         * 挂载点的唯一标识符。
         * @example `end-ivrq92qhbyrg4j****`
         */
        Uuid: string;
        /**
         * 挂载点的名称。
         * @example `endpoint-1`
         */
        Name: string;
        /**
         * 挂载点的网络类型，可能值：
         * - VPC：挂载点处于VPC网络。
         * - INNER：挂载点处于PAI内部网络中，用于PAI其他产品进行访问。
         * @example `VPC`
         */
        Type: string;
        /**
         * 挂载点使用的专有网络 VPC ID。
         * @example `vpc-j6co2fcdsl1q0gnuc****`
         */
        VpcId: string;
        /**
         * 挂载点使用的交换机vSwitch ID。
         * @example `vsw-j6cmr00qjyrft6jo2****`
         */
        VswitchId: string;
        /**
         * 数据集加速槽挂载点的状态。
         */
        Status: any;
        /**
         * 所属加速实例的ID。
         * @example `inst-ivrq92qhbyrg4jctih`
         */
        InstanceId: string;
    }[];
    /**
     * 列表内元素数量总和。
     * @example `100`
     */
    TotalCount: number;
}
