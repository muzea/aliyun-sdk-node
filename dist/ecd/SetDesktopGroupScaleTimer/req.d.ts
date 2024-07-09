export interface SetDesktopGroupScaleTimerRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云电脑池ID。
     * @example `dg-2i8qxpv6t1a03****`
     */
    "DesktopGroupId": string;
    /**
     * 自动扩缩的定时任务信息列表。
     */
    "ScaleTimerInfos"?: {
        /**
         * 策略类型。
         * @example `rise`
         */
        Type: string;
        /**
         * 会话占用率阈值，用作多会话云电脑池的自动伸缩触发条件。会话占用率的计算公式为：
         * ```会话占用率 = 已绑定会话数 / (云电脑资源总数 × 每台云电脑支持的最大会话数) × 100%```
         * 当会话占用率达到该阈值时，则会新建云电脑；未达到该阈值时，则删除多余的云电脑。
         * @example `0.85`
         */
        RatioThreshold: number;
        /**
         * 会话断开连接后继续保留的时间。单位为毫秒，取值范围为180000（3分钟）~345600000（4天）。取值为0时，表示始终保留。
         * 当会话因为用户主动断开或因为其他因素意外断开时，从断开的时刻开始计算，若在该保留时长内用户始终未重新建立与该会话的连接，则该会话注销，未保存的数据都将销毁；若在该保留时长内，用户重新建立连接成功，则仍可进入原来的会话，仍可访问对话断开之前的数据。
         * @example `180000`
         */
        KeepDuration: number;
        /**
         * 伸缩策略参数之一：购买云电脑数。取值范围：0~200。
         * @example `5`
         */
        BuyResAmount: number;
        /**
         * 伸缩策略参数之一：云电脑最小数量。取值范围：0~200。
         * @example `5`
         */
        MinResAmount: number;
        /**
         * 伸缩策略参数之一：云电脑最大数量。取值范围：0~200。
         * @example `100`
         */
        MaxResAmount: number;
        /**
         * 触发时间的Cron表达式。
         * @example `0 0 12 ? * 1`
         */
        Cron: string;
        /**
         * 多会话云电脑池的负载均衡策略。
         * @example `0`
         */
        LoadPolicy: number;
    }[];
}
