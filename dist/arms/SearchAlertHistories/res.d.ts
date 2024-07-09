export interface SearchAlertHistoriesResponse {
    /**
     * 请求ID
     * @example `2FC13182-B9AF-4E6B-BE51-72669B7C****`
     */
    RequestId: string;
    /**
     * 返回结构体
     */
    PageBean: {
        /**
         * 查询结果分页的页码
         * @example `1`
         */
        PageNumber: number;
        /**
         * 查询结果分页的每页项目数量
         * @example `10`
         */
        PageSize: number;
        /**
         * 查询结果总数
         * @example `2`
         */
        TotalCount: number;
        /**
         * 报警历史对象列表
         */
        AlarmHistories: {
            /**
             * 报警发送时间
             * @example `1595564179000`
             */
            AlarmTime: number;
            /**
             * 内部字段
             * @example `""`
             */
            StrategyId: string;
            /**
             * 报警投递返回的状态码
             * @example `200`
             */
            AlarmResponseCode: number;
            /**
             * 接收报警的邮箱地址
             * @example `someone@example.com`
             */
            Emails: string;
            /**
             * 用户ID
             * @example `113197164949****`
             */
            UserId: string;
            /**
             * 报警Webhook（如钉钉机器人Webhook地址）
             * @example `https://oapi.dingtalk.com/robot/send?access_token=91f2f65002fefe0ab9b71e6590c5ca504348cad742ff01e9c8ab204439ca****`
             */
            AlarmSources: string;
            /**
             * 报警内容
             * @example `"报警名称：Alert1\n报警时间：2020-07-24 12:14:00\n报警内容：共有4条记录触发异常：****"`
             */
            AlarmContent: string;
            /**
             * 接收报警的手机号码
             * @example `1381111****`
             */
            Phones: string;
            /**
             * 报警规则类型（默认为4）：
             * - `1`：基于下钻数据集的自定义监控报警规则。
             * - `3`：基于平铺数据集的自定义监控报警规则。
             * - `4`：前端监控报警规则，包含默认前端监控报警规则（AlertType=6）。
             * - `5`：应用监控报警规则，包含默认应用监控报警规则（AlertType=7）。
             * - `6`：默认前端监控报警规则。
             * - `7`：默认应用监控报警规则。
             * - `8`：链路追踪Tracing Analysis报警规则。
             * - `101`：Prometheus监控报警规则。
             * @example `4`
             */
            AlarmType: number;
            /**
             * 内部字段
             * @example `""`
             */
            Target: string;
            /**
             * 报警发送记录ID
             * @example `123`
             */
            Id: number;
        }[];
    };
}
