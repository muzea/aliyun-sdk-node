export interface DescribeEventsRequest {
    /**
     * 请求和接收消息的语言类型，默认为**zh_cn**。取值：
     * - **zh_cn**：中文。
     * - **en_us**：英文。
     * @example `zh_cn`
     */
    "Lang"?: string;
    /**
     * 异常事件的唯一标识id。
     * @example `789026`
     */
    "Id"?: number;
    /**
     * 异常事件的操作人账号ID。
     * @example `1978132506596***`
     */
    "UserId"?: number;
    /**
     * 异常事件的处理人账号ID。
     * @example `yundun-***`
     */
    "DealUserId"?: string;
    /**
     * 异常事件的处理状态。
     * - 0：未处理。
     * - 1：确认违例。
     * - 2：违例排除。
     * @example `1`
     */
    "Status"?: string;
    /**
     * 父类型异常事件的名称。
     * - 01：权限使用异常。
     * - 02：数据流转异常。
     * - 03：数据操作异常。
     * @example `02`
     */
    "TypeCode"?: string;
    /**
     * 子类型异常事件的名称。
     * > 如果根据子类型异常事件的名称查询异常事件列表，子类型异常事件名称可通过**DescribeEventTypes**接口获取。
     * @example `数据下载量异常`
     */
    "SubTypeCode"?: string;
    /**
     * 异常事件发生时间，即开始检测异常事件时间。格式：时间戳。单位：毫秒。
     * @example `1657900000`
     */
    "StartTime"?: string;
    /**
     * 异常事件结束时间，即结束检测异常事件时间的。格式：时间戳。单位：毫秒。
     * @example `1698700000`
     */
    "EndTime"?: string;
    /**
     * 列表每页显示的数据最大条数。
     * @example `12`
     */
    "PageSize"?: number;
    /**
     * 分页查询时的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 数据资产实例名称。
     * @example `rm-uf6yzvbc2tg90iuxk.l****`
     */
    "InstanceName"?: string;
    /**
     * 数据资产表所属产品名称，取值：**MaxCompute、OSS、ADS、OTS、RDS**等。
     * @example `OSS`
     */
    "ProductCode"?: string;
    /**
     * 数据流转异常类型事件中的目标产品名称，取值：**MaxCompute、OSS、ADS、OTS、RDS**等。
     * @example `RDS`
     */
    "TargetProductCode"?: string;
    /**
     * 子账号用户名。
     * @example `name`
     */
    "UserName"?: string;
    /**
     * 异常事件的危险等级。
     * - **1**：低危。
     * - **2**：中危。
     * - **3**：高危。
     * @example `1`
     */
    "WarnLevel"?: number;
}
