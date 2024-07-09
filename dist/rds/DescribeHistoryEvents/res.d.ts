export interface DescribeHistoryEventsResponse {
    /**
     * 页码，取值：大于0且不超过integer的最大值。默认值：**1**。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `7A41C147-C8D0-4DAE-A1A2-17EBCD60DFA1`
     */
    RequestId: string;
    /**
     * 每页记录数。默认值：30。
     * @example `30`
     */
    PageSize: number;
    /**
     * 总记录数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 事件列表。
     */
    Items: {
        /**
         * 任务ID。
         * @example `4309`
         */
        Id: string;
        /**
         * 地域。
         * @example `cn-beijing`
         */
        Region: string;
        /**
         * 事件来源。
         * @example `loanBill`
         */
        Source: string;
        /**
         * 数据库版本。
         * @example `8.0`
         */
        Specversion: string;
        /**
         * 待处理事件的名称。
         * @example `QiTian`
         */
        Subject: string;
        /**
         * 查询任务已运行时间。单位：秒。
         * @example `1675232573125`
         */
        Time: string;
        /**
         * 事件类型。详情请参见[历史事件](~~129759~~)。
         * @example `host`
         */
        Type: string;
        /**
         * 数据概览。
         */
        Data: {
            /**
             * 事件类型。
             * @example `StatusNotification`
             */
            EventType: string;
            /**
             * 事件ID。
             * @example `669036`
             */
            EventId: string;
            /**
             * 应用分组的云服务类型。取值：***web**：web应用。***native**：本地应用。
             * @example `web`
             */
            CmsProduct: string;
            /**
             * 数据库类型。
             * @example `mysql`
             */
            DbType: string;
            /**
             * 翻页参数。
             * @example `1`
             */
            DetailImpact: string;
            /**
             * 实例操作详情。
             * @example `xxxx`
             */
            DetailReason: string;
            /**
             * 告警结束时间。格式：<i>yyyy-mm-dd</i>t<i>hh:mm</i>z（utc时间）。
             * @example `2023-03-06T11:46:01Z`
             */
            EndTime: string;
            /**
             * 系统事件分类。详情请参见[历史事件](~~129759~~)。
             * @example `Exception`
             */
            EventCategory: string;
            /**
             * 事件编码。
             * @example `ENT000014`
             */
            EventCode: string;
            /**
             * 事件详情。
             * @example `xxxxx`
             */
            EventDetail: string;
            /**
             * 事件影响概况。
             * @example `xxxxx`
             */
            EventImpact: string;
            /**
             * 事件等级。详情请参见[历史事件](~~129759~~)。
             * @example `high`
             */
            EventLevel: string;
            /**
             * 事件操作的来源。
             * @example `xxxxx`
             */
            EventReason: string;
            /**
             * 告警事件的状态。取值包括：
             * - **1**：PENDING（待处理）
             * - **2**：IGNORE（已忽略）
             * - **4**：HANDLED（已确认）
             * - **8**：FAULT（已标记误报）
             * - **16**：DEALING（处理中）
             * - **32**：DONE（处理完毕）
             * - **64**：EXPIRE（已经过期）
             * @example `1`
             */
            EventStatus: string;
            /**
             * 创建时间。格式：<i>yyyy-mm-dd</i>t<i>hh:mm</i>z（utc时间）。
             * @example `2023-03-17T16:05:40Z`
             */
            GmtCreated: string;
            /**
             * 更新时间。格式：<i>yyyy-mm-dd</i>t<i>hh:mm:ss</i>z（utc时间）。
             * @example `2022-12-14T09:44:39.000+0000`
             */
            GmtModified: string;
            /**
             * 处理状态。
             * @example `done`
             */
            HandleStatus: string;
            /**
             * 是否有生命周期。
             * @example `false`
             */
            HasLifeCycle: number;
            /**
             * 实例ID。
             * @example `rg-acfmy****`
             */
            InstanceId: string;
            /**
             * 实例名称。
             * @example `dhimgsearch`
             */
            InstanceName: string;
            /**
             * 是否关闭成功。**0**：关闭；**1**：开启。
             * @example `0`
             */
            IsClosed: number;
            /**
             * 产品名称。
             * @example `rds`
             */
            Product: string;
            /**
             * 地域ID。可调用DescribeRegions获取。
             * @example `cn-guangzhou`
             */
            RegionId: string;
            /**
             * 资源类型。唯一取值：**INSTANCE**。
             * @example `INSTANCE`
             */
            ResourceType: string;
            /**
             * 源数据的类型。
             * @example `MSE`
             */
            SourceType: string;
            /**
             * 开始时间。格式：<i>yyyy-mm-dd</i>t<i>hh:mm</i>z（utc时间）。
             * @example `2022-11-29T07:23Z`
             */
            StartTime: string;
            /**
             * 资源所属用户ID。
             * @example `16986832xxxxx`
             */
            Uid: string;
        };
    }[];
}
