export interface CursorRequest {
    /**
     * 云产品的数据命名空间。
     * 关于如何获取云产品的数据命名空间，请参见[云产品监控项](~~163515~~)。
     * @example `acs_ecs_dashboard`
     */
    "Namespace": string;
    /**
     * 云产品的监控项名称。
     * 关于如何获取云产品的监控项名称，请参见[云产品监控项](~~163515~~)。
     * @example `cpu_idle`
     */
    "Metric": string;
    /**
     * 监控项的时间间隔。
     * 单位：秒。
     * > 监控项的时间间隔通常为60秒。特殊取值，请参见[云产品监控项](~~163515~~)中的参数`Period`。
     * @example `60`
     */
    "Period": number;
    /**
     * 开始时间戳。
     * 单位：毫秒。
     * > 由于云监控中的监控数据只能保存90天，建议开始时间与当前时间间隔小于等于90天。
     * @example `1641627000000`
     */
    "StartTime": number;
    /**
     * 结束时间戳。
     * 单位：毫秒。
     * > 结束时间无限制，可以设置为未来的某个时间。
     * @example `1641645000000`
     */
    "EndTime": number;
    /**
     * 监控项的维度信息。
     */
    "Matchers"?: {
        /**
         * 监控项维度的键。
         * 监控项维度的格式：key-value键值对形式的集合，例如：`instanceId:i-2ze2d6j5uhg20x47****`或`userId:120886317861****`。
         * 关于如何获取监控项的维度，请参见[云产品监控项](~~163515~~)中的参数`Dimension`。
         * @example `userId`
         */
        Label: string;
        /**
         * 监控项维度的值。
         * 监控项维度的格式：key-value键值对形式的集合，例如：`instanceId:i-2ze2d6j5uhg20x47****`或`userId:120886317861****`。
         * 关于如何获取监控项的维度，请参见[云产品监控项](~~163515~~)中的参数`Dimension`。
         * @example `120886317861****`
         */
        Value: string;
        /**
         * 监控项维度的匹配关系。
         * 目前仅支持EQUALS（等于）。
         * @example `EQUALS`
         */
        Operator: string;
    }[];
}
