export interface ListIoTCloudConnectorGroupsResponse {
    /**
     * 列表条目数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `10`
     */
    MaxResults: number;
    /**
     * 请求ID。
     * @example `54B48E3D-DF70-471B-AA93-08E683A1B45`
     */
    RequestId: string;
    /**
     * 实例组列表信息。
     */
    IoTCloudConnectorGroups: {
        /**
         * 实例组ID。
         * @example `iotccg-g00epppbi9di9y****`
         */
        IoTCloudConnectorGroupId: string;
        /**
         * 实例组的状态。取值：
         * - **Creating**：创建中。
         * - **Created**：创建完成。
         * - **Deleting**：删除中。
         * - **Updating**：更新中。
         * @example `Created`
         */
        IoTCloudConnectorGroupStatus: string;
        /**
         * 云连接器实例列表。
         */
        IoTCloudConnectors: {
            /**
             * 云连接器实例ID。
             * @example `iotcc-bp1odcab8tmno0hdq****`
             */
            IoTCloudConnectorId: string;
            /**
             * 云连接器实例的状态。取值：
             * - **Creating**：创建中。
             * - **Created**：创建完成。
             * - **Deleting**：删除中。
             * - **Updating**：修改中。
             * @example `Created`
             */
            IoTCloudConnectorStatus: string;
            /**
             * 云连接器实例的名称。
             * @example `cc01`
             */
            IoTCloudConnectorName: string;
            /**
             * 云连接器实例描述信息。
             * @example `cc01`
             */
            IoTCloudConnectorDescription: string;
            /**
             * 云连接器实例创建时间。
             * @example `2021-10-01 00:00:00`
             */
            CreateTime: number;
            /**
             * 云连接器实例的运营商。取值：
             * - **telecom**：中国电信。
             * - **mobile**：中国移动。
             * - **unicom**：中国联通。
             * @example `mobile`
             */
            ISP: string;
            /**
             * 运营商APN ID。
             * @example `CMWAP`
             */
            APN: string;
            /**
             * 服务类型。取值：
             * - **Normal**：普通型。
             * - **CC5G**：云连接器5G实例托管类型。
             * - **CC5GCCIoT**：云连接器5G过户类型。
             * @example `Normal`
             */
            ServiceType: string;
        }[];
        /**
         * 实例组的名称。
         * @example `cctest`
         */
        Name: string;
        /**
         * 实例组的描述信息。
         * @example `test`
         */
        Description: string;
        /**
         * 实例组的创建时间。
         * @example `2021-10-01 00:00:00`
         */
        CreateTime: number;
        /**
         * 云连接器实例的版本，不同版本有不同功能限制和计费策略。取值：
         * - **Basic**：基础版。
         * - **Standard**：标准版。
         * <props="china">云连接器实例默认创建标准版，如果需要创建基础版实例，请[提交工单](https://selfservice.console.aliyun.com/ticket/category/ga/today)申请。</props>
         * <props="intl">云连接器实例默认创建标准版，如果需要创建基础版实例，请[提交工单](https://workorder-intl.console.aliyun.com/?spm=5176.11182188.console-base-top.dworkorder.18ae4882n3v6ZW#/ticket/createIndex)申请</props>
         * @example `Standard`
         */
        Type: string;
        /**
         * 服务类型。取值：
         * - **Normal**：普通型。
         * - **CC5G**：云连接器5G实例托管类型。
         * - **CC5GCCIoT**：云连接器5G过户类型。
         * @example `Normal`
         */
        ServiceType: string;
    }[];
}
