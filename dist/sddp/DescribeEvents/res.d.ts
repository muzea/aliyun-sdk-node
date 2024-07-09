export interface DescribeEventsResponse {
    /**
     * 结果中显示的当前页的页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 结果的请求ID。
     * @example `769FB3C1-F4C9-42DF-9B72-7077A8989C13`
     */
    RequestId: string;
    /**
     * 结果中每页显示的数据条数。
     * @example `12`
     */
    PageSize: number;
    /**
     * 结果中数据的总条数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 异常事件列表。
     */
    Items: {
        /**
         * 异常事件操作人账号显示名。
         * @example `yundunsr`
         */
        DisplayName: string;
        /**
         * 异常事件处理状态。
         * - 0：未处理。
         * - 1：确认违例。
         * - 2：违例排除。
         * @example `0`
         */
        Status: number;
        /**
         * 异常事件的危险等级。
         * - **1**：低危。
         * - **2**：中危。
         * - **3**：高危。
         * @example `2`
         */
        WarnLevel: number;
        /**
         * 异常事件操作人账号ID。
         * @example `1978132506596***`
         */
        UserId: number;
        /**
         * 异常事件处理状态名称。
         * @example `待处理`
         */
        StatusName: string;
        /**
         * 异常事件处理时间的毫秒数。
         * @example `12223300`
         */
        DealTime: number;
        /**
         * 异常事件处理人账号名。
         * @example `det1111`
         */
        DealLoginName: string;
        /**
         * 子类型异常事件名称。
         * @example `数据下载量异常`
         */
        SubTypeName: string;
        /**
         * 是否对异常事件进行了检测强化。强化对异常事件检测的能力，可增加检测的准确性，并提升异常事件告警率。
         * - true：是。
         * - false：否。
         * @example `false`
         */
        Backed: boolean;
        /**
         * 异常事件发生时间。格式：时间戳。单位：毫秒。
         * @example `1545829129000`
         */
        EventTime: number;
        /**
         * 异常事件操作人登录名。
         * @example `det1111`
         */
        LoginName: string;
        /**
         * 子类型异常事件编码。
         * @example `020008`
         */
        SubTypeCode: string;
        /**
         * 数据流转异常事件中目标产品名称。
         * @example `RDS`
         */
        TargetProductCode: string;
        /**
         * 父类型异常事件编码。
         * @example `02`
         */
        TypeCode: string;
        /**
         * 异常事件的告警时间。格式：时间戳。单位：毫秒。
         * @example `154529000`
         */
        AlertTime: number;
        /**
         * 异常事件处理人账号ID。
         * @example `229157443385014***`
         */
        DealUserId: number;
        /**
         * 父类型异常事件名称。
         * @example `数据流转异常`
         */
        TypeName: string;
        /**
         * 异常事件处理人账号显示名。
         * @example `yundunsr`
         */
        DealDisplayName: string;
        /**
         * DSC中记录的异常事件的唯一标识ID。
         * @example `42233335555`
         */
        Id: number;
        /**
         * 异常事件所属产品名称。
         * @example `RDS`
         */
        ProductCode: string;
    }[];
}
