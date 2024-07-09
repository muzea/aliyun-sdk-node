export interface DescribeEventDetailResponse {
    /**
     * 结果的请求ID。
     * @example `69FB3C1-F4C9-42DF-9B72-7077A8989C13`
     */
    RequestId: string;
    /**
     * 异常事件详情列表。
     */
    Event: {
        /**
         * 异常事件操作人账号显示名。
         * @example `yundunsr`
         */
        DisplayName: string;
        /**
         * 异常事件处理状态。取值：
         * - **0**：未处理。
         * - **1**：确认违例。
         * - **2**：违例排除。
         * @example `0`
         */
        Status: number;
        /**
         * 异常事件处理原因记录。
         * @example `Anomaly confirmed
        `
         */
        DealReason: string;
        /**
         * 异常事件操作人账号ID。
         * @example `229157443385014***`
         */
        UserId: number;
        /**
         * 异常事件处理状态名称。
         * @example `Pending`
         */
        StatusName: string;
        /**
         * 异常事件处理时间。格式：时间戳。单位：毫秒。
         * @example `1611139155000`
         */
        DealTime: number;
        /**
         * 异常事件处理人账号登录名。
         * @example `det1111`
         */
        DealLoginName: string;
        /**
         * 子类型异常事件名称。
         * @example `Anomalous volume of downloaded data
        `
         */
        SubTypeName: string;
        /**
         * 是否对异常事件进行了检测强化。取值：
         * - **true**：是。
         * - **false**：否。
         * > 强化对异常事件检测的能力，可增加检测的准确性，并提升异常事件告警率。
         * @example `false`
         */
        Backed: boolean;
        /**
         * 异常事件所属产品的资产实例名称。
         * @example `in-222***`
         */
        DataInstance: string;
        /**
         * 异常事件发生时间。格式：时间戳。单位：毫秒。
         * @example `1545829129000`
         */
        EventTime: number;
        /**
         * 异常事件操作人账号名。
         * @example `det1111`
         */
        LoginName: string;
        /**
         * 子类型异常事件编码。
         * @example `020008`
         */
        SubTypeCode: string;
        /**
         * 告警日志信息。
         * @example `{"client_ip": ["106.11.XX.XX", "106.11.XX.XX", "106.11.XX.XX", "106.11.XX.XX", "106.11.XX.XX", "106.11.XX.XX", "106.11.XX.XX", "106.11.XX.XX", "106.11.XX.XX"], "start_time": "2020-05-10 00:00:01", "instance": ["omniscience-data", "punish-beaver-data"], "end_time": "2020-05-10 00:21:22", "client_ua": ["Java/1.8.0_152", "Java/1.8.0_92", "aliyun-sdk-java/2.0.0", "aliyun-sdk-java/2.8.0(Linux/4.9.151-015.ali3000.alios7.x86_64/amd64;1.8.0_152)"], "user_name": 1512222261295262}`
         */
        LogDetail: string;
        /**
         * 父类型异常事件编码。
         * @example `02`
         */
        TypeCode: string;
        /**
         * 异常事件的告警发生时间。格式：时间戳。单位：毫秒。
         * @example `1545829129000`
         */
        AlertTime: number;
        /**
         * 异常事件处理人账号ID。
         * @example `229157443385014***`
         */
        DealUserId: number;
        /**
         * 父类型异常事件名称。取值：
         * - **01**：权限使用异常。
         * - **02**：数据流转异常。
         * - **03**：数据操作异常。
         * @example `Anomalous data flow
        `
         */
        TypeName: string;
        /**
         * 异常事件处理人账号显示名。
         * @example `yundunsr`
         */
        DealDisplayName: string;
        /**
         * 数据安全中心记录的异常事件的唯一标识ID。
         * @example `52234`
         */
        Id: number;
        /**
         * 异常事件所属的产品名称。取值：**MaxCompute、OSS、ADS、OTS、RDS**等。
         * @example `MaxCompute`
         */
        ProductCode: string;
        /**
         * 处置历史的信息。
         */
        HandleInfoList: {
            /**
             * 解禁状态。取值：
             * - **0**：禁用。
             * - **1**：解禁。
             * - **-1**：禁用失败。
             * - **-2**：解禁失败。
             * @example `1`
             */
            Status: number;
            /**
             * 解禁时间。格式：时间戳。单位：毫秒。
             * @example `1611139155000`
             */
            EnableTime: number;
            /**
             * 处置时长，为空时为永久处置。单位：分钟。
             * @example `10`
             */
            HandlerValue: number;
            /**
             * 禁用时间。格式：时间戳。单位：毫秒。
             * @example `1611139155000`
             */
            DisableTime: number;
            /**
             * 处置方式。
             * @example `Remove from the whitelist
            `
             */
            HandlerName: string;
            /**
             * 处置类型。
             * @example `rds_security_ip`
             */
            HandlerType: string;
            /**
             * 处理账号。
             * @example `sddp-test2`
             */
            CurrentValue: string;
            /**
             * 处置ID。
             * @example `11`
             */
            Id: number;
        }[];
        /**
         * 异常事件详情中的具体内容。
         */
        Detail: {
            /**
             * 异常事件内容。
             */
            Content: {
                /**
                 * 异常事件内容的标题。
                 * @example `Anomaly description
                `
                 */
                Label: string;
                /**
                 * 异常事件内容的说明。
                 * @example `The account was used to access OSS from an unusual terminal whose IP address is 1.2.3.4 from 00:06:45 on September 9, 2019 to 00:57:37 on September 9, 2019.`
                 */
                Value: string;
                /**
                 * 异常事件名称。
                 * @example `daliaoyuncom`
                 */
                Name: string;
            }[];
            /**
             * 异常事件的基线行为画像。
             */
            Chart: {
                /**
                 * 图表展示类型。取值：
                 * - **1**：柱状图。
                 * - **2**：折线图。
                 * @example `1`
                 */
                Type: string;
                /**
                 * 异常事件基线行为画像名称。
                 * @example `Baseline behavior chart
                `
                 */
                Label: string;
                /**
                 * X轴数据项的标签描述。
                 * @example `Number of days
                `
                 */
                XLabel: string;
                /**
                 * Y轴数据项的标签描述。
                 * @example `Value`
                 */
                YLabel: string;
                /**
                 * 异常事件基线行为画像的数据项。
                 */
                Data: {
                    /**
                     * Y轴的数据项的值。
                     * @example `[1,2,3,...]`
                     */
                    Y: string[];
                    /**
                     * X轴的数据项的值。
                     * @example `[test1,test2,...]`
                     */
                    X: string[];
                    /**
                     * Z轴的数据项的值。
                     */
                    Z: string[];
                };
                /**
                 * 图表展示类型。取值：
                 * - **1**：柱状图。
                 * - **2**：折线图。
                 * > NewAlarm为true时才会返回该字段。
                 * @example `1`
                 */
                ChatType: number;
                /**
                 * 图标标题。
                 * > NewAlarm为true时才会返回该字段。
                 * @example `misskingm`
                 */
                Name: string;
                /**
                 * Z轴数据项的标签描述。
                 * > NewAlarm为true时才会返回该字段。
                 * @example `chart description`
                 */
                ZLabel: string;
            }[];
            /**
             * 异常事件来源信息。
             */
            ResourceInfo: {
                /**
                 * 异常事件来源标题。
                 * @example `Risk`
                 */
                Label: string;
                /**
                 * 异常事件来源的说明。
                 * @example `Based on the record of authentication by using an unusual terminal, an attacker may have obtained the access permission of the account, or an employee accessed data from a personal terminal.`
                 */
                Value: string;
            }[];
        };
        /**
         * 是否为新版告警。取值：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        NewAlarm: boolean;
    };
}
